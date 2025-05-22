import axios from "axios";
import { useForm } from "../Hooks/useForm";

export default function Register() {
  const { values, handleChange, reset } = useForm({
    documentID: "",
    firstName: "",
    lastName: "",
    email: "",
    user: "",
    password: "",
    birthday: "",
    address: "",
    mobilePhone: "",
    vaccinationStatus: "",
    vaccine: "",
    vaccinationDate: "",
    numberDoses: 1,
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Create a FormData object and append the values
    for (const key in values) {
      formData.append(key, values[key]);
    }

    handleFetch(formData);
  }


  // Function to send the form data to the server using Axios
  const handleFetch = async (formData) => {
    const url = "YOUR_URL_HERE"; 

    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    } 
  }

  return (
    <>
      <div className="max-w-4xl mx-auto mt-10 bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Datos del Empleado
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="documentID"
              className="block text-gray-700 font-semibold mb-1"
            >
              Cédula de Identidad <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="documentID"
              name="documentID"
              required
              value={values.documentID}
              onChange={handleChange}
              pattern="\d{10}"
              title="La cédula debe tener 10 dígitos"
              maxLength="10"
              autoComplete="off"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingrese la cédula"
            />
          </div>

          <div>
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-semibold mb-1"
            >
              Nombre <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={values.firstName}
              onChange={handleChange}
              pattern="^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ ]+$"
              title="El nombre solo puede contener letras"
              maxLength="20"
              autoComplete="off"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej. Christian"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-gray-700 font-semibold mb-1"
            >
              Apellido <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={values.lastName}
              onChange={handleChange}
              pattern="^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ ]+$"
              title="El apellido solo puede contener letras"
              maxLength="20"
              autoComplete="off"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej. Merchan"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
              Correo electrónico <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={values.email}
              onChange={handleChange}
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              title="Ingrese un correo electrónico válido"
              maxLength="50"
              autoComplete="off"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej. ejemplo@correo.com"
            />
          </div>

          <div>
            <label htmlFor="user" className="block text-gray-700 font-semibold mb-1">
              Usuario <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="user"
              name="user"
              required
              value={values.user}
              onChange={handleChange}
              pattern="^[A-Za-z0-9_]+$"
              title="El usuario solo puede contener letras, números y guiones bajos"
              maxLength="20"
              autoComplete="off"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nombre de usuario"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-1"
            >
              Contraseña <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={values.password}
              onChange={handleChange}
              title="La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial"
              minLength="8"
              maxLength="20"
              autoComplete="off"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Contraseña"
            />
          </div>

          <div>
            <label
              htmlFor="birthday"
              className="block text-gray-700 font-semibold mb-1"
            >
              Fecha de nacimiento
            </label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              value={values.birthday}
              onChange={handleChange}
              max={new Date().toISOString().split("T")[0]}
              pattern="^\d{4}-\d{2}-\d{2}$"
              title="Ingrese una fecha válida"
              autoComplete="off"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-gray-700 font-semibold mb-1">
              Dirección
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={values.address}
              onChange={handleChange}
              pattern="^[A-Za-z0-9_]+$"
              title="La dirección solo puede contener letras, números y guiones bajos"
              maxLength="50"
              autoComplete="off"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Dirección"
            />
          </div>

          <div>
            <label
              htmlFor="mobilePhone"
              className="block text-gray-700 font-semibold mb-1"
            >
              Teléfono móvil
            </label>
            <input
              type="tel"
              id="mobilePhone"
              name="mobilePhone"
              value={values.mobilePhone}
              onChange={handleChange}
              pattern="^\d{10}$"
              title="El teléfono móvil debe tener 10 dígitos"
              maxLength="10"
              autoComplete="off"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej. 0991234567"
            />
          </div>

          <div>
            <label
              htmlFor="vaccinationStatus"
              className="block text-gray-700 font-semibold mb-1"
            >
              Estado de vacunación
            </label>
            <select
              id="vaccinationStatus"
              name="vaccinationStatus"
              value={values.vaccinationStatus}
              onChange={handleChange}
              pattern="^(vacunado|noVacunado)$"
              title="Seleccione una opción"

              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Seleccione una opción</option>
              <option value="vacunado">Vacunado</option>
              <option value="noVacunado">No vacunado</option>
            </select>
          </div>

          <div>
            <label htmlFor="vaccine" className="block text-gray-700 font-semibold mb-1">
              Vacuna
            </label>
            <input
              type="text"
              id="vaccine"
              name="vaccine"
              value={values.vaccine}
              onChange={handleChange}
              pattern="^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ ]+$"
              title="La vacuna solo puede contener letras"
              autoComplete="off"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej. Pfizer, Moderna"
            />
          </div>

          <div>
            <label
              htmlFor="vaccinationDate"
              className="block text-gray-700 font-semibold mb-1"
            >
              Fecha de vacunación
            </label>
            <input
              type="date"
              id="vaccinationDate"
              name="vaccinationDate"
              value={values.vaccinationDate}
              onChange={handleChange}
              max={new Date().toISOString().split("T")[0]}
              pattern="^\d{4}-\d{2}-\d{2}$"
              title="Ingrese una fecha válida"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="numberDoses"
              className="block text-gray-700 font-semibold mb-1"
            >
              Número de dosis
            </label>
            <input
              type="number"
              id="numberDoses"
              name="numberDoses"
              value="1"
              onChange={handleChange}
              pattern="^\d+$"
              title="El número de dosis debe ser un número entero positivo"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="1"
            />
          </div>

          <div className="md:col-span-2 flex justify-end mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
            >
              Registrar Empleado
            </button>
            <button
              type="reset"
              className="bg-gray-300 text-gray-800 font-semibold px-6 py-2 rounded-lg hover:bg-gray-400 transition cursor-pointer ml-4 "
              onClick={reset}
            >
              Limpiar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
