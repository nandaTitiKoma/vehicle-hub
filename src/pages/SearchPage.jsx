import React, { useEffect, useState } from "react";
import ProductCard from "../components/Card";
import SectionWrapper from "../components/SectionWrapper";

export default function SearchPage() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/honda/modelyear/2015?format=json"
      );
      const data = await res.json();
      const sliced = data.Results.slice(0, 50);

      const filtered = sliced
        .filter((car) =>
          car.Model_Name.toLowerCase().includes(keyword.toLowerCase())
        )
        .map((car, i) => {
          const sanitized = car.Model_Name
          .replace(/\s+/g, "-")      
          .replace(/[()]/g, "")       
          .toLowerCase();;
          const image = `/cars/${sanitized}.jpg`;
          return { ...car, image };

        });

      setResult(filtered);
    } catch (err) {
      console.error("Gagal fetch:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchVehicles();
  };

  return (
    <SectionWrapper>
    <div className=" min-h-screen text-white px-4 py-24 sm:px-6 lg:px-8" >
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-center mb-4">Cari Model Kendaraan Honda</h1>
        <form onSubmit={handleSearch} className="flex gap-4 justify-center">
          <input
            type="text"
            placeholder="Contoh: Accord"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full max-w-sm px-4 py-2 rounded-md text-black"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md"
          >
            Cari
          </button>
        </form>
      </div>

    {loading ? (
      <div className="flex justify-center items-center h-40">
      <div className="w-12 h-12 border-4 border-indigo-500 border-dashed rounded-full animate-spin"></div>
    </div>
    ) : result.length === 0 ? (
      <p className="text-center text-gray-300">Tidak ada hasil ditemukan.</p>
    ) : (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
  {result.map((item, index) => (
      <ProductCard
        modelId={item.Model_ID}
        image={item.image}
        modelName={item.Model_Name}
        makeName={item.Make_Name}
        color="2015"
        price="Rp 250 Jutaan"
      />
  ))}
</div>

    )}
    </div>
    </SectionWrapper>
  );
}
