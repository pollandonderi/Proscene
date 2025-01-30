import React from 'react';

function MenuItem({ href, children, onClick }) {
  return (
    <li>
      <a href={href} onClick={onClick}>
        {children}
      </a>
    </li>
  );
}

export default MenuItem;