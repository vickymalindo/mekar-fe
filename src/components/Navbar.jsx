import React from 'react';
import MekarLogo from '../assets/mekar_logo_black.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="flex items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white border-b-2">
        <div>
          <Link to="/">
            <img src={MekarLogo} alt="logo_mekar" className="w-32 h-12" />
          </Link>
        </div>

        <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
          <li>
            <Link
              to="/form"
              className="md:p-4 py-2 block hover:text-purple-400"
            >
              Main
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
