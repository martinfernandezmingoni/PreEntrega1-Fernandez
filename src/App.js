function Header (props) {
  const {numberOfProducts} = props;
  console.log(props, numberOfProducts);
  return (
    <header> This is my  header number of products {props.numberOfProducts}</header>
  );
}

function Product ({product}) {
  return(
    <div key= {product.id} >
      {product.id}
      {product.price}
    </div>
  );
}

function Store() {
  const products = [
    {
      id:1,
      name:'Mani',
      prince:'$1US'
    }
  ];
  return(
    <main>
      {products.map((product) => (
        <Product product= {product} /> 
        ))}
    </main>
  );
}

export default function App() {
  const numberOfProducts = 0;
  return(
    <div>
      <Header> numberOfProducts={numberOfProducts}</Header>
      <h1>Hello CoderHouse {numberOfProducts}</h1>
      <Store />
    </div>
  )
}
