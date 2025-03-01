import React from 'react';

export default function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <p className='font-bold'>&copy; {currentYear} oriodev.</p>
    </div>
  );
};