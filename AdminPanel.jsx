import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  return (
    <div style={styles.container}>
      <h2>Admin Panel</h2>
      <ul style={styles.menu}>
        <li><Link to="/admin/approve" style={styles.link}>Approve Items</Link></li>
        <li><Link to="/" style={styles.link}>Back to Home</Link></li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: '0 auto'
  },
  menu: {
    listStyle: 'none',
    padding: 0
  },
  link: {
    display: 'block',
    padding: '0.75rem',
    marginBottom: '1rem',
    backgroundColor: '#8e44ad',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px'
  }
};

export default AdminPanel;
