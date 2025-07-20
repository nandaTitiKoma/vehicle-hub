export default function About(){
    const items = [
    {
      icon: "🌐", 
      title: "API Resmi",
      desc: "Sumber data nama mobil berasal dari API NHTSA",
    },
    {
      icon: "⚙️",
      title: "Teknologi",
      desc: "Web ini dibuat menggunakan react dan tailwind",
    },
    {
      icon: "🛞",
      title: "Honda Models",
      desc: "Eksplorasi visual data otomotif Honda",
    },
  ];
  
  return(
<div className="py-20 px-4 sm:px-6 lg:px-8  from-gray-900 via-gray-800 to-gray-900" data-aos="fade-up" >
  <div className="max-w-7xl mx-auto">
    <div className="mb-12 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">Tentang Website</h2>
      <p className="mt-2 text-gray-400 text-sm">Kenali fitur dan keunggulan yang kami tawarkan</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, idx) => {
        const gradients = [
          "from-blue-800 to-gray-900",
          "from-purple-700 to-violet-800",
          "from-indigo-600 to-indigo-800"
        ];
        const gradient = gradients[idx % gradients.length];

        return (
          <div
            key={idx}
            className={`rounded-xl p-6 shadow-lg bg-gradient-to-br ${gradient} text-white transform hover:scale-105 transition-transform duration-300`}
          >
            <div className="mb-4 w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white text-2xl mx-auto">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-white text-center">{item.title}</h3>
            <p className="mt-3 text-sm text-white text-center opacity-90">{item.desc}</p>
          </div>
        );
      })}
    </div>
  </div>
</div>


  )

}   
   
   