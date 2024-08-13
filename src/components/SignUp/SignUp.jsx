import React from "react";
import HeroImage from "../HeroImage/HeroImage";
import InputBox from "../InputBox/InputBox";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
    console.log(formData.get("password"));
    console.log(formData.get("name"));
  };

  return (
    <div className="grid grid-cols-2 mt-12 gap-10">
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

        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6 pb-16 w-[399px]">
            <InputBox
              type="text"
              placeholder="Name"
              backgroundColor="bg-black"
              name="name"
              title=""
            />
            <InputBox
              type="email"
              placeholder="Email"
              backgroundColor="bg-black"
              name="email"
              title=""
            />
            <InputBox
              type="password"
              placeholder="Password"
              backgroundColor="bg-black"
              name="password"
              title=""
            />
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
        </form>
      </section>
    </div>
  );
};

export default SignUp;
