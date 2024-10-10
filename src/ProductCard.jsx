import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import './ProductCard.css'



function ProductCard() {
    const data=[{
        Image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        ProductName:"Fancy Product",
        Rating:" `  ",
        Orignal:"",
        Price:"$40.00-$80.00",
        button:"View option",
      },
      {
        Image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
           ProductName:"Special Item",
        Rating:"⭐⭐⭐⭐⭐",
        Orignal:"$20.00",
        Price:"$18.00",
        button:"Add to cart",
      },
      {
        Image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
         ProductName:"Sale Item",
        Rating:" `   ",
        Orignal:"$50.00",
        Price:"$25.00",
        button:"Add to cart",
      },
      {
        Image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        ProductName:"Popular Item",
        Rating:"⭐⭐⭐⭐⭐",
        Orignal:"",
        Price:"$40.00",
        button:"Add to cart",
      },
      {
        Image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        ProductName:"Sale Item",
        Rating:"  `   ",
        Orignal:"$50.00",
        Price:"$25.00",
        button:"Add to cart",
      },
      {
        Image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        ProductName:"Fancy Product",
        Rating:"           `",
        Price:"$120.00-$280.00",
        button:"View option",
      },
      {
        Image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        ProductName:"Special Item",
        Rating:"⭐⭐⭐⭐⭐",
        Orignal:"$20.00",
        Price:"$18.00",
        button:"Add to cart",
      },
      {
        Image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        ProductName:"Popular Item",
        Rating:"⭐⭐⭐⭐⭐",
        Orignal:"",
        Price:"$40.00",
        button:"Add to cart",
      },];
      const [count, setCount] = useState(0);
      const [prodata, setProdata]=useState(data);
  return (
    <>
        <div class="fill">
        <Navbar count={count}/>
        </div>
        <div>
        <Header/>
        </div>
        <div className=" py-5 container px-4 px-lg-5 mt-4 row gx-4 gx-lg-5 row-cols-2 row-cols-md-1 row-cols-xl-4 justify-content-center">
            {prodata?.map((item, index)=>(
                <Prodect
                key={index}
                Image={item.Image}
                ProductName={item.ProductName}
                Rating={item.Rating}
                Orignal={item.Orignal}
                Price={item.Price}
                setCount={setCount}        />
            ))}        </div>  <Footer/> </>  )}

export default ProductCard

function Prodect({setCount, Image, ProductName, Rating, Orignal, Price}){
    const[state, setState]=useState(true);
    return(
        <>   
        <div style={{}}>   
        <Card style={{ width: '14rem', padding:"0 0 0 0" }}>
      <Card.Img   src={Image}  />
      <Card.Body className="card-body p-3">
        <Card.Title className="text-center fw-bolder">{ProductName}</Card.Title>
        <Card.Text className="text-center fw-bolder">{Rating}</Card.Text>
        <Card.Text className="text-center">{Orignal}-<span>{Price}</span></Card.Text>
        {/* <Card.Text className="text-center">{Price}</Card.Text> */}
        { state ===true ?
          <Button className="btn-outline-dark mt-auto "  variant="light"   onClick={()=>{            
            setCount((value)=>value+1);
            setState(false);            
          }}>Add</Button> :
          <Button className="btn-outline-dark mt-auto "  variant="light" onClick={()=>{            
            setCount((value)=>value-1);
            setState(true);            
          }}>Remove</Button>
        }
      </Card.Body>
    </Card>
    </div> 
   
        </>
    )

}