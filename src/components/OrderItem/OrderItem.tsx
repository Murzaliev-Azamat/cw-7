import React from 'react';
import ButtonDelete from "../Button/ButtonDelete";

interface MenuItemProps {
  name: string,
  count: number,
  price: number,
  del: React.MouseEventHandler<HTMLButtonElement>,
}

const OrderItem: React.FC<MenuItemProps> = (props) => {
  return (
    <div>
      {/*<div>*/}
      {/*  <p>Order is empty!</p>*/}
      {/*  <p>Please add some items!</p>*/}
      {/*</div>*/}
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <p>{props.name}</p><p>x{props.count}</p><p>{props.price} KGS</p> <ButtonDelete del={props.del}/>
      </div>

    </div>
  );
};

export default OrderItem;