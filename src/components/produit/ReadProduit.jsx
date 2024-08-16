import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { TiEdit } from "react-icons/ti";

function ReadProduit({}) {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/produit");
        setProduits(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
      }
    };

    fetchProduits();
  }, []);

  const handleDelete = async (id) => {
    try {
      const conf =  confirm('etes vous sur.!!')
      if(conf){
        await axios.delete(`http://localhost:3001/api/produit/${id}`);
        setProduits(produits.filter((produit) => produit._id !== id));
      }

    } catch (error) {
      console.error("Erreur lors de la suppression du produit:", error);
    }
  };

  return (
    <div className="flex flex-wrap justify-center">
      {produits.map((produit) => (
        <div
          key={produit._id}
          className="hover:scale-105  duration-700 m-5 w-full max-w-sm bg-white  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              className="p-8 rounded-t-lg"
              src={produit.imgLien}
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {produit.nameProduit}
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                Réduction de : {produit.reductionProduit}%
              </span>
            </div>
            <div>
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {produit.prixProduit} FCfa
              </span>
            </div>
            <br />
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-200">
                  created : {produit.createdAt}
                </span>
                <br />
                <span className="text-sm text-gray-200">
                  modified : {produit.updatedAt}
                </span>
              </div>

              <div className="p-1">
                <button
                  onClick={() => handleDelete(produit._id)}
                  className="m-2 text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <MdDelete size={20} />
                </button>
                <button className="text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <TiEdit size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )).reverse()}
    </div>
  );
}

export default ReadProduit;
