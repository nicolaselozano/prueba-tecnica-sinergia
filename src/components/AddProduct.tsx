import React, { useState } from "react";
import { useUserData } from "../context/UserDataContext";

const AddProduct: React.FC = () => {
  const { userData, setUserData } = useUserData();
  const [nombre, setNombre] = useState("");
  const [valor, setValor] = useState("");

  const handleAddProduct = () => {
    if (!nombre || !valor) return;
    setUserData({
      ...userData,
      productos: [...userData.productos, { nombre, valor: parseFloat(valor) }],
    });
    setNombre("");
    setValor("");
  };

  return (
    <div className="bg-orange-300 p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-lg text-center text-orange-600 font-semibold">Agregar Producto</h2>
      <input
        type="text"
        placeholder="Nombre del Producto"

        onChange={(e) => setNombre(e.target.value)}
        className="text-orange-400 placeholder:text-orange-400 border-none
        p-2 border rounded w-full mt-2"
        value={nombre}
      />
      <input
        type="number"
        placeholder="Valor"
        onChange={(e) => setValor(e.target.value)}
        className="text-orange-400 placeholder:text-orange-400 border-none
        p-2 border rounded w-full mt-2"
        value={valor}
      />
      <button
        onClick={handleAddProduct}
        className="bg-white text-orange-400 py-2 hover:bg-button-hover active:bg-button-hover p-2 rounded mt-2 w-full"
      >
        Agregar
      </button>
    </div>
  );
};

export default AddProduct;
