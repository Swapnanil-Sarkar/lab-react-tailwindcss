/* eslint-disable no-unused-vars */
import React from 'react';

const Page = () => {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md flex items-center space-x-4">
      <img className="h-10 w-25" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt=""/>
      <div>
        <div className="text-xl font-medium text-gray-900">Kalvium Store</div>
        <p className="text-gray-600">You have a new Course!</p>
      </div>
    </div>
  );
};

export default Page;
