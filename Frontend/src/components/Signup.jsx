import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
const Signup = () => {
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="relative p-5 rounded-md shadow-2xl">
          <div className="">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                aria-label="Close signup"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black"
                to="/"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email:</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-80 border px-3 outline-none rounded-md"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && <span  className="text-sm text-red-600">This field is required</span>}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password:</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter Your password"
                  className="w-80 border px-3 outline-none rounded-md"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && <span  className="text-sm text-red-600">This field is required</span>}
              </div>
              <div className="flex justify-around align-middle mt-4">
                <button className="btn btn-secondary" >
                  Signup
                </button>
                <p>
                  Have Account?{" "}
                  <button
                    type="button"
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3")?.showModal()
                    }
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
        <Login />
      </div>
    </>
  );
};

export default Signup;
