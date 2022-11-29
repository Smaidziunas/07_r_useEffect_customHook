import { useState } from 'react'; // sukurus custom hook nebereikia importuotis useState;

import useInput from './hooks/useInput';
function AddProduct(props) {
  // sukurti handleSubmit funkcija

  function handleSubmit(event) {
    event.preventDefault();
    // console.log('handling submit');

    // surinkti visas input reiksmes i viena objekta newProductObj
    const newProductObj = {
      // id: Math.floor(Math.random() * 10) + 5,
      id: Math.random().toString().slice(5),
      image: image.value,
      title: title.value,
      price: price.value,
    };

    props.onAddProduct(newProductObj);

    // iskviesti tevinio komponento funkcija productAddHandler(newProductObj)
    // argumentu paduoti newProductObj;

    // kad iskviesti funkcija, mes aprasom f-ja products komponente ir perduodam i AddProducts per props
  }

  // paleisti ja patekiant forma
  // sustabdyti perkrovima

  // const [titleValue, setTitle] = useInput();
  const title = useInput('');
  const image = useInput('/milk.jpeg');
  const price = useInput('');

  return (
    <fieldset>
      <legend>AddProduct</legend>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={title.setter}
          value={title.value}
          placeholder='title'
        />
        <input
          onChange={image.setter}
          value={image.value}
          type='text'
          placeholder='image url'
        />
        <input
          type='number'
          step={0.01}
          onChange={price.setter}
          value={price.value}
          placeholder='price'
        />
        <button type='submit'>Create</button>
      </form>

      <p>
        Title: {title.value}
        <br />
        ImageUrl: {image.value} <br />
        Price: {price.value}
        <br />
      </p>
    </fieldset>
  );
}
export default AddProduct;
