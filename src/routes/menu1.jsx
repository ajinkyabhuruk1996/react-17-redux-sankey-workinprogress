//https://reactrouter.com/docs/en/v6/getting-started/tutorial
import ProductList from "../components/productList";


export default function menu1() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Menu 1 Page Content</h2>
        <ProductList category="dataForMenu1"/>
      </main>
    );
}