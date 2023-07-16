import { useState } from "react";
import InputType from "./InputType";
import { handleLogin, handleRegister } from "../../../services/authServices";
//eslint-disable-next-line
const Form = ({ formType, formTitle, submitBtn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <>
      <form
        onSubmit={(e) => {
          if (formType === "login")
            return handleLogin(e, email, password, role);
          else if (formType === "register")
            return handleRegister(
              e,
              name,
              role,
              email,
              password,
              organisationName,
              hospitalName,
              address,
              website,
              phone
            );
        }}
      >
        <h1> {formTitle} </h1>
        <hr />
        {/* Role check */}
        <div className="flex flex-wrap">
          <div className="flex items-center mr-4">
            <input
              id="red-radio"
              type="radio"
              className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              name="role"
              value={"donar"}
              onChange={(e) => setRole(e.target.value)}
              defaultChecked
            />
            <label
              htmlFor="red-radio"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Donar
            </label>
          </div>
          <div className="flex items-center mr-4">
            <input
              id="red-radio"
              type="radio"
              className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              name="role"
              value={"admin"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label
              htmlFor="red-radio"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Admin
            </label>
          </div>
          <div className="flex items-center mr-4">
            <input
              id="red-radio"
              type="radio"
              className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              name="role"
              value={"hospital"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label
              htmlFor="red-radio"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Hospital
            </label>
          </div>
          <div className="flex items-center mr-4">
            <input
              id="red-radio"
              type="radio"
              className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              name="role"
              value={"organisation"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label
              htmlFor="red-radio"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Organisation
            </label>
          </div>
        </div>

        {/* FormType Check */}

        {formType === "login" && (
          <>
            <InputType
              labelText={"email"}
              labelFor={"forEmail"}
              inputType={"email"}
              name={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputType
              labelText={"password"}
              labelFor={"forPassword"}
              inputType={"password"}
              name={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        )}
        {formType === "register" && (
          <>
            {(role === "admin" || role === "donar") && (
              <InputType
                labelText={"Name"}
                labelFor={"forName"}
                inputType={"text"}
                name={"name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            {role === "organisation" && (
              <InputType
                labelText={"Organisation Name"}
                labelFor={"forOrganisationName"}
                inputType={"text"}
                name={"organisationName"}
                value={organisationName}
                onChange={(e) => setOrganisationName(e.target.value)}
              />
            )}
            {role === "hospital" && (
              <InputType
                labelText={"Hospital Name"}
                labelFor={"forHospitalName"}
                inputType={"text"}
                name={"hospitalName"}
                value={hospitalName}
                onChange={(e) => setHospitalName(e.target.value)}
              />
            )}
            <InputType
              labelText={"email"}
              labelFor={"forEmail"}
              inputType={"email"}
              name={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputType
              labelText={"password"}
              labelFor={"forPassword"}
              inputType={"password"}
              name={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputType
              labelText={"Address"}
              labelFor={"forAddress"}
              inputType={"text"}
              name={"address"}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <InputType
              labelText={"Website"}
              labelFor={"forWebsite"}
              inputType={"text"}
              name={"website"}
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <InputType
              labelText={"Phone"}
              labelFor={"forPhone"}
              inputType={"text"}
              name={"phone"}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </>
        )}

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {submitBtn}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
