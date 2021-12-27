import { connect } from "react-redux";
import { Form, Field } from "react-final-form";

const ContactForm = ({ data }) => {
  const onSubmit = async (values) => {
    const request = Object.assign(data, values);
    window.alert(JSON.stringify(request, 0, 2));
  };
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ name: "", surname: "", phone: "", address: "" }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <div>
            <label>Name</label>
            <Field
              name="name"
              component="input"
              placeholder="name"
              dirty={true}
            />
          </div>
          <div>
            <label>Surname</label>
            <Field name="surname" component="input" placeholder="surname" />
          </div>
          <div>
            <label>Phone</label>
            <Field name="phone" component="input" placeholder="phone" />
          </div>
          <div>
            <label>Address</label>
            <Field name="address" component="input" placeholder="address" />
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    />
  );
};
const mapStateToProps = (state) => ({
  data: state.cart.data,
});
export default connect(mapStateToProps, null)(ContactForm);
