// import logo from './logo.svg';
import React, {
	useState,
	useEffect,
} from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from "./Components/About";
import Home from "./Components/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Errorpage from "./Components/Errorpage";
import Navbar from "./Components/Navbar";
import Menu from "./Components/Menu";
import image1 from "./Images/pizza.jpg";
import image2 from "./Images/pizza4.jpg";
import image3 from "./Images/pizza5.jpg";
import image4 from "./Images/pizza6.jpg";
import RatingStars from "./Components/RatingStars";
import AddtoCart from "./Components/AddtoCart";


function App() {

  // const [cartsVisibilty, setCartVisible] =
	// 	useState(false);
	// const [productsInCart, setProducts] =
	// 	useState(
	// 		JSON.parse(
	// 			localStorage.getItem(
	// 				"shopping-cart"
	// 			)
	// 		) || []
	// 	);
	// useEffect(() => {
	// 	localStorage.setItem(
	// 		"shopping-cart",
	// 		JSON.stringify(productsInCart)
	// 	);
	// }, [productsInCart]);
	// const addProductToCart = (product) => {
	// 	const newProduct = {
	// 		...product,
	// 		count: 1,
	// 	};
	// 	setProducts([
	// 		...productsInCart,
	// 		newProduct,
	// 	]);
	// };

	// const onQuantityChange = (
	// 	productId,
	// 	count
	// ) => {
	// 	setProducts((oldState) => {
	// 		const productsIndex =
	// 			oldState.findIndex(
	// 				(item) =>
	// 					item.id === productId
	// 			);
	// 		if (productsIndex !== -1) {
	// 			oldState[productsIndex].count =
	// 				count;
	// 		}
	// 		return [...oldState];
	// 	});
	// };

	// const onProductRemove = (product) => {
	// 	setProducts((oldState) => {
	// 		const productsIndex =
	// 			oldState.findIndex(
	// 				(item) =>
	// 					item.id === product.id
	// 			);
	// 		if (productsIndex !== -1) {
	// 			oldState.splice(productsIndex, 1);
	// 		}
	// 		return [...oldState];
	// 	});
	// };
  const [cartsVisibilty, setCartVisible] = useState(false);
  const [productsInCart, setProducts] = useState([]);
  const Products = [
    {
      id: 1,
      image: require("./Images/pizza.jpg"),
      title: "Original",
      description: "Tomato sauce,mozzarella & oregano",
      price: 160,
      rating: 4.3,
      button: "ADD TO CART",
    },
    {
      id: 2,
      image: require("./Images/pizza4.jpg"),
      title: "Salami",
      description: "Tomato sauce,mozzarella & oregano",
      price: 170,
      rating: 3.5,
      button: "ADD TO CART",
    },
    {
      id: 3,
      image: require("./Images/pizza5.jpg"),
      title: "Cheesy",
      description: "Tomato sauce,mozzarella & oregano",
      price: 185,
      rating: 3.1,
      button: "ADD TO CART",
    },
    {
      id: 4,
      image: require("./Images/pizza6.jpg"),
      title: "Chiken",
      description: "Tomato sauce,mozzarella & oregano",
      price: 190,
      rating: 4.0,
      button: "ADD TO CART",
    },
    {
      id: 5,
      image: require("./Images/pizza6.jpg"),
      title: "Chiken",
      description: "Tomato sauce,mozzarella & oregano",
      price: 150,
      rating: 4.1,
      button: "ADD TO CART",
    },
    {
      id: 6,
      image: require("./Images/pizza6.jpg"),
      title: "Chiken",
      description: "Tomato sauce,mozzarella & oregano",
      price: 180,
      rating: 4.2,
      button: "ADD TO CART",
    },
  ];

  return (
    <div className="App">


      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <AddtoCart
				visibilty={cartsVisibilty}
				products={productsInCart}
				onClose={() =>
					setCartVisible(false)
				}
				onQuantityChange={
					onQuantityChange
				}
				onProductRemove={onProductRemove}
			/> */}
      <AddtoCart
        visibilty={cartsVisibilty}
        products={productsInCart}
        productt={Products}
      />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Menu product={Products}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </div>
  );
}

export default App;
