import { Link } from "react-router-dom";
import Titulo from "../components/titulo";
import Button from "../components/Button";
import InputText from "../components/InputText";
import useDataBooks from "../hook/books/useDataBooks";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const Users = () => {
  const { id } = useParams();
  const methods = useForm();
  const { register, handleSubmit, errors } = useDataBooks(methods);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/Home"
        className="text-2xl font-bold text-gray-900 mb-4 bg-green-400 p-2 rounded w-auto text-center hover:bg-green-200 transition-colors"
      >
        Back To Dashboard
      </Link>

      <form
        onSubmit={handleSubmit}
        className="border-b border-gray-900/10 pb-12 bg-white shadow-md rounded-lg flex flex-col p-4"
      >
        <Titulo titulo="Book Information" />

        <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/* Autor */}
          <InputText
            type="text"
            name="Autor"
            label="Autor"
            placeholder="Ingresa el nombre del autor del libro"
            register={register}
            error={errors.Autor?.message}
          />

          {/* Libro */}
          <InputText
            type="text"
            name="Libro"
            label="Libro"
            placeholder="Ingresa el nombre del libro"
            register={register}
            error={errors.Libro?.message}
          />

          {/* Email */}
          <InputText
            type="text"
            name="Estado"
            label="Estado"
            placeholder="Ingresa el estado del libro"
            register={register}
            error={errors.Estado?.message}
          />

          {/* Genero */}
          <InputText
            type="text"
            name="Genero"
            label="Genero"
            placeholder="Ingresa el género del libro"
            register={register}
            error={errors.Genero?.message}
          />

        </div>
        <div className="mt-6 flex justify-start ">
          <Button type="submit" text={id ? "Edit Book" : "Save Book"} />
        </div>
      </form>
    </div>
  );
};

export default Users;