import SignUpForm from "../signUpForm/signUpForm.component";
import SignInForm from "../signInForm copy/signInForm.component";

import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
