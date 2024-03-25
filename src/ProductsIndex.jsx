export function ProductsIndex(props) {
  return (
    <div>
      <h1>All products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <h2>{product.price}</h2>
          <img src={product.image_url} />
          <h2>{product.description}</h2>
        </div>
      ))}
    </div>
  );
}
