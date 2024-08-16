import React from "react";
import AddProduit from "../components/produit/AddProduit";
import ReadProduit from "../components/produit/ReadProduit";
import './styles.css';

const Produits = () => {

  
  return (
    <div className="bg-gray-100">
      <div className="flex ">
        <div className="fixed bg-white mt-2 ml-2 flex items-center  basis-3/5 p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-white overflow-auto max-h-full scrollbar-hide">
          <AddProduit />
        </div>
        <div className="w-full ml-2 md:ml-96 px items-center justify-center   lg:mr-4 p-6 mt-2    overflow-auto ">
          <ReadProduit  />
        </div>
      </div>
    </div>
  );
}; 

export default Produits;
