import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useUserData } from "../context/UserDataContext";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import AddGoal from "./AddGoal";
import PlanDeAccion from "./PlanDeAccion";
import Navbar from "./NavBar";

// Registrar elementos de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard: React.FC = () => {
  const { userData } = useUserData();

  const data = {
    labels: ["7/10", "7/11", "7/12", "7/13", "7/14", "7/15", "7/16"],
    datasets: [
      {
        label: "Ingresos estimados",
        data: [100, 80, 60, 120, 50, 40, 30],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="p-6 bg-gradient-to-r from-red-900 to-orange-400 min-h-screen flex flex-col">

      <Navbar />
      <hr />
      <div className=" mt-2
      bg-orange-200 text-orange-600 p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold">Total Comisiones</h1>
        <p className="text-4xl font-extrabold mt-2">
          ${userData.totalVentasMes}
        </p>
        <button className="mt-4 bg-white text-orange-500 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-button-hover active:bg-button-hover">
          Retirar Dinero
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="flex flex-col justify-center items-center bg-orange-300 p-4 rounded-lg shadow-md
        ">
          <h3 className="text-white text-center font-semibold">Volumen Carrera</h3>
          <p className="text-lg font-bold text-white">
            {userData.volumenCarreraUSD} USD
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-orange-300 p-4 rounded-lg shadow-md">
          <h3 className="text-white text-center font-semibold">Comisión</h3>
          <p className="text-lg font-bold text-white ">
            {userData.comisionActual}%
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-orange-300 p-4 rounded-lg shadow-md">
          <h3 className="text-white text-center font-semibold">Ventas Necesarias</h3>
          <p className="text-lg font-bold text-white ">
            ${userData.tengoQueVender}
          </p>
        </div>
      </div>

      <div className="bg-orange-100 p-6 rounded-lg shadow-md mt-2">
        <h2 className="text-xl font-bold text-center text-orange-600">
          Ingresos Estimados
        </h2>
        <Line data={data} />
      </div>

      <PlanDeAccion />
      <ProductList />
      <AddProduct />
      <AddGoal />
    </div>
  );
};

export default Dashboard;
