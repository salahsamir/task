import React from 'react';

const Nav = () => {
  return (
    <header>
      <div className="flex justify-between px-4 py-0.5 bg-blue-200 fixed left-0 right-0 z-50">
        <div className="flex space-x-2">
          <p className="text-xs sm:text-sm ">gaming</p>
          <p className="text-xs sm:text-sm ">graphic</p>
          <p className="text-xs sm:text-sm ">business</p>
        </div>
        <p className="text-xs sm:text-sm ">Best offers</p>
      </div>
    </header>
  );
}

export default Nav;
