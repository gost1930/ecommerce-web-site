import { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [img, setImage] = useState(null);
    const [products, setProducts] = useState([]); // حالة لتخزين المنتجات

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('price', price);
        formData.append('img', img);

        try {
            const response = await axios.post('http://localhost:3001/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // إضافة المنتج الجديد إلى قائمة المنتجات
            setProducts([...products, response.data.product]);

            // مسح الحقول بعد الإرسال الناجح
            setTitle('');
            setPrice('');
            setImage(null);
        } catch (error) {
            console.error('Error uploading product:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input 
                    type="text" 
                    name="title" 
                    value={title} 
                    onChange={e => setTitle(e.target.value)} 
                    autoFocus
                    placeholder="Product Title" 
                    className="border p-2"
                    required 
                />
                <input 
                    type="text" 
                    name="price" 
                    value={price} 
                    onChange={e => setPrice(e.target.value)} 
                    placeholder="Product Price" 
                    className="border p-2"
                    required 
                />
                <input 
                    type="file" 
                    name="img" 
                    onChange={e => setImage(e.target.files[0])} 
                    placeholder="Product Image" 
                    className="border p-2"
                    required 
                    accept='image/png, image/jpeg'
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Add Product
                </button>
            </form>

            <div className="mt-6">
                {products.map((product, index) => (
                    <div key={index} className="border p-4 mb-4">
                        <h3 className="text-lg font-semibold">{product.title}</h3>
                        <p>Price: ${product.price}</p>
                        {product.img && (
                            <img 
                                src={product.img} 
                                alt={product.title} 
                                className="mt-2 border"
                                style={{ width: '200px', height: 'auto' }} 
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddProduct;
