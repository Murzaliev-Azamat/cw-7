import React from 'react';

interface OrderTotalPriceProps {
  totalPrice: number,
}

const OrderTotalPrice: React.FC<OrderTotalPriceProps> = (props) => {
  return (
    <div style={{borderTop: "1px solid grey"}}>
      <p>Total price: {props.totalPrice} KGS</p>
    </div>
  );
};

export default OrderTotalPrice;