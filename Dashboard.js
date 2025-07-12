import React from 'react';

const Dashboard = () => {
  const user = {
    name: 'Tech Maven',
    points: 120,
    uploadedItems: 3,
    ongoingSwaps: 1,
    completedSwaps: 2
  };

  return (
    <div style={styles.container}>
      <h2>User Dashboard</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Points:</strong> {user.points}</p>
      <p><strong>Uploaded Items:</strong> {user.uploadedItems}</p>
      <p><strong>Ongoing Swaps:</strong> {user.ongoingSwaps}</p>
      <p><strong>Completed Swaps:</strong> {user.completedSwaps}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: '0 auto'
  }
};

export default Dashboard;
