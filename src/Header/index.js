import React from 'react';

import history from '../services/history';

export default function Header() {
  return (
    <div>
      <ul>
        <li onClick={() => history.push('/home')}>Home</li>
        <li onClick={() => history.push('/products')}>Products</li>
        <li onClick={() => history.push('/profile')}>Profile</li>
        <li onClick={() => history.push('/contact')}>Contact</li>
      </ul>
    </div>
  );
}
