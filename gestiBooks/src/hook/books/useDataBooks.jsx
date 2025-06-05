import { useEffect, useState } from "react";
import { url } from "../../utils/apiUrl"; // URL de la API
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useFetchBooks from "../../hook/books/useFetchBooks"; // Hook para obtener los libros

const useDataBooks = (methods) => {
  const [dataBooks, setDataBooks] = useState([]);
  const { getBookById, getBooks } = useFetchBooks();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const navigate = useNavigate();

  // save user form
  // funcion para guardar el formulario de usuario y enviar los datos a la API
  const saveBooksForm = async (dataForm) => {
    try {
      // enviar la solicitud POST a la API
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });
      if (!response.ok) {
        toast.error("Failed to add book");
        throw new Error("Failed to add book");
      }
      toast.success("Book saved successfully");
      navigate("/Home"); // Redirigir a la página de inicio después de guardar
    } catch (error) {
      console.log("Error al  enviado:", error);
    } finally {
      reset(); // reiniciar el formulario después de enviar
      getBooks(); // obtener la lista actualizada de usuarios
    }
  };

  // Función para editar un usuario
  // Esta función se llama cuando se envía el formulario de edición
  // y envía una solicitud PUT a la API para actualizar los datos del usuario

  const editBooks = async (dataForm) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });
      if (!response.ok) {
        toast.error("Failed to update book");
        throw new Error("Failed to update book");
      }
      toast.success("book updated successfully");
      navigate("/Home"); // Redirect to home after updating
    } catch (error) {
      console.error("Error updating book:", error);
      toast.error("Failed to update book");
    } finally {
      reset(); // Reset the form after submission
      getBooks(); // Refresh the user list after updating
    }
  };

  // Esta función se llama cuando se envía el formulario
  // y decide si guardar un nuevo usuario o editar uno existente
  // dependiendo de si hay un id presente en los parámetros de la URL
  // Si hay un id, se llama a editUser, de lo contrario se llama a saveUserForm

  const handleBooksAction = (dataForm) => {
    if (id) {
      editBooks(dataForm);
    } else {
      saveBooksForm(dataForm);
    }
  };

  // Función para manejar la actualización de un usuario
  // Esta función se llama cuando se hace clic en el botón de editar
  // y redirige al usuario a la página de edición del usuario
  // pasando el id del usuario como parámetro en la URL
  const handleUpdateBooks = (id) => {
    navigate(`/books/${id}`);
  };

  // Cargar los datos del usuario por id
  // Esta función se llama para obtener los datos del usuario cuando el componente se monta o cuando cambia el id
  const loadBook = async () => {
    if (id) {
      const book = await getBookById(id);
      if (book) {
        reset({
          autor: book?.autor,
          libro: book?.libro,
          estado: book?.estado,
          genero: book?.genero,
        });
      }
    }
  };

  // useEffect para cargar los datos del usuario cuando el componente se monta o cuando cambia el id
  useEffect(() => {
    loadBook();
  }, [id]); // Dependencia en id para recargar los datos si cambia

  return {
    dataBooks,
    setDataBooks,
    register,
    handleSubmit: handleSubmit(handleBooksAction),
    errors,
    getBookById,
    handleUpdateBooks,
    loadBook,
  };
};

export default useDataBooks;
