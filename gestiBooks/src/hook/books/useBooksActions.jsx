import { url } from "../../utils/apiUrl";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useBooksAction = (getBooks) => {
  const navigate = useNavigate();

  //funcion para eliminar un usuario por su id
  // se usa async/await para manejar la asincronía de la llamada a la API
  const deleteBooks = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      toast.success("Book deleted successfully");
      console.log("Book deleted:", response);
      getBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
      toast.error("Failed to delete book");
    } finally {
      getBooks();
    }
  };
  const handleUpdateBooks = (id) => {
    navigate(`/books/${id}`);
  };

  return {
    deleteBooks,
    handleUpdateBooks,
  };
};

export default useBooksAction;