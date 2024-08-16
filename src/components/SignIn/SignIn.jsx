import React from "react";
import HeroImage from "../HeroImage/HeroImage";
import InputBox from "../InputBox/InputBox";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { logIn } from "../../redux/authOperations";

const SignIn = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const email = formData.get("email");
    const password = formData.get("password");

    console.log(email, password);

    dispatch(logIn({ email, password }));

    form.reset();
  };

  return (
    <div className="grid grid-cols-2 mt-12 gap-10">
      <HeroImage />
      <section>
        <div>
          <div>
            <h1>Sign In</h1>
            <p className="description pb-10 pt-6">
              Step into a world of hassle-free expense management! Your journey{" "}
              <br />
              towards financial mastery begins here.
            </p>
          </div>
        </div>

        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6 pb-18 w-[399px]">
            <InputBox
              type="email"
              placeholder="Email"
              backgroundColor="bg-black"
              name="email"
              title=""
              textColor="text-white"
            />
            <InputBox
              type="password"
              placeholder="Password"
              backgroundColor="bg-black"
              name="password"
              title=""
              textColor="text-white"
            />
          </div>

          <div className="flex flex-col gap-5 items-start pt-[139px]">
            <PrimaryButton title="Sign In" icon="" />
            <p className="text-neutral-400">
              Already have account?{" "}
              <span className="text-neutral-200 underline underline-offset-4">
                <Link to="/signup">Sign Up</Link>
              </span>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SignIn;
