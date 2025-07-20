// src/pages/DetailPage.jsx
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function DetailPage() {
  
  const vehicle = useSelector((state) => state.selected.data)

  if (!vehicle) {
    return <div className="text-white text-center mt-10">Data tidak ditemukan.</div>;
  }

  return (
   <div className="text-white min-h-screen px-4 py-20 ">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center lg:items-start mt-5">
      <div className="w-full lg:w-1/2">
        <img
          src={vehicle.image}
          alt={vehicle.Model_Name}
          className="rounded-lg w-full max-h-[550px] object-cover shadow-lg"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <h1 className="text-4xl font-bold mb-3">{vehicle.Model_Name}</h1>
        <p className="text-indigo-400 font-semibold text-xl mb-2">{vehicle.Make_Name}</p>
        <p className="text-gray-300 mb-2">Tahun: <span className="text-white font-medium">2015</span></p>
        <p className="text-gray-400">Model ID: <span className="text-white">{vehicle.Model_ID}</span></p>
        <p className="mt-6 text-sm text-gray-400 leading-relaxed">
          Kendaraan ini merupakan salah satu model populer dari Honda. Informasi ini diambil dari database resmi NHTSA dan bertujuan membantu Anda dalam eksplorasi kendaraan dengan mudah dan cepat.
        </p>
      </div>
  </div>
</div>

  );
}
