import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';


const men: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5050/api/men');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  return (

     
    
      
      <body>
        <div id="navbar"></div>
        <select name="" id="sortPrice">
          <option value="">FILTER & SORT</option>
          <option value="low">Low To High</option>
          <option value="high">High To Low</option>
          <option value="less">Less than 2000</option>
          <option value="greater">Greater than 500</option>
        </select>
        <div>
    {products.map((product) => (
      <div id="main" className="grid" key={product.idproduct}>
        <div>
          <img src={product.images_product} alt={product.name_product} />
          <div className="flex">
            <p>{product.name_product}</p>
            <div>
              <p style={{ textDecoration: 'line-through' }}>₹ {product.original_price}</p>
              <p>-{product.discount}% ₹ {product.price}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
        <div id="main" className="grid">
          <div>
            <img src="https://static.zara.net/photos///2021/I/0/2/p/3562/325/712/2/w/312/3562325712_2_1_1.jpg?ts=1629704227863" alt="" />
            <div className="flex">
              <p>STRIPED COTTON SHIRT</p>
              <div>
                <p style={{ textDecoration: 'line-through' }}>₹ 2,990.00</p>
                <p>-55%₹ 1,290.00</p>
              </div>
            </div>
          </div>
        </div>
        <div id="footer"></div>
    
      </body>
  
  );
};

export default men;
