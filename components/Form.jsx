import React, { useState } from "react";

const INITIAL_ARGONAUTES = {
  name: "",
  sex: "",
  navigation: 0,
};

const Form = ({ handleSubmit }) => {
  const [newArgonaute, setNewArgonaute] = useState(INITIAL_ARGONAUTES);
  const [nameErr, setNameErr] = useState(false);

  const validName = /^[A-Za-z]+$/;
  const validate = () => {
    if (!validName.test(newArgonaute.name)) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!nameErr) {
      handleSubmit(newArgonaute);
      setNewArgonaute(INITIAL_ARGONAUTES);
    } else {
      setNewArgonaute(INITIAL_ARGONAUTES);
    }
  };

  return (
    <div className="font-main-menu antialiased pb-12">
      <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
        <form onSubmit={onSubmit}>
          <div className="flex flex-col bg-gray-100 p-10 rounded-lg shadow space-y-6">
            <h1 className="font-bold text-center text-1xl text-orange-wildColor uppercase">
              Ajouter <span className="text-black">Un(e) Argonaute</span>
            </h1>

            <div className="flex flex-col space-y-1">
              <input
                type="text"
                required
                value={newArgonaute.name}
                onChange={(e) =>
                  setNewArgonaute({ ...newArgonaute, name: e.target.value })
                }
                className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-orange-wildColor focus:shadow"
                placeholder="Nom..."
              />
              {nameErr && (
                <p className="text-orange-wildColor uppercase font-bold text-sm">
                  Le nom ne peut contenir que des lettres !
                </p>
              )}
            </div>

            <div className="flex flex-col space-y-1">
              <p className="text-sm">Compétence de navigation :</p>
              <input
                type="range"
                min="0"
                max="100"
                required
                value={newArgonaute.navigation}
                onChange={(e) =>
                  setNewArgonaute({
                    ...newArgonaute,
                    navigation: e.target.value,
                  })
                }
                className="focus:outline-none bg-orange-wildColor"
              />
            </div>

            <div className="">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="sex"
                  value="M"
                  required
                  onChange={(e) =>
                    setNewArgonaute({ ...newArgonaute, sex: e.target.value })
                  }
                />
                <span className="ml-2">Homme</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio"
                  name="sex"
                  value="F"
                  required
                  onChange={(e) =>
                    setNewArgonaute({ ...newArgonaute, sex: e.target.value })
                  }
                />
                <span className="ml-2">Femme</span>
              </label>
            </div>

            <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
              <a
                href="#"
                className="inline-block text-blue-500 hover:text-blue-800 hover:underline"
              ></a>
              <button
                onClick={validate}
                type="submit"
                className="bg-orange-wildColor text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-black transition-colors"
              >
                Ajouter
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
