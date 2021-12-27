import { connect } from "react-redux";
import { mockData } from "../../mockData";
import { addItem, removeItem, clearAll } from "../../redux/actionCreator";
import ContactForm from "../contact/ContactForm";

import "./cart.scss";

const Cart = ({ data, addItem, removeItem }) => {
  return (
    <>
      <div className="shop">
        {mockData.map((item) => {
          for (let key in data) {
            if (item.id == key && data[item.id] > 0) {
              return (
                <div className="shop__item" key={item.id}>
                  <div className="shop__item__img">
                    <img src={item.img}></img>
                  </div>
                  <div className="shop__item__name">{item.name}</div>
                  <div className="shop__item__price">{item.price}</div>
                  <div className="shop__item__actions">
                    <button
                      onClick={() => {
                        removeItem(item.id);
                        localStorage.setItem("cart", JSON.stringify(data));
                      }}
                    >
                      -
                    </button>
                    <div>{data[key]}</div>
                    <button
                      onClick={() => {
                        addItem(item.id);
                        localStorage.setItem("cart", JSON.stringify(data));
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            }
          }
        })}
      </div>
      <ContactForm />
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state.cart.data,
});
const mapDispatchToProps = (dispatch) => ({
  addItem: (id) => dispatch(addItem(id)),
  removeItem: (id) => dispatch(removeItem(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
