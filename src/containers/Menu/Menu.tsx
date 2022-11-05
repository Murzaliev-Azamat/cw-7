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
  const [order, setOrder] = useState<OrderProps[]>([
    {name: "Banana", price: 10, count: 10}
  ]);

  // const [showOrder, setShowOrder] = useState(false)

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

  // const addElement = () => {
  //   setShowOrder(!showOrder)
  // }

  // let orderList: React.ReactNode = null;
  //
  // if (showOrder) {
  //   orderList = (<OrderItem name={'Hamburger'} count={70} price={100} del={() => {}}/>)
  // }

  return (
    <div className="menu-container">
      <div className="order-container">
        {/*{orderList}*/}
        {order.map(item => {
          return (
            <OrderItem key={item.name + 1} name={item.name} price={item.price} count={item.count} del={() => {}}/>
          )})}
        <OrderTotalPrice totalPrice={totalSum}></OrderTotalPrice>
        {/*<OrderItem name={'Hamburger'} count={70} price={100} del={() => {}}/>*/}
      </div>
      <div className="menu-items-container">
        {ELEMENTS.map(element => {
          return (
            <MenuItem key={element.name} name={element.name} price={element.price} onDivClick={() => addElement(element.name)} img={element.image}/>
          )})}

        {/*<MenuItem name={'Hamburger'} price={80} onDivClick={() => {}}/>*/}
        {/*<MenuItem name={'Cheeseburger'} price={80} onDivClick={() => {}}/>*/}
        {/*<MenuItem name={'Fries'} price={80} onDivClick={() => {}}/>*/}
        {/*<MenuItem name={'Coffee'} price={80} onDivClick={() => {}}/>*/}
        {/*<MenuItem name={'Tea'} price={80} onDivClick={() => {}}/>*/}
        {/*<MenuItem name={'Cola'} price={80} onDivClick={() => {}}/>*/}
      </div>
    </div>
  );
};

export default Menu;