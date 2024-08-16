import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { SiGooglemessages } from "react-icons/si";

function Client() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const reponse = await axios.get("http://localhost:3001/api/users/all");
        setClients(reponse.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
      }
    };
    fetchClients();
  }, []);

  return (
    <div className="bg-gray-100  md:flex">
      {clients.map((client) => (
        <div
          key={client._id}
          class="m-2 hover:scale-105  duration-700 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="flex flex-col items-center pb-10">
            <FaRegUserCircle
              class="p-2 w-16 h-16 mb-3 rounded-full shadow-lg"
              size={20}
            />

            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {client.firstName} {client.lastName}
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              {client.email}
            </span>
            <div class="flex mt-4 md:mt-6">
              <a
                href="#"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <FaCircleInfo />
              </a>
              <a
                href="#"
                class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <SiGooglemessages size={20} />
              </a>
              
            </div>
            <br />
            <span className="text-xs text-gray-200">
              created : {client.createdAt}
            </span>
            <span className="text-xs text-gray-200">
              modified : {client.updatedAt}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Client;
