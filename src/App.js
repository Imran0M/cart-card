import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
function App() {
  const data = [
    {
      productImage: "https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg",
      productName: "Fancy product",
      productPrice: 20000,
      productRate: "91❤"
    },
    {
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxgwEZ8jqAtrRUc5n1Kx2XJCrUTwoG0CiLXpRAuG5LUGAudWHlKawTgpyLMZxNaSexpb4&usqp=CAU",
      productName: "special Item",
      productPrice: 50000,
      productRate: "78❤"
    },
    {
      productImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
      productName: "Sale Item",
      productPrice: 10000,
      productRate: "55❤"
    },
    {
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-t5yMNVUrh8pstsgIX4uPk9T2QQiXHd6ij52FWEREtPxmLTlpgnuNYA1jE4XFlGK8U2k&usqp=CAU",
      productName: "Customer Item",
      productPrice: 10000,
      productRate: "22❤"
    },
  ]


  const [count, setCount] = useState(0);


  return (
    <div>
      <div className="bt">
        <Button >CART {count}</Button>
      </div>
      <div className="main-container">
        {data.map((value, index) => (<Cards
          value={value}
          index={index}
          setCount={setCount}
          count={count}
        />))}
      </div>
    </div>
  );
}
export default App

function Cards({ value, index, setCount, count }) {
  const [show, setShow] = useState(false);
  function addCart() {
    setShow(!show)
    setCount(count + 1)
  }
  function removeCart() {
    setShow(!show)
    setCount(count - 1)
  }


  return (
    <div>
      <Card key={index} style={{ width: '18rem' }}>
        <Card.Img className="hi" variant="top" src={value.productImage} />
        <Card.Body>
          <Card.Title>{value.productName}</Card.Title>
          <Card.Text>
            {value.productPrice}
          </Card.Text>
          <Card.Text>
            {value.productRate}
          </Card.Text>
          {!show ? <Button onClick={addCart} variant="primary">Add Cart</Button> : ""}
          {show ? <Button onClick={removeCart} variant="danger">Remove Cart</Button> : ""}
        </Card.Body>
      </Card>
    </div>

  )
}