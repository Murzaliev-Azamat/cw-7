import React, {useState} from 'react';
import MenuItem from "../../components/MenuItem/MenuItem";
import './Menu.css';
import OrderItem from "../../components/OrderItem/OrderItem";
import mealImage from '../../assets/meal.png';
import drinksImage from '../../assets/37722.png';
import OrderTotalPrice from "../../components/OrderTotalPrice/OrderTotalPrice";

const ELEMENTS = [
  {name: "Hamburger", price: 80, image: mealImage},
  {name: "Cheeseburger", price: 90, image: mealImage},
  {name: "Fries", price: 45, image: mealImage},
  {name: "Coffee", price: 70, image: drinksImage},
  {name: "Tea", price: 50, image: drinksImage},
  {name: "Cola", price: 40, image: drinksImage},
]

interface OrderProps {
  name: string,
  count: number,
  price: number,
}

let totalSum = 0;

const Menu = () => {
  const [order, setOrder] = useState<OrderProps[]>([]);

  let orderList: React.ReactNode = null;

  if (order.length === 0) {
    orderList = (
      <div>
        <p>Order is empty!</p>
        <p>Please add some items!</p>
      </div>
    )
  } else {
    orderList = (
      order.map(item => {
        return (
          <OrderItem key={item.name + 1}
                     name={item.name}
                     price={item.price}
                     count={item.count}
                     del={() => deleteElement(item.name)}/>
        )
      })
    )
  }

  const addElement = (name: string) => {
    const orderCopy = [...order]
    const elementInfo = ELEMENTS.find(item => item.name === name)!
    const newComponent: OrderProps = {name: elementInfo.name, price: elementInfo.price, count: 1};
    for (const component of order) {
      if (component.name === newComponent.name) {
        component.count++;
        component.price += newComponent.price;
        totalSum += newComponent.price;
        setOrder(orderCopy)
        return;
      }
    }
    totalSum += newComponent.price;
    orderCopy.push(newComponent)
    setOrder(orderCopy)
  }

  const deleteElement = (name: string) => {
    const orderCopy = [...order]
    const elementForDeletionIndex = orderCopy.findIndex(item => item.name === name)!
    const elementInfo = orderCopy.find(item => item.name === name)!
    orderCopy.splice(elementForDeletionIndex, 1)
    for (const component of order) {
      if (component.name === elementInfo.name) {
        totalSum -= component.price;
        setOrder(orderCopy)
      }
    }
    setOrder(orderCopy)
  }

  return (
    <div className="menu-container">
      <div className="order-container">
        {orderList}
        {(order.length > 0) ? <OrderTotalPrice totalPrice={totalSum}/> : null}
      </div>
      <div className="menu-items-container">
        {ELEMENTS.map(element => {
          return (
            <MenuItem key={element.name} name={element.name} price={element.price}
                      onDivClick={() => addElement(element.name)} img={element.image}/>
          )
        })}
      </div>
    </div>
  );
};

export default Menu;