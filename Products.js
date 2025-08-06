import React, { Component } from 'react';

export default class Products extends Component {
  constructor() {
    super();

    // Fetching the User EmailId from LocalStorage
    const userEmailId = localStorage.getItem("emailId");

    this.state = {
      emailId: userEmailId,
      products: [
        { prodId: 101, prodName: 'Nokia', price: 19999.99, description: 'No cost EMI Applicable for All Cards', imgurl: '/images/1.jpg' },
        { prodId: 102, prodName: 'Samsung', price: 29999.99, description: 'Exchange offer available', imgurl: '/images/2.jpg' },
        { prodId: 103, prodName: 'Motorola', price: 24999.99, description: 'Best performance guaranteed', imgurl: '/images/3.jpg' },
        { prodId: 104, prodName: 'Apple', price: 79999.99, description: 'Latest iOS version pre-installed', imgurl: '/images/4.jpg' },
        { prodId: 105, prodName: 'Sony', price: 45999.99, description: 'Top-rated camera features', imgurl: '/images/5.jpg' },
        { prodId: 106, prodName: 'Google', price: 69999.99, description: 'Pure Android experience', imgurl: '/images/6.jpg' }
      ]
    };
  }

  addToCart = (prod) => {
    console.log("Added to cart:", prod);
    // You can also use localStorage or state to maintain cart logic
  }

  render() {
    return (
      <div className="container mt-4">
        <h3 style={{ color: 'blue' }}>Welcome {this.state.emailId}!</h3>
        <h1 className="text-center mb-4">Products</h1>

        <div className="row">
          {this.state.products.map((prod) => (
            <div key={prod.prodId} className="col-md-4 mb-4 d-flex justify-content-center">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={prod.imgurl}
                  alt={prod.prodName}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{prod.prodName}</h5>
                  <p className="card-text">{prod.description}</p>
                  <p><b>Price: <s>₹45000.00</s> ₹{prod.price}</b></p>
                  <div className="text-end">
                    <button onClick={() => this.addToCart(prod)} className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
