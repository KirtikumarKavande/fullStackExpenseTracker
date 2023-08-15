import React from "react";
import {  NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-screen h-14 border border-gray-500 shadow-md space-x-8 flex items-center pl-2 ">
      <div>
        <NavLink to="/" className="cursor-pointer  p-1  font-bold" style={({isActive})=>({color:isActive?"red":""})}>Add Expense</NavLink>
      </div>
      <div>
        <NavLink to="/expense" className="cursor-pointer  p-1  font-bold"style={({isActive})=>({color:isActive?"red":""})}>All Expense</NavLink>
      </div>
    </div>
  );
};

export default Header;
