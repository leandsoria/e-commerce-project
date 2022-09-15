import { useState, useRef, useContext } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebase } from '../../components/utils/firebase';
import { useRouter } from 'next/router';
import Button from '../../components/UI/Button';
import AuthContext from '../../context/auth-context';
signInWithEmailAndPassword()
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

const Login = () => {
  const router = useRouter();
  const usernameSubmitted = useRef();
  const passwordSubmitted = useRef();

  const authCtx = useContext(AuthContext);
  const { authValues } = authCtx;
  const auth = getAuth();

  const showThisInConsole = () => {
    const username = usernameSubmitted.current.value;
    const password = passwordSubmitted.current.value;

    const response = signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        authValues.loginHandler(
          user.stsTokenManager.accessToken,
          user.stsTokenManager.expirationTime,
          user.email
        );
        router.push('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    console.log(response);
  };

  return (
    <section className="h-[600px] ">
      <div className="h-full w-full py-24 px-16 max-w-7xl m-auto bg-gray-300 flex flex-col items-center">
        <div>
          <h1>Log in!!</h1>
        </div>
        <form className="flex flex-col max-w-xs w-full">
          <label htmlFor="username" className="mb-2 font-semibold">
            Username:
          </label>
          <input
            type="text"
            id="username"
            placeholder="Insert your username"
            className="border-2 py-2 px-4 mb-4 focus:outline-none focus:border-orange-300 transition-colors duration-200 rounded"
            ref={usernameSubmitted}
            required
          />
          <label htmlFor="password" className="mb-2 font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Insert your password"
            className="border-2 py-2 px-4 focus:outline-none focus:border-orange-300 transition-colors duration-200 rounded"
            ref={passwordSubmitted}
            required
          />
          <Button
            btnClass={'mt-4 bg-orange-500 text-white hover:bg-orange-600'}
            passFunction={showThisInConsole}
          >
            Login
          </Button>
          <Button btnClass={'mt-4 bg-white text-black hover:bg-gray-200'}>
            Forgot your Password?
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Login;
