import axios from "axios";
import React from "react";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";

const Form = () => {
  const [name, setName] = React.useState("");
  const [identity, setIdentity] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [birth, setBirth] = React.useState("");
  const emailRegex = /^[\w-\.]+@[a-z]+\.[a-z]{2,3}$/;

  const nameValidator = () => {
    if (!(name.length > 0 && name.length <= 20)) {
      return true;
    }

    return false;
  };

  const identityValidator = () => {
    if (identity === 0) {
      return true;
    }

    if (!(identity.toString().length > 5 && identity.toString().length <= 16)) {
      return true;
    }

    return false;
  };

  const emailValidator = () => {
    if (email.length === 0) {
      return true;
    }

    if (!emailRegex.test(email)) {
      return true;
    }

    return false;
  };

  const birthValidator = () => {
    if (birth.length === 0) {
      return true;
    }

    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const identity_number = identity;
    const date_of_birth = birth;

    if (
      nameValidator() ||
      identityValidator() ||
      emailValidator() ||
      birthValidator()
    ) {
      alert("You must passed all the rules");
      return;
    }

    try {
      const res = await axios.post("http://127.0.0.1:8000/account/", {
        name,
        identity_number,
        email,
        date_of_birth,
      });
      const { status, message } = res.data;
      if (status === "success") {
        alert(message);
        return;
      }
      alert(message);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="John Doe"
              onChange={(e) => setName(e.target.value)}
              maxLength={20}
            />
            <div className="w-full flex justify-end">
              <span className="inline-block text-xs">{name.length}/20</span>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center gap-1.5">
              {name.length === 0 ? (
                <IoIosCloseCircleOutline className="text-lg text-red-600" />
              ) : (
                <IoIosCheckmarkCircleOutline className="text-lg text-green-600" />
              )}
              <span className="text-sm">Name not be empty</span>
            </div>
            <div className="flex items-center gap-1.5">
              {name.length > 0 && name.length <= 20 ? (
                <IoIosCheckmarkCircleOutline className="text-lg text-green-600" />
              ) : (
                <IoIosCloseCircleOutline className="text-lg text-red-600" />
              )}
              <span className="text-sm">Maximum of name is 20</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Identity Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="12345678"
              type="number"
              onChange={(e) => setIdentity(e.target.value)}
            />
          </div>
          <div className="mt-1">
            <div className="flex items-center gap-1.5">
              {identity === 0 ? (
                <IoIosCloseCircleOutline className="text-lg text-red-600" />
              ) : (
                <IoIosCheckmarkCircleOutline className="text-lg text-green-600" />
              )}
              <span className="text-sm">Identity Number not be empty</span>
            </div>
            <div className="flex items-center gap-1.5">
              {identity.toString().length > 5 &&
              identity.toString().length <= 16 ? (
                <IoIosCheckmarkCircleOutline className="text-lg text-green-600" />
              ) : (
                <IoIosCloseCircleOutline className="text-lg text-red-600" />
              )}
              <span className="text-sm">Minimum is 5 and Maximum is 16</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="johndoe@example.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-1">
            <div className="flex items-center gap-1.5">
              {email.length === 0 ? (
                <IoIosCloseCircleOutline className="text-lg text-red-600" />
              ) : (
                <IoIosCheckmarkCircleOutline className="text-lg text-green-600" />
              )}
              <span className="text-sm">Email not be empty</span>
            </div>
            <div className="flex items-center gap-1.5">
              {!emailRegex.test(email) ? (
                <IoIosCloseCircleOutline className="text-lg text-red-600" />
              ) : (
                <IoIosCheckmarkCircleOutline className="text-lg text-green-600" />
              )}
              <span className="text-sm">Not a valid email</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date of Birth
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              onChange={(e) => setBirth(e.target.value)}
            />
          </div>
          <div className="mt-1">
            <div className="flex items-center gap-1.5">
              {birth.length === 0 ? (
                <IoIosCloseCircleOutline className="text-lg text-red-600" />
              ) : (
                <IoIosCheckmarkCircleOutline className="text-lg text-green-600" />
              )}
              <span className="text-sm">Date of birth not be empty</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
