import { connect } from "react-redux";
import { addItem } from "../../redux/actionCreator";
import "./main.scss";
import { mockData } from "../../mockData";

const Main = ({ addItem, data }) => {
  return (
    <div className="card">
      <div className="card__wrapper">
        {mockData.map((item) => {
          return (
            <div className="card__item" key={item.id}>
              <div className="card__item__img">
                <img src={item.img}></img>
              </div>
              <div className="card__item__title">{item.name}</div>
              <div className="card__item__descr">{item.descr}</div>
              <div className="card__item__actions">
                <div className="card__item__price">{item.price}</div>
                <button
                  onClick={() => {
                    let temp = addItem(item.id);
                    localStorage.setItem("cart", JSON.stringify(data));
                  }}
                >
                  Buy
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  data: state.cart.data,
  count: state.cart.count,
});
const mapDispatchToProps = (dispatch) => ({
  addItem: (id) => dispatch(addItem(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
