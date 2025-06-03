import { Link } from "react-router-dom";
import Titulo from "../components/titulo";
import Button from "../components/button";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <Titulo titulo="Página de Inicio" />
        <p className="mb-6 text-gray-700">
          Bienvenido a la página principal de gestiBooks.
        </p>
        <Link to="/">
          <Button type="button" text="Volver a Bienvenida" />
        </Link>
      </div>
    </div>
  );
};

export default Home;