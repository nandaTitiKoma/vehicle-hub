import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="flex items-center justify-center h-full w-full text-sm text-gray-500 border-t border-gray-700 text-cente h-[50px]">
            © {new Date().getFullYear()} Honda Explorer. Rizky Abdillah
        </div>
    )
}