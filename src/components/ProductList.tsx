import React from "react";
import { useUserData } from "../context/UserDataContext";

const ProductList: React.FC = () => {
  const { userData } = useUserData();

  return (
    <div className=" p-4 bg-orange-200 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-bold mb-4 text-center text-orange-600">Productos</h2>
      <ul className="grid grid-cols-2 gap-4 mt-2">
        {userData.productos.map((producto, index) => (
          <li key={index} className="p-4 bg-orange-400  text-white hover:bg-orange-600 active:bg-button-hover rounded-md text-center">
            {producto.nombre} - <strong>${producto.valor}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
