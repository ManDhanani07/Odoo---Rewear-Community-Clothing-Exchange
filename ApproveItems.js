import React, { useState } from 'react';

const mockItems = [
  { id: 1, title: 'Blue Jacket', status: 'pending' },
  { id: 2, title: 'Red Dress', status: 'pending' }
];

const ApproveItems = () => {
  const [items, setItems] = useState(mockItems);

  const handleApprove = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, status: 'approved' } : item));
  };

  const handleReject = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2>Approve or Reject Items</h2>
      {items.length === 0 ? (
        <p>No items pending approval.</p>
      ) : (
        items.map(item => (
          <div key={item.id} style={styles.card}>
            <p><strong>{item.title}</strong> - Status: {item.status}</p>
            <button onClick={() => handleApprove(item.id)} style={styles.approve}>Approve</button>
            <button onClick={() => handleReject(item.id)} style={styles.reject}>Reject</button>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: '0 auto'
  },
  card: {
    border: '1px solid #ccc',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '5px'
  },
  approve: {
    marginRight: '1rem',
    backgroundColor: '#27ae60',
    color: '#fff',
    padding: '0.5rem',
    border: 'none',
    borderRadius: '4px'
  },
  reject: {
    backgroundColor: '#c0392b',
    color: '#fff',
    padding: '0.5rem',
    border: 'none',
    borderRadius: '4px'
  }
};

export default ApproveItems;
