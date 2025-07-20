export default function Timeline(){
     const timelineItems = [
      {
        year: "1948",
        image: "/Gambar/1948.jpeg",
        description:
          "Honda Motor Co., Ltd. didirikan oleh Soichiro Honda dan Takeo Fujisawa. Mereka memulai bisnis dengan membuat mesin kecil yang dipasang pada sepeda, menjawab kebutuhan transportasi Jepang pascaperang.",
      },
      {
        year: "1959",
        image: "/Gambar/1959.jpeg",
        description:
          "Honda menjadi produsen sepeda motor terbesar di dunia dan membuka cabang luar negeri pertamanya di Amerika Serikat, yaitu American Honda Motor Co., Inc.",
      },
      {
        year: "1972",
        image: "/Gambar/1972.jpeg",
        description:
          "Peluncuran Honda Civic, mobil kompak yang hemat bahan bakar dan ramah lingkungan. Model ini menjadi tonggak kesuksesan Honda di pasar otomotif global.",
      },
      {
        year: "1999",
        image: "/Gambar/1999.jpeg",
        description:
          "Honda meluncurkan Insight, mobil hybrid pertama mereka yang memadukan efisiensi bahan bakar tinggi dengan teknologi ramah lingkungan.",
      },
      {
        year: "2024",
        image: "/Gambar/2004.jpeg",
        description:
          "Honda fokus pada pengembangan kendaraan listrik dan sistem berkendara otonom berbasis AI, sebagai bagian dari visi mobilitas berkelanjutan di masa depan.",
      },
    ];
    return(
        <div className=" py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          <div className=" max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Timeline</h2>
              <p className="mt-2 text-gray-400 text-sm">Timeline singkat dari honda</p>
            </div>            
            <div className="max-w-6xl mx-auto relative">
              <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 transform -translate-x-1/2 hidden md:block" />
              <div className="space-y-16">
                {timelineItems.map((item, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <div
                      key={index}
                      className={`relative flex flex-col md:flex-row items-center gap-6 ${
                        isLeft ? "md:justify-start" : "md:justify-end"
                      }`}
                    >
                      {/* Konten */}
                      <div
                        className={`w-full md:w-1/2 px-4 py-4 rounded shadow-md ${
                          isLeft ? "md:order-1" : "md:order-2"
                        }`}
                      >
                        <img
                          src={item.image}
                          alt={`Gambar ${item.year}`}
                          className="w-full h-auto rounded mb-4 object-cover max-h-64"
                        />
                        <h3 className="text-xl font-bold text-indigo-400 mb-2">{item.year}</h3>
                        <p className="text-gray-200">{item.description}</p>
                      </div>

                      {/* Titik bulat */}
                      <div className="absolute md:left-1/2 left-4 top-0 md:transform md:-translate-x-1/2 w-5 h-5 bg-indigo-500 rounded-full border-4 border-white z-10 shadow hidden md:block" />
                    </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
    )
}
        
        
       