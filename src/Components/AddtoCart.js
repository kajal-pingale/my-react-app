import React from "react";
import "./AddtoCart.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

function AddtoCart(
  props,
  { visibilty, products, onProductRemove, onClose, onQuantityChange }
) {
  return (
    <div
      className="modal"
      style={{
        display: visibilty ? "block" : "none",
      }}
    >
      <div className="shoppingCart">
        <div className="header">
          <h2>PizzaOrder cart</h2>
          <button className="btn close-btn" onClick={onClose}>
            <AiFillCloseCircle size={30} />
          </button>
        </div>
        <div className="cart-products">
          {props.productt.length === 0 && (
            <span className="empty-text">Your basket is currently empty</span>
          )}
          {props.productt.map((product) => (
            <div className="cart-product" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.title}</h3>
                <span className="product-price">
                  {product.price * product.count}$
                </span>
              </div>
              <select
                className="count"
                value={product.count}
                onChange={(event) => {
                  onQuantityChange(product.id, event.target.value);
                }}
              >
                {[...Array(10).keys()].map((number) => {
                  const num = number + 1;
                  return (
                    <option value={num} key={num}>
                      {num}
                    </option>
                  );
                })}
              </select>
              <button
                className="btn remove-btn"
                onClick={() => onProductRemove(product)}
              >
                <RiDeleteBin6Line size={20} />
              </button>
            </div>
          ))}
          {props.productt.length > 0 && (
            <button className="btn checkout-btn">Proceed to checkout</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddtoCart;
