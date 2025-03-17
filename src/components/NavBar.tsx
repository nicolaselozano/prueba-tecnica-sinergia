import DropButton from "./DropButton";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between  py-4 text-white">
      <h1 className="text-3xl font-bold text-white">Comisiones</h1>
      <DropButton name="Menú" options={["Perfil", "Ajustes", "Cerrar sesión"]} />
    </nav>
  );
};

export default Navbar;

