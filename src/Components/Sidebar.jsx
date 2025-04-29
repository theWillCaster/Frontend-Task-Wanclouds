import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link to="/">Add Record</Link></li>
          <li><Link to="/records">View Records</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
