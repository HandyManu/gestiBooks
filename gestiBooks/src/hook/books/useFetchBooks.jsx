import { useEffect, useState } from "react";
import { url } from "../../utils/apiUrl";
import { toast } from "react-hot-toast";

const useFetchBooks = () => {
  //state para almacenar los datos de los usuarios
  const [dataBooks, setDataBooks] = useState([]);

  //funcion para obtener los usuarios desde la API
  //se usa useCallback para evitar que la funcion se vuelva a crear en cada renderizado

  const getBooks = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        toast.error("Failed to fetch books");
        throw new Error("Failed to fetch books");
      }
      const data = await response.json();
      setDataBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
      toast.error("Error fetching books");
    }
  };

  //funcion para obtener un usuario por su id
  //se usa async/await para manejar la asincronía de la llamada a la API

  const getBookById = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`);
      if (!response.ok) {
        console.log("Failed to fetch book");
        throw new Error("Failed to fetch book");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching book:", error);
      console.log("Failed to fetch book");
      return null;
    }
  };

  //useEffect para llamar a getUsers cuando el componente se monta
  useEffect(() => {
    getBooks();
  }, []);

  //retornar los datos y las funciones para ser usados en otros componentes
  return {
    dataBooks,
    setDataBooks,
    getBooks,
    getBookById,
  };
};

export default useFetchBooks;