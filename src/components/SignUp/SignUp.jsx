import React from "react";
import HeroImage from "../HeroImage/HeroImage";
import InputBox from "../InputBox/InputBox";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="grid grid-cols-2">
      <HeroImage />
      <section>
        <div>
          <div>
            <h1>Sign Up</h1>
            <p className="description pb-10 pt-6">
              Step into a world of hassle-free expense management! Your journey{" "}
              <br />
              towards financial mastery begins here.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 pb-20">
          <InputBox type="name" placeholder="Name" />
          <InputBox type="email" placeholder="Email" />
          <InputBox type="password" placeholder="Password" />
        </div>

        <div className="flex flex-col gap-5 items-start">
          <PrimaryButton title="Sign Up" />
          <p className="text-neutral-400">
            Already have account?{" "}
            <span className="text-neutral-200 underline underline-offset-4">
              <Link to="/signin">Sign In</Link>
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
