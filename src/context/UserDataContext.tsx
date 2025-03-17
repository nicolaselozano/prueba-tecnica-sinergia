import React, { createContext, useContext, useState } from "react";

interface Producto {
  nombre: string;
  valor: number;
}

interface PlanAccion {
  nuevosDatosProspectar: number;
  minPresentacionesMes: number;
  minPresentacionesSem: number;
  capacitacionHorasSem: number;
}

interface UserData {
  nombreSocio: string;
  mes: string;
  miTicketPromedioUSD: number;
  valorUSD: number;
  comisionActual: number;
  objetivoGanar: number;
  tengoQueVender: number;
  volumenCarreraUSD: number;
  totalVentasMes: number;
  productos: Producto[];
  planAccion: PlanAccion;
}

const datosIniciales: UserData = {
  nombreSocio: "Martin Rodriguez",
  mes: "Febrero",
  miTicketPromedioUSD: 1100,
  valorUSD: 1055,
  comisionActual: 35,
  objetivoGanar: 900000,
  tengoQueVender: 3103650,
  volumenCarreraUSD: 2942,
  totalVentasMes: 3,
  productos: [
    { nombre: "Producto A", valor: 10000 },
    { nombre: "Producto B", valor: 20000 },
    { nombre: "Producto C", valor: 30000 },
    { nombre: "Producto D", valor: 40000 },
    { nombre: "Producto E", valor: 50000 },
    { nombre: "Producto F", valor: 60000 },
    { nombre: "Producto J", valor: 70000 },
    { nombre: "Producto H", valor: 80000 },
  ],
  planAccion: {
    nuevosDatosProspectar: 16,
    minPresentacionesMes: 5,
    minPresentacionesSem: 2,
    capacitacionHorasSem: 20,
  },
};

const UserDataContext = createContext<{
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
} | null>(null);

export const UserDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState(datosIniciales);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error("useUserData debe ser usado dentro de UserDataProvider");
  }
  return context;
};
