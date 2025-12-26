import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                to="/"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Login</h3>
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
                {errors.password && <span className="text-sm text-red-600"> This field is required</span>}
              </div>
              <div className="flex justify-around align-middle mt-4">
                <button className="btn btn-secondary">Login</button>
                <p>
                  Not Registered?{" "}
                  <span>
                    <Link
                      className="underline text-blue-500 cursor-pointer"
                      to="/signup"
                    >
                      Signup
                    </Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
