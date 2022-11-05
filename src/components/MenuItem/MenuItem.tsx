import React from 'react';
import './MenuItem.css';

interface MenuItemProps {
  name: string,
  price: number,
  onDivClick: React.MouseEventHandler<HTMLDivElement>,
  img: string,
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  return (
    <div onClick={props.onDivClick} className="menu-item">
      <div>
        <img style={{width: "80px", height: "80px", marginRight: "20px"}} src={props.img} alt=""/>
      </div>
      <div>
      <h3>{props.name}</h3>
      <p>Price: {props.price} KGS</p>
      </div>
    </div>
  );
};

export default MenuItem;