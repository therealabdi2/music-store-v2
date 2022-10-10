import SignUpForm from "../signUpForm/signUpForm.component";
import SignInForm from "../signInForm copy/signInForm.component";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
