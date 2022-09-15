import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export const NavbarMainList = (props) => {
  return (
    <ul className="hidden md:flex justify-around rounded-lg font-semibold uppercase bg-gray-200 px-2 py-2">
      {props.children}
    </ul>
  );
};

export const NavbarMainItem = (props) => {
  return (
    <li className="group relative px-4 py-2 hover:bg-gray-50 rounded-md transition-colors duration-200 mx-2 first:ml-0 last:mr-0">
      {props.children}{' '}
    </li>
  );
};
export const NavbarMainItemDropdown = (props) => {
  return (
    <li className="group relative px-4 py-2 hover:bg-gray-50 rounded-md transition-colors duration-200 mx-2 first:ml-0 last:mr-0 cursor-pointer">
      {props.children}{' '}
      <FontAwesomeIcon
        icon={faChevronUp}
        className="text-sm ml-2 text-orange-600 rotate-180 group-hover:rotate-0 transition-transform duration-200 "
      />
    </li>
  );
};

export const NavbarMainMenu = (props) => {
  return (
    <li className="group relative px-4 py-2 hover:bg-gray-50 rounded-md transition-colors duration-200 mx-2 first:ml-0 last:mr-0">
      {props.children}
    </li>
  );
};

export const NavbarDropdownMenuList = (props) => {
  return (
    <ul className="opacity-0 group-hover:opacity-100 absolute w-max bg-gray-200 top-12 left-0 transition-opacity duration-100 rounded-lg overflow-hidden">
      {props.children}
    </ul>
  );
};

export const NavbarDropdownMenuItem = (props) => {
  return (
    <li
      className="px-4 py-2 text-orange-600 font-semibold hover:bg-orange-100 transition-colors duration-100 min-w-[105px] text-center"
      onClick={props.onClick}
    >
      {props.children}
    </li>
  );
};
