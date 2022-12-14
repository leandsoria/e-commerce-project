import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faRightToBracket,
  faMagnifyingGlass,
  faUser,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import AuthContext from '../../../context/auth-context';
import {
  NavbarMainList,
  NavbarMainItem,
  NavbarMainMenu,
  NavbarDropdownMenuItem,
  NavbarDropdownMenuList,
  NavbarMainItemDropdown,
} from './NavbarItems';

const Navbar = () => {
  const authCtx = useContext(AuthContext);
  const userEmail = authCtx.authValues.userEmail;
  const authToken = authCtx.authValues.token;
  const authLogoutHandler = () => {
    authCtx.authValues.logoutHandler();
  };

  return (
    <nav className="flex md:justify-around md:h-20 items-center w-full bg-whtie relative z-[90] ">
      <div>
        <Link href="/">
          <a className="text-2xl font-bold bg-gray-200 px-6 py-2 rounded-lg">
            E-C
          </a>
        </Link>
      </div>
      <div>
        <NavbarMainList>
          <NavbarMainItemDropdown>
            Women
            <NavbarDropdownMenuList>
              <NavbarDropdownMenuItem>
                <Link href="/women/shoes">
                  <a className="px-4 py-2 block">Shoes</a>
                </Link>
              </NavbarDropdownMenuItem>
              <NavbarDropdownMenuItem>
                <Link href="/women/shirt">
                  <a className="px-4 py-2 block">Shirt</a>
                </Link>
              </NavbarDropdownMenuItem>
              <NavbarDropdownMenuItem>
                <Link href="/women/pants">
                  <a className="px-4 py-2 block">Pants</a>
                </Link>
              </NavbarDropdownMenuItem>
            </NavbarDropdownMenuList>
          </NavbarMainItemDropdown>
          <NavbarMainItemDropdown>
            Men
            <NavbarDropdownMenuList>
              <NavbarDropdownMenuItem>
                <a className="px-4 py-2 block">Shoes</a>
              </NavbarDropdownMenuItem>
              <NavbarDropdownMenuItem>
                <a className="px-4 py-2 block">Shirt</a>
              </NavbarDropdownMenuItem>
              <NavbarDropdownMenuItem>
                <a className="px-4 py-2 block">Pants</a>
              </NavbarDropdownMenuItem>
            </NavbarDropdownMenuList>
          </NavbarMainItemDropdown>
          <NavbarMainItemDropdown>
            Children
            <NavbarDropdownMenuList>
              <NavbarDropdownMenuItem>
                <a className="px-4 py-2 block">Shoes</a>
              </NavbarDropdownMenuItem>
              <NavbarDropdownMenuItem>
                <a className="px-4 py-2 block">Shirt</a>
              </NavbarDropdownMenuItem>
              <NavbarDropdownMenuItem>
                <a className="px-4 py-2 block">Pants</a>
              </NavbarDropdownMenuItem>
            </NavbarDropdownMenuList>
          </NavbarMainItemDropdown>{' '}
          {!authToken && (
            <NavbarMainItem>
              <Link href="/login">
                <a className="w-full h-full px-4 py-2 hover:bg-gray-50 rounded-md transition-colors duration-200">
                  Login
                  <FontAwesomeIcon
                    icon={faRightToBracket}
                    className=" text-orange-600"
                  />
                </a>
              </Link>
            </NavbarMainItem>
          )}
          {authToken && (
            <NavbarMainItemDropdown>
              Account
              <FontAwesomeIcon icon={faUser} className=" text-orange-600" />
              <NavbarDropdownMenuList>
                <NavbarDropdownMenuItem>
                  <a className="px-4 py-2 block">{userEmail}</a>
                </NavbarDropdownMenuItem>
                <NavbarDropdownMenuItem>
                  <Link href="/load-products">
                    <a className="px-4 py-2 block">Load Products</a>
                  </Link>
                </NavbarDropdownMenuItem>
                <NavbarDropdownMenuItem onClick={authLogoutHandler}>
                  <span className="px-4 py-2 block">
                    Logout
                    <FontAwesomeIcon
                      icon={faRightFromBracket}
                      className=" text-orange-600"
                    />
                  </span>
                </NavbarDropdownMenuItem>
              </NavbarDropdownMenuList>
            </NavbarMainItemDropdown>
          )}
          <NavbarMainItem>
            <FontAwesomeIcon
              icon={faCartShopping}
              className=" text-orange-600"
            />
          </NavbarMainItem>
          <NavbarMainItem>
            Search
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="pl-2 text-orange-600"
            />
          </NavbarMainItem>
        </NavbarMainList>
      </div>
    </nav>
  );
};

export default Navbar;
