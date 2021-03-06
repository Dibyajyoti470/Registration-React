import { React } from "react";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";

const Signup = () => {
  return (
    <main className="signup-container">
      <h1 className="heading-1 text-center">Create an account</h1>
      <span className="text-gray">Fill in the following details</span>
      <form className="form signup-form" action="#">
        <Input
          classname="input-field"
          label="Name"
          name="name"
          type="text"
          isRequired={true}
        />
        <Input
          classname="input-field"
          label="Organization"
          name="org"
          type="text"
          isRequired={true}
        />
        <Input
          classname="input-field"
          label="Email"
          name="email"
          type="email"
          isRequired={true}
        />
        <PasswordInput classname="input-field" label="Password" name="pass" />
        <span className="text-gray paragraph">
          By creating this account, I am agreeing to the{" "}
          <a className="link bold" href="www.google.com">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a className="link bold" href="www.google.com">
            Terms of Use
          </a>
          .
        </span>
        <button className="btn primary-btn" type="submit">
          Create account
        </button>
      </form>
      <span className="text-gray">
        Already have an account?{" "}
        <a className="link bold" href="www.google.com">
          Login
        </a>{" "}
        instead
      </span>
    </main>
  );
};

export default Signup;
