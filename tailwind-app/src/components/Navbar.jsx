/* eslint-disable no-unused-vars */
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-red-600 text-white">
      <div className="mr-4">
        <span className="text-xl font-bold">Kalvium</span>
      </div>
      <div className="flex items-center">
        <a href=" " className="mr-4 font-semibold">About us</a>
        <a href=" " className="mr-4 font-semibold">Contacts</a>
        <a href=" " className="mr-4 font-semibold">Courses</a>
        <button className="bg-red text-white-600 font-semibold py-2 px-4 rounded border px-5">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
