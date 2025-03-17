import React, { useState } from "react";
import { useUserData } from "../context/UserDataContext";

const AddGoal: React.FC = () => {
  const { setUserData } = useUserData();
  const [goal, setGoal] = useState<number>(0);

  const handleAddGoal = () => {
    if (goal <= 0) {
      alert("Por favor, ingresa un monto válido.");
      return;
    }

    setUserData((prevData) => ({
      ...prevData,
      objetivoGanar: goal,
      tengoQueVender: goal * 3.5,
      volumenCarreraUSD: (goal * 3.5) / 3.7,
      totalVentasMes: Math.ceil(goal / 90000),
    }));

    setGoal(0);
  };

  return (
    <div className="bg-orange-200 p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-lg text-center text-orange-600 font-semibold">Nueva Meta Mensual</h2>
      <input
        type="number"
        placeholder="¿Cuánto quieres ganar?" 
        className="border p-2 rounded w-full mt-2 text-orange-400 border-none"
        value={goal}
        onChange={(e) => setGoal(Number(e.target.value))}
      />
      <button
        className="bg-white text-orange-400 hover:bg-button-hover active:bg-button-hover px-4 py-2 rounded mt-2 w-full"
        onClick={handleAddGoal}
      >
        Agregar Meta
      </button>
    </div>
  );
};

export default AddGoal;
