import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "../hooks/useForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../utils/config";

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
    numberDoses: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (const key in values) {
      formData.append(key, values[key]);
    }

    handleFetch(formData);
  };

  const handleFetch = async (formData) => {
    const url = `${API_BASE_URL}create`;

    try {
      await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      Swal.fire({
        icon: "success",
        title: "¡Registro exitoso!",
        text: "El usuario ha sido creado correctamente.",
        confirmButtonColor: "#3085d6",
      });

      // Resetear el formulario
      reset();
    } catch (error) {
      // Manejo de errores
      if (error.code === "ERR_NETWORK") {
        Swal.fire({
          icon: "error",
          title: "Error del servidor",
          text: "Ocurrido un error en el servidor. Por favor, reintenta mas tarde.",
        });
      } else if (error.status === 400) {
        Swal.fire({
          icon: "warning",
          title: "Error al registrar",
          text: `${error.response.data}`,
          confirmButtonColor: "#d33",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error al registrar",
          text: "Ocurrió un error al enviar los datos. Intenta nuevamente.",
          confirmButtonColor: "#d33",
        });
      }
    }
  };

  return (
    <>
      <div className="appear max-w-4xl mx-auto mt-10 bg-white p-8 shadow-lg rounded-lg font-display">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Datos del Empleado
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
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
              autoComplete="off"
              value={values.documentID}
              onChange={handleChange}
              pattern="\d{10}"
              title="La cédula debe tener 10 dígitos"
              maxLength="10"
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
              autoComplete="off"
              value={values.firstName}
              onChange={handleChange}
              pattern="^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ ]+$"
              title="El nombre solo puede contener letras"
              maxLength="20"
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
              autoComplete="off"
              value={values.lastName}
              onChange={handleChange}
              pattern="^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ ]+$"
              title="El apellido solo puede contener letras"
              maxLength="20"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej. Merchan"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-1"
            >
              Correo electrónico <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="off"
              value={values.email}
              onChange={handleChange}
              // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              title="Ingrese un correo electrónico válido"
              maxLength="50"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej. ejemplo@correo.com"
            />
          </div>

          <div>
            <label
              htmlFor="user"
              className="block text-gray-700 font-semibold mb-1"
            >
              Usuario <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="user"
              name="user"
              required
              autoComplete="off"
              value={values.user}
              onChange={handleChange}
              pattern="^[A-Za-z0-9]+$"
              title="El usuario solo puede contener letras y números"
              maxLength="20"
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

            <div className="relative w-full">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                autoComplete="new-password"
                value={values.password}
                onChange={handleChange}
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,20}$"
                title="La contraseña debe tener al menos 6 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial"
                minLength="6"
                maxLength="20"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                placeholder="Contraseña"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="birthday"
              className="block text-gray-700 font-semibold mb-1"
            >
              Fecha de nacimiento <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              required
              autoComplete="off"
              value={values.birthday}
              onChange={handleChange}
              min="1950-01-01"
              max={new Date().toISOString().split("T")[0]}
              pattern="^\d{4}-\d{2}-\d{2}$"
              title="Ingrese una fecha válida"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-gray-700 font-semibold mb-1"
            >
              Dirección <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              autoComplete="off"
              value={values.address}
              onChange={handleChange}
              pattern="^[A-Za-z0-9 áéíóúÁÉÍÓÚñÑ.,#\-]+$"
              title="Ingrese una dirección válida (letras, números, puntos, comas, guiones y numeral)."
              maxLength="50"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Dirección"
            />
          </div>

          <div>
            <label
              htmlFor="mobilePhone"
              className="block text-gray-700 font-semibold mb-1"
            >
              Teléfono móvil <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="mobilePhone"
              name="mobilePhone"
              required
              autoComplete="off"
              value={values.mobilePhone}
              onChange={handleChange}
              pattern="^\d{10}$"
              title="El teléfono móvil debe tener 10 dígitos"
              maxLength="10"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej. 0991234567"
            />
          </div>

          <div>
            <label
              htmlFor="vaccinationStatus"
              className="block text-gray-700 font-semibold mb-1"
            >
              Estado de vacunación <span className="text-red-500">*</span>
            </label>
            <select
              id="vaccinationStatus"
              name="vaccinationStatus"
              required
              autoComplete="off"
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
            <label
              htmlFor="vaccine"
              className="block text-gray-700 font-semibold mb-1"
            >
              Vacuna <span className="text-red-500">*</span>
            </label>
            <select
              id="vaccine"
              name="vaccine"
              required
              autoComplete="off"
              value={values.vaccine}
              onChange={handleChange}
              pattern="^(Pfizer|Moderna|AstraZeneca|Sinovac)$"
              title="Seleccione una opción"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Seleccione una vacuna</option>
              <option value="Pfizer">Pfizer</option>
              <option value="Moderna">Moderna</option>
              <option value="AstraZeneca">AstraZeneca</option>
              <option value="Sinovac">Sinovac</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="vaccinationDate"
              className="block text-gray-700 font-semibold mb-1"
            >
              Fecha de vacunación <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="vaccinationDate"
              name="vaccinationDate"
              required
              autoComplete="off"
              value={values.vaccinationDate}
              onChange={handleChange}
              max={new Date().toISOString().split("T")[0]}
              min="1950-01-01"
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
              Número de dosis <span className="text-red-500">*</span>
            </label>
            <select
              id="numberDoses"
              name="numberDoses"
              required
              autoComplete="off"
              value={values.numberDoses}
              onChange={handleChange}
              pattern="^[1-3]$"
              title="Seleccione el número de dosis"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Seleccione el número de dosis</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div className="md:col-span-2 col-span-1 flex justify-between items-center mt-4">
            <div>
              <button
                className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold cursor-pointer group"
                type="button"
                onClick={() => navigate("/")}
              >
                <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                    height="25px"
                    width="25px"
                  >
                    <path
                      d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                      fill="#000000"
                    ></path>
                    <path
                      d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                      fill="#000000"
                    ></path>
                  </svg>
                </div>
                <p className="translate-x-2"> Ir al Inicio</p>
              </button>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold px-6 py-2 h-[42px] rounded-lg hover:bg-blue-700 transition cursor-pointer"
              >
                Registrar Empleado
              </button>
              <button
                type="reset"
                className="bg-gray-300 text-gray-800 font-semibold px-6 py-2 h-[42px] rounded-lg hover:bg-gray-400 transition cursor-pointer"
                onClick={reset}
              >
                Limpiar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
