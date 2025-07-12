import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/">
        <img src={logo} alt="ReWear Logo" style={styles.logo} />
      </Link>
      <ul style={styles.navLinks}>
        <li><Link to="/browse">Browse</Link></li>
        <li><Link to="/add">List Item</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    color: '#fff'
  },
  logo: {
    height: '40px'
  },
  navLinks: {
    display: 'flex',
    gap: '1rem',
    listStyle: 'none'
  }
};

export default Navbar;
