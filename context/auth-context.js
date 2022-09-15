import firebase from '../components/utils/firebase';
import { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

const initialState = {
  token: '',
  exporationTime: 0,
  loginHandler: () => {},
  logoutHandler: () => {},
};

const AuthContext = createContext({ initialState });

export const AuthContextProvider = (props) => {
  const auth = getAuth();
  const router = useRouter();
  const [token, setToken] = useState('');
  const [expirationTime, setExpirationTime] = useState(0);
  const [userEmail, setUserEmail] = useState('');

  const loginHandler = (tok, exp, email) => {
    setToken(tok);
    setExpirationTime(exp);
    setUserEmail(email);
  };

  const logoutHandler = () => {
    setToken(null);
    setExpirationTime(0);
    signOut(auth)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    router.push('/');
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('is logged', user);
        const loggedData = user.stsTokenManager;
        loginHandler(
          loggedData.accessToken,
          loggedData.expirationTime,
          user.email
        );
      } else {
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const authValues = {
    token,
    expirationTime,
    userEmail,
    loginHandler: loginHandler,
    logoutHandler: logoutHandler,
  };
  return (
    <AuthContext.Provider value={{ authValues }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
