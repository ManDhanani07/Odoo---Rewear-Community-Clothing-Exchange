import React, { useState } from 'react';

const AddItem = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    type: '',
    size: '',
    condition: '',
    tags: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Item submitted:', formData);
    alert('Item submitted (not yet connected to backend)');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Add New Item</h2>
      {Object.keys(formData).map((key) => (
        <input
          key={key}
          name={key}
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          value={formData[key]}
          onChange={handleChange}
          required
          style={styles.input}
        />
      ))}
      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '500px',
    margin: '2rem auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  input: {
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: '4px'
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#2980b9',
    color: '#fff',
    border: 'none',
    borderRadius: '4px'
  }
};

import { submitNewItem } from '../services/api';

const handleSubmit = async () => {
  try {
    const newItem = {
      title,
      description,
      category,
      size
    };

    await submitNewItem(newItem, selectedFile); // ✅ includes image file
    alert('Item submitted!');
  } catch (err) {
    console.error('Error:', err.message);
    alert('Failed to submit item.');
  }
};

export default AddItem;
