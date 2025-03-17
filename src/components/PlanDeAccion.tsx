import { useState } from "react";

export default function PlanDeAccion() {
  const [plan, setPlan] = useState({
    prospectos: 16,
    presentacionesMes: 5,
    presentacionesSemana: 2,
    horasCapacitacion: 20,
  });

  const handleChange = (e: { target: { name: string; value: unknown; }; }) => {
    setPlan({
      ...plan,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-5 ">
      <div className="max-w-md mx-auto bg-orange-300 shadow-md rounded-lg p-5">
        <h2 className="text-xl font-bold mb-4 text-center text-orange-600"> Plan de Acción</h2>
        <div className="grid grid-cols-2 gap-4 item">
          <div className="bg-white p-4 rounded-md
          flex flex-col justify-between">
            <label className="block font-semibold text-orange-400">Prospectos</label>
            <input
              type="number"
              name="prospectos"
              value={plan.prospectos}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="bg-white p-4 rounded-md
          flex flex-col justify-between">
            <label className="block font-semibold text-orange-400">Presentaciones Mes</label>
            <input
              type="number"
              name="presentacionesMes"
              value={plan.presentacionesMes}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="bg-white p-4 rounded-md
          flex flex-col justify-between">
            <label className="block font-semibold text-orange-400">Presentaciones Semana</label>
            <input
              type="number"
              name="presentacionesSemana"
              value={plan.presentacionesSemana}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="bg-white p-4 rounded-md
          flex flex-col justify-between">
            <label className="block font-semibold text-orange-400">Horas Capacitación</label>
            <input
              type="number"
              name="horasCapacitacion"
              value={plan.horasCapacitacion}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>
        <button className="w-full bg-white text-orange-400 py-2 rounded-md mt-4 hover:bg-button-hover active:bg-button-hover">
          Guardar
        </button>
      </div>
    </div>
  );
}
