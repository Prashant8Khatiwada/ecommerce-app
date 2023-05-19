import "./App.css";
import { Header } from "./common/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pages from "./pages/Pages";
import Data from "./components/Data";
import SData from "./components/shops/Sdata";
import { useState } from "react";
import Cart from "./common/cart/Cart";
import Footer from "./common/footer/Footer";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import Productdescpage from "./components/Product_desc/Productpage";


function App() {
  const { productItems } = Data;
  const { shopItems } = SData;

  const [cartItem, setCardItems] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCardItems(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCardItems([...cartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseqty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCardItems(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };
  const increaseqty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCardItems(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <Router>
        <Header
          increaseqty={increaseqty}
          setCardItems={setCardItems}
          cartItem={cartItem}
          addToCart={addToCart}
          decreaseqty={decreaseqty}
        />
        <Switch>
          <Route path="/" exact>
            <Pages
              productItems={productItems}
              addToCart={addToCart}
              shopItems={shopItems}
              decreaseqty={decreaseqty}
            />
          </Route>
          <Route path="/cart" exact>
            <Cart cartItem={cartItem} addToCart={addToCart} />
          </Route>
          <Route path="/productdescription" exact>
            <Productdescpage />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
