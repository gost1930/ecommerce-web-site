import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const Header = () => {
  return (
    <section className="w-full flex flex-row justify-between bg-slate-900 py-2 px-3">
      <div className="flex flex-row">
        <a href=""  className="flex flex-row items-center
         text-[12px] duration-200 text-white hover:text-red-600 mx-3">
            <FaPhone className="text-red-600 ml-1" />
            0667425077
        </a>
        <a href=""  className="flex flex-row items-center
         text-[12px] duration-200 text-white hover:text-red-600 mx-3">
            <MdEmail  className="text-red-600 ml-1" />
            example@gmial.com
        </a>
        <a href="https://www.google.com/maps/dir/?api=1&destination=36.21794%2C1.6776&fbclid=IwY2xjawEZwU1leHRuA2FlbQIxMAABHYIIhBd2lcZk-gGBh8eHLtGXU01eeeIzKAxBHpztbQhZ5w0Tz9doR8c_Ig_aem_fAQbRpczWTno7PQR3HPhJg"  className="flex flex-row items-center
         text-[12px] duration-200 text-white hover:text-red-600 mx-3">
            <FaMapMarkerAlt  className="text-red-600 ml-1" />
            العطاف عين الدفلى
        </a>
      </div>
    </section>
  )
}

export default Header;