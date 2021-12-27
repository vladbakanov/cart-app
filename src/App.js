import { useEffect } from "react";
import { connect } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Cart from "./components/cart/Cart";
import "./App.css";
import { loadCart } from "./redux/actionCreator";

function App({ loadCart }) {
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      loadCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);
  return (
    <>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  data: state.cart.data,
});
const mapDispatchToProps = (dispatch) => ({
  loadCart: (payload) => dispatch(loadCart(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
