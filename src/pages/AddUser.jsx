import React from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/Form';

export const AddUser = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen flex justify-center items-center">
        <Form />
      </div>
    </div>
  );
};
