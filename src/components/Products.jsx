import { useState, useEffect } from 'react';
import './Products.css';

function Products(props) {
  // komponentas kuris parsisiuncia duomenis
  // 1. sugeneruojam komponentas su tusciu be masyvu be duomenu
  // 2. tik sugeneravus useEffecte parsisiunciam duomenis
  // 3. parsiuntus atnaujinam tuscia state masyva su gautais duomenimis
  // react pats nubraizo pakeitimus html

  const [mainProductsArray, setmainProductsArray] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const url = 'https://golden-whispering-show.glitch.me';
    const resp = await fetch(url);
    const dataInJs = await resp.json();
    console.log('dataInJs ===', dataInJs);
    // irasyti i state gautus produktus
    setmainProductsArray(dataInJs);
  }

  // image: {obj.id} title: {obj.title} price: {obj.price}

  return (
    <div>
      <h2>Products</h2>
      <ul className='unlisted grid--pr'>
        {/* mapinti per mainProductsArray ir generuoti li */}
        {mainProductsArray.map((obj) => {
          return (
            <li key={obj.id} className='singleProduct'>
              <img src={obj.image} alt={obj.title} />
              <p>{obj.title}</p>
              <p>{obj.price} </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Products;
