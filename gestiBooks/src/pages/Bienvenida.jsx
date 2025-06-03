import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import SubTitulo from "../components/SubTitulo";

const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  const handleAccept = () => {
    setShowWelcome(false);
    navigate("/home");
  };

  if (!showWelcome) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <SubTitulo titulo="Bienvenido a la Aplicación CRUD" />
        <p className="mb-6 text-gray-700">
          ¡Gracias por visitar nuestra aplicación gestiBooks! Aquí podrás gestionar tus libros de manera sencilla y eficiente. A continuación, te presentamos una breve guía para comenzar.
        </p>

        <Button type="button" onClick={handleAccept} text="Aceptar" />
      </div>
    </div>
  );
};

export default Welcome;