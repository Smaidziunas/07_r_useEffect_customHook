import { useState, useEffect } from 'react';
import './Products.css';
import SingleProduct from './SingleProduct';
import AddProduct from './AddProduct';

function Products(props) {
  // komponentas kuris parsisiuncia duomenis
  // 1. sugeneruojam komponentas su tusciu be masyvu be duomenu
  // 2. tik sugeneravus useEffecte parsisiunciam duomenis
  // 3. parsiuntus atnaujinam tuscia state masyva su gautais duomenimis
  // react pats nubraizo pakeitimus html

  const [mainProductsArray, setmainProductsArray] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      // loading starts
      setIsLoading(true);
      let url = 'https://golden-whispering-show.glitch.me';
      url = '/api/products.json';
      const resp = await fetch(url);
      const dataInJs = await resp.json();
      console.log('dataInJs ===', dataInJs);
      // irasyti i state gautus produktus
      setmainProductsArray(dataInJs);
      // resetinam loading
      setIsLoading(false);
    } catch (error) {
      console.log('error ===');
      console.warn('did not get products');
      setIsLoading(false);
    } finally {
      // vyksta bet kuriuo atveju
      console.log('finally');
      setIsLoading(false);
    }
  }

  {
    // async function getProducts() {
    //   try {
    //     console.log('try');
    //     // loading starts
    //     setIsLoading(true);
    //     let url = 'https://golden-whispering-show.glitch.me';
    //     url = '/api/products.json';
    //     const resp = await fetch(url);
    //     const dataInJs = await resp.json();
    //     console.log('dataInJs ===', dataInJs);
    //     // irasyti i state gautus produktus
    //     setMainProductsArray(dataInJs);
    //     // setIsLoading(false); // moved to finally
    //   } catch (error) {
    //     console.log('catch');
    //     console.warn('did not get products');
    //     // setIsLoading(false); // moved to finally
    //   } finally {
    //     // vyksta bet kuriuo atveju
    //     console.log('finally');
    //     setIsLoading(false);
    //   }
    // }
  }
  //        ===================================
  function productDeleteHandler(idToDelete) {
    setmainProductsArray((prevState) =>
      prevState.filter((obj) => obj.id !== idToDelete)
    );
    // return setmainProductsArray.filter((obj) => obj.id !== idToDelete); // negalima nes setmainProductsArray yra fn
  }

  // susikurti productAddHandler(newProductObj)

  /*
{id: 1, image: '1', title: '', price: }
  */

  function productAddHandler(newProductObj) {
    console.log(newProductObj);
    console.log('mainarr-->>', mainProductsArray);
    const newArr = [...mainProductsArray];
    newArr.push(newProductObj);
    return setmainProductsArray(newArr);
  }
  // perduoti i AddProduct.jsx
  // productAddHandler kviecia setMainProductsArray()
  // atnaujiman su arrow f-ja (spread (...))

  return (
    <div>
      <h2>Products</h2>
      <button>Show Add Product</button>
      {/* onAddProduct */}
      <AddProduct onAddProduct={productAddHandler} />

      {isLoading && <h2>Loading..</h2>}
      {!isLoading && (
        <ul className='unlisted grid--pr'>
          {/* mapinti per mainProductsArray ir generuoti li */}
          {mainProductsArray.map((obj) => {
            // singleproductui paduoti id props
            return (
              <SingleProduct
                key={obj.id}
                id={obj.id}
                img={obj.image}
                title={obj.title}
                price={obj.price}
                onDelete={productDeleteHandler} // nereikia skliausteliu!!
              >
                {obj.title}
              </SingleProduct>
            );
          })}
        </ul>
      )}
    </div>
  );
}
export default Products;
