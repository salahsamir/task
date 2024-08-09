import React from 'react';

const Nav = () => {
  return (
    <header>
      <div className="flex justify-between px-10 py-1 bg-blue-200 fixed left-0 right-0 z-50">
        <div className="flex space-x-2">
          <p className="text-xs sm:text-sm md:text-base ">gaming</p>
          <p className="text-xs sm:text-sm md:text-base ">graphic</p>
          <p className="text-xs sm:text-sm md:text-base ">business</p>
        </div>
        <p className="text-xs sm:text-sm md:text-base ">Best offers</p>
      </div>
    </header>
  );
}

export default Nav;
