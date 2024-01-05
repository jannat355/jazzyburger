import React, { useEffect, useState } from "react";
import heroImg from "../assets/image 3.jpg";
import "../styles/Hero.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import face from "../assets/Frame 3.svg";
import ingre from "../assets/Group 4.svg";
// import useFetch from '../customhooks/useFetch'

const Hero = () => {
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(false);
  let fetchedData = async () => {
    try {
      setIsLoading(true);
      let fetchRequest = await fetch("http://localhost:5757/api/products");
      let fetchResponse = await fetchRequest.json();
      setData(fetchResponse.products);
      console.log(fetchResponse.products);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchedData();
  }, []);

  let quantity = 0;

  function updateQuantity() {
    // document.getElementById("quantity").innerText = quantity;
    document.querySelectorAll('.quantity').forEach((qty)=>{
      qty.innerText = quantity
    })
  }

  function decrement() {
    if (quantity > 0) {
      quantity--;
      updateQuantity();
    }
  }

  function increment() {
    quantity++;
    updateQuantity();
  }

  return (
    <>
      <main className="container ">
        <img src={heroImg} alt="" className="img-fluid w-100 hero-img" />

        <div className="d-flex justify-content-between gap-5 ">
          <img src={face} alt="" className="d-none d-lg-block w-75 mt-5 " />

          {loading && <h1>loading......</h1>}
          {/* {error && <h1>Error...... something went wrong</h1>} */}

          <div className="date mt-5">
            {data.map((datum) => {
              const { title, image, price, _id } = datum;

              return (
                <div key={_id} className="date mt-5 gap-2">
                  <Card style={{ width: "17rem" }}>
                    <Card.Img
                      variant="top"
                      src={image}
                      className=" img-fluid "
                    />

                    <Card.Body>
                      <Card.Title>{title}</Card.Title>

                      <div className="d-flex justify-content-between mt-2">
                        <div>
                          <p>Total Price</p>
                          <p>N{price} </p>
                        </div>

                        <div class="quantity-container ">
                          <div class="quantity-btn" onClick={decrement}>
                            -
                          </div>
                          <div class="quantity-btn quantity" id="quantity">
                            1
                          </div>
                          <div class="quantity-btn" onClick={increment}>
                            +
                          </div>
                        </div>
                      </div>

                      <img src={ingre} alt="" />

                      <Button className="btn-danger w-100 mt-3">
                        + Add To Cart
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
