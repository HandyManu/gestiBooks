import { Link } from "react-router-dom";
import Titulo from "../components/titulo";
import Button from "../components/Button";
import useFetchBooks from "../hook/books/useFetchBooks";
import useBooksAction from "../hook/books/useBooksActions";
import ButtonDelete from "../components/buttonDelete";

const Home = () => {
  const { dataBooks, getBooks } = useFetchBooks();
  const { deleteBooks, handleUpdateBooks } = useBooksAction(getBooks);
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/books"
        className="text-2xl font-bold text-gray-900 mb-4 bg-green-400 p-2 rounded w-full text-center hover:bg-green-200 transition-colors block mb-6"
      >
        Agregar Libro
      </Link>

      <Titulo titulo="Books Information" />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-100 text-gray-700 text-left text-sm">
            <tr>
              <th className="px-4 py-2 border-b">Autor</th>
              <th className="px-4 py-2 border-b">Libro</th>
              <th className="px-4 py-2 border-b">Estado</th>
              <th className="px-4 py-2 border-b">Genero</th>
              <th className="px-4 py-2 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dataBooks?.map((book) => (
              <tr
                key={book.id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-2">{book.Autor}</td>
                <td className="px-4 py-2">{book.Libro}</td>
                <td className="px-4 py-2">{book.Estado}</td>
                <td className="px-4 py-2">{book.Genero}</td>
                
                <td className="px-4 py-2 flex gap-2">
                  <Button
                    text="Editar"
                    onClick={() => handleUpdateBooks(book.id)}
                  />

                  <ButtonDelete
                    text="Eliminar"
                    onClick={() => deleteBooks(book.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;