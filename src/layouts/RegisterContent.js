import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

const RegisterContent = () => {
  const history = useHistory();
  const [roles, setRoles] = useState([]);
  const [formData, setFormData] = useState({});
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/roles")
      .then((response) => setRoles(response.data));
  }, []);

  useEffect(() => {
    setFormData({
      username: "",
      email: "",
      password1: "",
      password2: "",
      role: roles.length > 0 ? roles[2].code : "",
      storename: "",
      storetaxid: "",
      storeaccountno: "",
    });
  }, [roles]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    console.log(formData);
    history.push("/");
  };

  return (
    <>
      <form
        onSubmit={
          formData.password1 == formData.password2
            ? handleSubmit(submitHandler)
            : alert("parolalar eşleşmiyor")
        }
        className="w-1/6 max-sm:w-11/12 pb-10 mx-auto"
      >
        <div className="mt-10 border-b border-secondaryColor">
          <div className="text-general text-right font-bold text-sm">
            <p>(Are you already a member?)</p>
            <Link className="text-primaryColor">Log in</Link>
          </div>
          <div className="mb-7">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-general"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                {...register("username", {
                  required: true,
                  maxLength: 10,
                  minLength: 3,
                })}
                type="text"
                onChange={changeHandler}
                name="username"
                id="username"
                value={formData.username}
                autoComplete="username"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="my-7">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-general"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                {...register("email", {
                  required: true,
                })}
                id="email"
                name="email"
                type="email"
                onChange={changeHandler}
                value={formData.email}
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="my-7">
            <label
              htmlFor="password1"
              className="block text-sm font-medium leading-6 text-general"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                {...register("password1", {
                  required: true,
                  maxLength: 15,
                  minLength: 3,
                })}
                type="password"
                name="password1"
                onChange={changeHandler}
                value={formData.password1}
                id="password1"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="my-7">
            <label
              htmlFor="password2"
              className="block text-sm font-medium leading-6 text-general"
            >
              Password again
            </label>
            <div className="mt-2">
              <input
                {...register("password2", {
                  required: true,
                  maxLength: 15,
                  minLength: 3,
                })}
                type="password"
                name="password2"
                onChange={changeHandler}
                value={formData.password2}
                id="password2"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="my-7">
            <label
              htmlFor="role"
              className="block text-sm font-medium leading-6 text-general"
            >
              Role
            </label>
            <div className="mt-2">
              <select
                id="role"
                name="role"
                onChange={changeHandler}
                value={formData.role}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                {roles.map((role) => (
                  <option>{role.code}</option>
                ))}
              </select>
            </div>
          </div>
          {formData.role == "store" && (
            <div className="my-7">
              <label
                htmlFor="storename"
                className="block text-sm font-medium leading-6 text-general"
              >
                Store Name
              </label>
              <div className="mt-2">
                <input
                  {...register("storename", {
                    required: true,
                    maxLength: 10,
                    minLength: 3,
                  })}
                  id="storename"
                  name="storename"
                  type="text"
                  onChange={changeHandler}
                  value={formData.storename}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          )}
          {formData.role == "store" && (
            <div className="my-7">
              <label
                htmlFor="storetaxid"
                className="block text-sm font-medium leading-6 text-general"
              >
                Tax ID
              </label>
              <div className="mt-2">
                <input
                  {...register("storetaxid", {
                    required: true,
                    maxLength: 10,
                    minLength: 3,
                  })}
                  id="storetaxid"
                  name="storetaxid"
                  type="text"
                  onChange={changeHandler}
                  value={formData.storetaxid}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          )}
          {formData.role == "store" && (
            <div className="my-7">
              <label
                htmlFor="storeaccountno"
                className="block text-sm font-medium leading-6 text-general"
              >
                Account Number
              </label>
              <div className="mt-2">
                <input
                  {...register("storeaccountno", {
                    required: true,
                    maxLength: 10,
                    minLength: 3,
                  })}
                  id="storeaccountno"
                  name="storeaccountno"
                  type="text"
                  onChange={changeHandler}
                  value={formData.storeaccountno}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 mt-6 px-3 py-2 w-full text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default RegisterContent;
