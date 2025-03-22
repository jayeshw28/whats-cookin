import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center items-center space-x-2 p-4 border-b-2 border-gray-300">
      <img
        className="w-20 h-20 object-contain"
        src="../images/chef-logo.svg"
        alt="logo"
      />
      <p className="font-semibold text-2xl">Whats Cookin?</p>
    </div>
  );
};

export default Header;
