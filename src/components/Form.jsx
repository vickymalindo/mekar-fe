import React from 'react';
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from 'react-icons/io';

const Form = () => {
  const [name, setName] = React.useState('');
  const [identity, setIdentity] = React.useState(0);
  const [email, setEmail] = React.useState('');
  const [birth, setBirth] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, identity, email, birth);
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
        <div>
          <div className="mb-4">
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
          <div className="mb-4">
            <div className="flex items-center gap-1.5">
              {identity === 0 ? (
                <IoIosCloseCircleOutline className="text-lg text-red-600" />
              ) : (
                <IoIosCheckmarkCircleOutline className="text-lg text-green-600" />
              )}
              <span className="text-sm">Identity Number not be empty</span>
            </div>
            <div className="flex items-center gap-1.5">
              {identity.toString().length > 5 ? (
                <IoIosCheckmarkCircleOutline className="text-lg text-green-600" />
              ) : (
                <IoIosCloseCircleOutline className="text-lg text-red-600" />
              )}
              <span className="text-sm">Minimum of identity number is 5</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
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
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Date of Birth
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            onChange={(e) => setBirth(e.target.value)}
          />
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
