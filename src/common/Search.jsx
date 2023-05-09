import { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Loginpopup from "./Loginpopup/Loginpopup";
import CartPopUp from "./cart/CartPopUp";

const Search = ({
  cartItem,
  decreaseqty,
  addToCart,
  setCardItems,
  increaseqty,
}) => {
  const [productData, setProductData] = useState([
    {
      id: 1,
      name: "Shoes",
    },
    {
      id: 2,
      name: "Watch",
    },
    {
      id: 3,
      name: "tshirt",
    },
    {
      id: 4,
      name: "wallet",
    },
    {
      id: 5,
      name: "Mobile",
    },
    {
      id: 6,
      name: "Speaker",
    },
    {
      id: 1,
      name: "Shoes",
    },
    {
      id: 2,
      name: "Watch",
    },
    {
      id: 3,
      name: "tshirt",
    },
    {
      id: 4,
      name: "wallet",
    },
    {
      id: 5,
      name: "Mobile",
    },
    {
      id: 6,
      name: "Speaker",
    },
  ]);

  const [searchData, setSearchData] = useState("");
  // ========== To handle login Popup ==========
  const [loginOpenModel, setLoginOpenModel] = useState(false);

  const LoginPopupopen = () => {
    setLoginOpenModel(true);
  };

  const LoginPopupclose = () => {
    setLoginOpenModel(false);
  };

  // ========== To handle cart Popup ==========
  const [cartOpenModel, setCartOpenModel] = useState(false);

  const CartPopupopen = () => {
    setCartOpenModel(true);
  };

  const CartPopupclose = () => {
    setCartOpenModel(false);
  };

  const handleChange = (e) => {
    const value = e.target.value.toLocaleLowerCase();
    setSearchData(value);
    filteredData();
  };

  // to filter product name
  const filteredData = productData.filter((products) => {
    return products.name.toLocaleLowerCase().includes(searchData);
  });

  // ===== To clear search value =====
  const handleClear = () => {
    setSearchData("");
    document.getElementById("search").value = "";
  };

  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 55);
  });

  return (
    <>
      {/* ========== For Login Popup ========== */}
      {loginOpenModel && <Loginpopup loginpopupclose={LoginPopupclose} />}
      {/* ========== For Cart Popup ========== */}
      {cartOpenModel && (
        <CartPopUp
          cartpopupclose={CartPopupclose}
          addToCart={addToCart}
          decreaseqty={decreaseqty}
          cartItem={cartItem}
          setCardItems={setCardItems}
          increaseqty={increaseqty}
        />
      )}

      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <img src={logo} alt="" />
          </div>

          <div className="search-bar">
            <button type="submit" className="search-icon">
              <FiSearch />
            </button>
            <input
              id="search"
              name="search"
              type="text"
              placeholder="Search..."
              onChange={handleChange}
            />
            {searchData !== "" && <span onClick={handleClear}>Clear All</span>}
            <div
              className={
                searchData !== "" && filteredData.length > 0
                  ? "dropdown-active"
                  : "dropdown"
              }
            >
              {searchData !== "" &&
                filteredData.map((item) => (
                  <div key={item.id}>
                    <p>{item.name}</p>
                  </div>
                ))}
            </div>
          </div>

          <div className="icon f_flex width">
            <i className="fa fa-user icon-circle" onClick={LoginPopupopen}></i>
            <i
              className="fa fa-shopping-bag icon-circle"
              onClick={CartPopupopen}
            ></i>
            <div className="cart">
              {/* step : 3  
                    yaha chai hamile kati ota cart ma rakhhyo number dekhauxa mathi icon ma
                    */}

              <span>{cartItem.length === 0 ? 0 : cartItem.length}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
