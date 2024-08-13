import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


import img from '../../assets/pro1.png'
import img2 from '../../assets/pro2.png'
import img3 from '../../assets/pro3.png'
import img4 from '../../assets/pro4.png'
import img5 from '../../assets/pro5.png'

const SlideImg = () => {
  const { id } = useParams();
  const [value, setValue] = useState(img); // الصورة الافتراضية الأولى
  
  // استخدم useEffect لضبط الصورة الافتراضية عند التحميل
  useEffect(() => {
    // هنا يمكنك ضبط الصورة الافتراضية بناءً على id إذا كنت ترغب في ذلك
    setValue(img);
  }, [id]);

  // وظيفة لتحديث الصورة الرئيسية عند النقر على الصور المصغرة
  const handleImageClick = (newImg) => {
    setValue(newImg);
  };

  const images = [img, img2, img3, img4, img5];

  return (
    <section className='w-full md:w-1/2 flex flex-col max-h-[70%] h-fit '>
      <div className='w-full h-[70%] '>
        <img src={value} alt="" className='max-w-60 max-h-full mx-auto' />
      </div>

      <div className='flex flex-row w-full h-[25%]'>      
        {images.map((image , index) => (
          <a
            key={index}
            onClick={() => handleImageClick(image)}
            onMouseOver={() => handleImageClick(image)}
            className="cursor-pointer mx-1"
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-20 h-20 object-cover"
            />
          </a>
        ))}
          
        
          
        
      </div>
    </section>
  )
}

export default SlideImg;
