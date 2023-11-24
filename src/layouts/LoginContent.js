import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { fetchUser } from "../store/actions/userActions";

const LoginContent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const spinner = useSelector((store) => store.user.spinner);

  useEffect(() => {
    setFormData({
      email: "",
      password: "",
    });
  }, []);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    dispatch(fetchUser(formData, history));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-1/6 max-sm:w-11/12 pb-10 mx-auto"
      >
        <div className="mt-10 border-b border-secondaryColor">
          <div className="text-general text-right font-bold text-sm">
            <p>(You aren't a member yet?)</p>
            <Link to="/register" className="text-primaryColor">
              Sign up
            </Link>
          </div>
          <div className="my-7">
            <label
              htmlFor="Email"
              className="block text-sm font-medium leading-6 text-general"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                })}
                aria-invalid={errors.Email ? true : false}
                id="email"
                name="email"
                type="email"
                onChange={changeHandler}
                value={formData.Email}
                autoComplete="Email"
                className="block w-full rounded-md py-1.5 pl-3 text-gray-900 ring-2 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-400 text-sm font-bold" role="alert">
                  Email is required
                </p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="text-red-400 text-sm font-bold" role="alert">
                  Pleace write a valid email adress
                </p>
              )}
            </div>
          </div>
          <div className="my-7">
            <label
              htmlFor="Password"
              className="block text-sm font-medium leading-6 text-general"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                onChange={changeHandler}
                value={formData.Password}
                id="password"
                className="block w-full rounded-md py-1.5 pl-3 text-gray-900 ring-2 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 mt-6 px-3 py-2 w-full text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {spinner ? (
            <svg
              class="animate-spin mx-auto h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Log in"
          )}
        </button>
      </form>
    </>
  );
};

export default LoginContent;
