export default function Filter() {
  return (
    <>
      <div class="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 class="text-2xl font-bold mb-4 text-gray-800">
          Consulta de Empleados
        </h2>

        <form class="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            id="cedula"
            name="cedula"
            placeholder="Buscar por cédula"
            class="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            class="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Buscar
          </button>
          <button
            type="button"
            class="bg-gray-300 text-gray-800 font-semibold px-6 py-2 rounded-lg hover:bg-gray-400 transition"
            onclick="mostrarTodosLosEmpleados()"
          >
            Ver Todos
          </button>
        </form>

        <div class="overflow-x-auto">
          <table class="min-w-full border border-gray-200 divide-y divide-gray-200">
            <thead class="bg-gray-100 text-gray-700 text-sm">
              <tr>
                <th class="px-4 py-2 text-left">Cédula</th>
                <th class="px-4 py-2 text-left">Nombre</th>
                <th class="px-4 py-2 text-left">Email</th>
                <th class="px-4 py-2 text-left">Estado Vacunación</th>
                <th class="px-4 py-2 text-left">Vacuna</th>
                <th class="px-4 py-2 text-left">Dosis</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 text-sm">
              <tr>
                <td class="px-4 py-2">0912345678</td>
                <td class="px-4 py-2">Christian Merchan</td>
                <td class="px-4 py-2">christian.merchan@gmail.com</td>
                <td class="px-4 py-2">Vacunado</td>
                <td class="px-4 py-2">Pfizer</td>
                <td class="px-4 py-2">1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
