// src/services/api.js
import { supabase } from './supabase';

export const fetchItems = async () => {
  const { data, error } = await supabase
    .from('items')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching items:', error.message);
    throw error;
  }

  return data;
};


export const submitNewItem = async (itemData, imageFile) => {
  // 1. Upload image to Supabase Storage
  const fileExt = imageFile.name.split('.').pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const { data: storageData, error: uploadError } = await supabase.storage
    .from('images')
    .upload(fileName, imageFile);

  if (uploadError) {
    console.error('Image upload error:', uploadError.message);
    throw uploadError;
  }

  // 2. Get public URL of uploaded image
  const { data: publicURLData } = supabase
    .storage
    .from('images')
    .getPublicUrl(storageData.path);

  const imageUrl = publicURLData.publicUrl;

  // 3. Insert item metadata into 'items' table
  const { data, error } = await supabase
    .from('items')
    .insert([{ ...itemData, image_url: imageUrl }]);

  if (error) {
    console.error('Error inserting item:', error.message);
    throw error;
  }

  return data;
};


export const loginUser = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error('Login error:', error.message);
    throw error;
  }

  return data;
};

export const signupUser = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error('Signup error:', error.message);
    throw error;
  }

  return data;
};

export const logoutUser = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error('Logout error:', error.message);
    throw error;
  }
};

