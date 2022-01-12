import React from 'react';

import './menu-item.styles.scss';


type Props = {
  title: String;
  imageUrl: String;
  key: String | Number;
};

const MenuItem: React.FC<Props> = ({ title }) => {
  return (
    <div className="menu-item">
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
