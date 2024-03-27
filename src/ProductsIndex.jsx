/* eslint-disable react/prop-types */
export function ProductsIndex(props) {
  return (
    <div>
      <h1>All products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.image_url} />
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p> + <button onClick={() => props.onShowProduct(product)}>More info</button>
        </div>
      ))}
    </div>
  );
}
