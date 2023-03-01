import * as yup from "yup";

const Basicschema = yup.object().shape({
  email: yup.string().email("invalid email").required("enter valid email"),
  name: yup.string().required("Enter your name"),
  number: yup.string().min(6).max(10).required("Enter your number"),
  message: yup.string().min(50).required("Give some message"),
});

export default Basicschema;
