import { MarqueeDemo } from "./SliderTestimonial";
export default function Testimonial(){
    return(

    <div className=" px-4 sm:px-6 lg:px-8 mb-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-10 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent animate-text">
          Apa Kata Mereka
        </h2>
      </div>
      <MarqueeDemo/>
    </div>
    )
}