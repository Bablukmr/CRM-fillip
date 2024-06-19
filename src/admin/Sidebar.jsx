// src/admin/Sidebar.js
import React, { useState } from 'react';
import {  FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { FaUsersBetweenLines } from 'react-icons/fa6';

function Sidebar() {
  const [activeLink, setActiveLink] = useState(null);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleSetActiveLink = (index) => {
    setActiveLink(index);
  };

  const handleLogout = () => {
    logout(); 
    navigate('/login');
  };

  const links = [
    { to: 'web-leads', text: 'Web Leads' },
    { to: 'leads', text: 'Leads 1' },
    { to: 'leads', text: 'Leads 2' },
    { to: 'leads', text: 'Leads 3' },
    { to: 'leads', text: 'Leads 4' },
    { to: 'leads', text: 'Leads 5' },
  ];

  return (
    <div className="p-4 flex flex-col gap-5 pt-5 min-h-[calc(100vh-60px)] bg-gray-800">
      {links.map((link, index) => (
        <Link
          key={index}
          className={`flex items-center px-4 py-2 rounded-sm gap-2 text-white hover:text-gray-300 transform hover:scale-105 transition duration-300 ${
            activeLink === index ? 'bg-[#105076] text-gray-200' : ''
          }`}
          to={link.to}
          onClick={() => handleSetActiveLink(index)}
        >
          <FaUsersBetweenLines className="hover:animate-bounce" />
          <p>{link.text}</p>
        </Link>
      ))}
      <div className="mt-auto">
        <button
          className="flex items-center gap-2 text-white hover:text-gray-300 transform hover:scale-105 transition duration-300"
          onClick={handleLogout}
        >
          <FaSignOutAlt className="hover:animate-bounce" />
          <p>Log Out</p>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
