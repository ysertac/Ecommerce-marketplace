import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterContent = () => {
  const history = useHistory();
  const [roles, setRoles] = useState([]);
  const [formData, setFormData] = useState({});
  const [normalData, setNormalData] = useState({});
  const [storeData, setStoreData] = useState({});
  const { register, handleSubmit, formState: {errors} } = useForm();
  let [spinner, setSpinner] = useState(false);

  useEffect(() => {
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/roles")
      .then((response) => setRoles(response.data))
      .catch((error) => console.log(error))
  }, []);

  useEffect(() => {
    setFormData({
      Name: "",
      Email: "",
      Password: "",
      password2: "",
      role: roles.length > 0 ? roles[2].code : "",
      storename: "",
      storetaxid: "",
      storeaccountno: "",
    });
  }, [roles]);

  useEffect(() => {
    setNormalData({
      name: formData.Name,
      email: formData.Email,
      password: formData.Password,
      role_id: roles.filter((role) => (
        role.code == formData.code
      )).id
    })

    setStoreData({
      name: formData.Name,
      email: formData.Email,
      password: formData.Password,
      role_id: roles.filter((role) => (
        role.code == formData.code
      )).id,
      store: {
        name: formData.storename,
        phone: "",
        tax_no: formData.storetaxid,
        storeaccountno: formData.bank_account
      }
    })
  }, [formData])

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    setSpinner(true)
    formData.role == "store" 
    ? (axios
      .post("https://workintech-fe-ecommerce.onrender.com/signup", storeData)
      .then((response) => toast.success(response.data.message))
      .then((response) => history.push("/"))
      .catch((error) => toast.error(error.response.data.error))
      .finally(() => setSpinner(false))
    )
    : (axios
      .post("https://workintech-fe-ecommerce.onrender.com/signup", normalData)
      .then((response) => toast.success(response.data.message))
      .then((response) => history.push("/"))
      .catch((error) => toast.error(error.response.data.error))
      .finally(() => setSpinner(false))
    )
    console.log(formData);
  };

  
  return (
    <>
      <form
        onSubmit={handleSubmit(submitHandler)}
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
                {...register("Name", {
                  required: true,
                  maxLength: 10,
                  minLength: 3,
                })}
                aria-invalid={errors.Name ? true : false}
                type="text"
                onChange={changeHandler}
                name="Name"
                id="Name"
                value={formData.Name}
                autoComplete="Name"
                className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.Name?.type === "required" && (
                <p className="text-red-400 text-sm font-bold" role="alert">Username is required</p>
              )}
              {errors.Name?.type === "minLength" && (
                <p className="text-red-400 text-sm font-bold" role="alert">Username needs to contain at least 3 characters</p>
              )}
              {errors.Name?.type === "maxLength" && (
                <p className="text-red-400 text-sm font-bold" role="alert">Username can not contain more than 10 characters.</p>
              )}
            </div>
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
                {...register("Email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                })}
                aria-invalid={errors.Email ? true : false}
                id="Email"
                name="Email"
                type="email"
                onChange={changeHandler}
                value={formData.Email}
                autoComplete="Email"
                className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.Email?.type === "required" && (
                <p className="text-red-400 text-sm font-bold" role="alert">Email is required</p>
              )}
              {errors.Email?.type === "pattern" && (
                <p className="text-red-400 text-sm font-bold" role="alert">Pleace write a valid email adress</p>
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
                {...register("Password", {
                  required: true,
                  maxLength: 20,
                  minLength: 8,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/
                })}
                aria-invalid={errors.Password ? true : false}
                type="password"
                name="Password"
                onChange={changeHandler}
                value={formData.Password}
                id="Password"
                className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.Password?.type === "required" && (
                <p className="text-red-400 text-sm font-bold" role="alert">Password is required</p>
              )}
              {errors.Password?.type === "minLength" && (
                <p className="text-red-400 text-sm font-bold" role="alert">Password needs to contain at least 8 characters</p>
              )}
              {errors.Password?.type === "maxLength" && (
                <p className="text-red-400 text-sm font-bold" role="alert">Password can not contain more than 20 characters.</p>
              )}
              {errors.Password?.type === "pattern" && (
                <p className="text-red-400 text-sm font-bold" role="alert">Password must contain at least one uppercase, one lowercase, one number, one special character and total 8 characters.</p>
              )}
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
                  validate: (value) => value === formData.Password
                })}
                aria-invalid={errors.password2 ? true : false}
                type="password"
                name="password2"
                onChange={changeHandler}
                value={formData.password2}
                id="password2"
                className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.password2?.type === "required" && (
                <p className="text-red-400 text-sm font-bold" role="alert">Passwords do not match!</p>
              )}
              {errors.password2?.type === "validate" && (
                <p className="text-red-400 text-sm font-bold" role="alert">Passwords do not match!</p>
              )}
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
                className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    maxLength: 20,
                    minLength: 3,
                  })}
                  id="storename"
                  name="storename"
                  type="text"
                  onChange={changeHandler}
                  value={formData.storename}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.storename?.type === "required" && (
                  <p className="text-red-400 text-sm font-bold" role="alert">Store Name is required</p>
                )}
                {errors.storename?.type === "minLength" && (
                  <p className="text-red-400 text-sm font-bold" role="alert">Store Name has to contain at least 3 characters</p>
                )}
                {errors.storename?.type === "maxLength" && (
                  <p className="text-red-400 text-sm font-bold" role="alert">Store Name can contain max 20 characters</p>
                )}
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
                    pattern: /^T\d\d\d\dV\d\d\d\d\d$/i
                  })}
                  id="storetaxid"
                  name="storetaxid"
                  type="text"
                  onChange={changeHandler}
                  value={formData.storetaxid}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 uppercase text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.storetaxid?.type === "required" && (
                  <p className="text-red-400 text-sm font-bold" role="alert">Store Tax ID is required</p>
                )}
                {errors.storetaxid?.type === "pattern" && (
                  <p className="text-red-400 text-sm font-bold" role="alert">Please write a valid Store Tax ID</p>
                )}
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
                    pattern: /^TR\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d$/i
                  })}
                  id="storeaccountno"
                  name="storeaccountno"
                  type="text"
                  onChange={changeHandler}
                  value={formData.storeaccountno}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 uppercase text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.storeaccountno?.type === "required" && (
                  <p className="text-red-400 text-sm font-bold" role="alert">Account Number is required</p>
                )}
                {errors.storeaccountno?.type === "pattern" && (
                  <p className="text-red-400 text-sm font-bold" role="alert">Please write a valid account number</p>
                )}
              </div>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 mt-6 px-3 py-2 w-full text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {
            spinner
            ? <svg class="animate-spin mx-auto h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            : 'Sign Up'
          }
        </button>
      </form>
    </>
  );
};

export default RegisterContent;