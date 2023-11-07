import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RegisterContent = () => {
  const [roles, setRoles] = useState([]);
  const [formData, setFormData] = useState({});

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
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
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
                type="text"
                onChange={changeHandler}
                name="username"
                id="username"
                value={formData.username}
                autoComplete="username"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="janesmith"
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
