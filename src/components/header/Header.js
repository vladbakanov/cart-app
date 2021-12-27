import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { mockData } from "../../mockData";

import "./header.scss";

const Header = ({ data }) => {
  let total = 0;
  mockData.map((item) => {
    for (let key in data) {
      if (item.id == key) {
        total = total + item.price * data[key];
      }
    }
  });
  return (
    <header>
      <div className="nav__item">
        <Link to="/main">Main Page</Link>
      </div>
      <div className="nav__cart">
        <div className="nav__item">
          <Link to="/cart">Cart</Link>
        </div>
        <div className="nav__price">{total ? total : ""}</div>
      </div>
    </header>
  );
};
const mapStateToProps = (state) => ({
  data: state.cart.data,
});
export default connect(mapStateToProps, null)(Header);
