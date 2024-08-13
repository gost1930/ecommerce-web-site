import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-2">معلومات عنا</h3>
            <p className="text-sm"></p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-red-600 ml-1" />
                العطاف عين الدفلى
              </li>
              <li className="flex items-center">
                <FaPhone className="text-red-600 ml-1" />
                0667425077
              </li>
              <li className="flex items-center">
                <MdEmail className="text-red-600 ml-1" />
                example@gmial.com
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-2">الفئات</h3>
            <ul className="space-y-2">
              <li>عروض ساخنة</li>
              <li>أجهزة لابتوب</li>
              <li>هواتف ذكية</li>
              <li>كاميرات</li>
              <li>إكسسوارات</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-2">معلومات</h3>
            <ul className="space-y-2">
              <li>معلومات عنا</li>
              <li>اتصل بنا</li>
              <li>سياسة الخصوصية</li>
              <li>طلبات وإرجاع</li>
              <li>الشروط والأحكام</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-2">خدمة</h3>
            <ul className="space-y-2">
              <li>حسابي</li>
              <li>عرض السلة</li>
              <li>قائمة الأمنيات</li>
              <li>تتبع طلبي</li>
              <li>مساعدة</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p>Copyright ©2024 All rights reserved | made with ❤ by <a href="" className="underline">Hadbi Mohamed</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
