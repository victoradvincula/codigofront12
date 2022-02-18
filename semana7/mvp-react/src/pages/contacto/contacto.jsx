import "../contacto/contacto.scss";
export const PageContacto = () => {
  return (
    <div className="page-contacto">
      <div class="grid grid-cols-4 gap-4 text-3xl font-bold underline">
        <input type="text" className="p-4 border-gray-500 rounded-xl focus:outline-none focus:border-gray-900"/>
      </div>
    </div>
  );
};
