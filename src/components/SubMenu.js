import React from 'react';

function SubMenu({ items }) {
  return (
    <ul className="submenu">
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.href}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
}

export default SubMenu;
