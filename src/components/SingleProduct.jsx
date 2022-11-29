function SingleProduct(props) {
  // props.onDelete === productDeleteHandler (esanciame Products komponente)

  function deleteTrigger() {
    props.onDelete(props.id);
  }

  return (
    <li id={props.id} className='singleProduct'>
      <img src={props.img} alt={props.title} />
      <h3>{props.children}</h3>
      <p>£ {props.price} </p>
      {/* pasiimti id is props ir paduoti i onDelete (arrow funkcija) */}
      {/* <button onClick={() => props.onDelete(props.id)}>delete</button> */}
      <button
        onClick={() => {
          return deleteTrigger();
        }}
      >
        delete
      </button>
    </li>
  );
}
export default SingleProduct;
