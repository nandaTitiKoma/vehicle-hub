import { useSelector } from "react-redux";
import ProductCard from "../components/Card";
import SectionWrapper from "../components/SectionWrapper";

export default function FavoritPage() {
  const favorites = useSelector((state) => state.favorite.items);

  return (
    <SectionWrapper>
    <div className=" min-h-screen text-white px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Mobil Favorit Anda</h1>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-300">Belum ada mobil yang difavoritkan.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {favorites.map((item) => (
            <ProductCard
              key={item.Model_ID}
              modelId={item.Model_ID}
              modelName={item.Model_Name}
              makeName={item.Make_Name}
              image={item.image}
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
