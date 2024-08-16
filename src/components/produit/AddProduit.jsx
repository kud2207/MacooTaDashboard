import axios from "axios";
import React, { useState } from "react";
import FirebaseImage from "../../Firebase/FirebaseImage";
import { MdAddTask } from "react-icons/md";
import { SlBasket } from "react-icons/sl";

export default function AddProduit({}) {
  const [errorRegistre, setErrorRegistre] = useState("");
  const [addProduit, setAddProduit] = useState({
    imgLien: "",
    nameProduit: "",
    prixProduit: "",
    reductionProduit: "",
  });

  const setImgLien = (url) => {
    setAddProduit((prev) => ({ ...prev, imgLien: url }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddProduit({ ...addProduit, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(addProduit);
    try {
      const url = "http://localhost:3001/api/produit/";
      await axios.post(url, addProduit);
      setErrorRegistre("");
      setAddProduit({
        imgLien: "",
        nameProduit: "",
        prixProduit: "",
        reductionProduit: "",
      });
      alert("Product added successfully!");
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorRegistre("Connection error to the database");
      } else {
        setErrorRegistre("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className="">
      <br />
      <span className="ml-1 text-2xl font-bold text-green-700 capitalize flex cursor-pointer">
      <SlBasket size={30} />
        Add a new product 
      </span>
      <form className="max-w-md mx-5 mt-6" onSubmit={handleSubmit}>
        <FirebaseImage setImgLien={setImgLien} />
        <div className="relative z-0 w-full mb-5 group mt-4">
          <input
            type="text"
            name="nameProduit"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
            value={addProduit.nameProduit}
            onChange={handleChange}
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Product Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="prixProduit"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
            value={addProduit.prixProduit}
            onChange={handleChange}
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Product Price: (Fcfa)
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="reductionProduit"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
            value={addProduit.reductionProduit}
            onChange={handleChange}
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Percentage Reduction: (%)
          </label>
        </div>
        <div className="flex flex-row-reverse mb-7">
        <MdAddTask  size={20} />
          <input
            type="submit"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-600 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-blue-400 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            value="Add Product"
          />
        </div>
      </form>
      {errorRegistre && (
        <p className="text-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
          {errorRegistre}
        </p>
      )}
      {addProduit.imgLien && (
 
<div class="flex items-center justify-center w-full mb-7">

    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
        <img src={addProduit.imgLien} alt="Uploaded" class="flex items-center justify-center w-full mb-7" />
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 

      )}
    </div>
  );
}
