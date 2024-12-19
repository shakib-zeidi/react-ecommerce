import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import ProductItem from "../../components/productItem/ProductItem";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import { ProductInterface } from "../../interfaces";

function Store() {
	const [products, setProducts] = useState<ProductInterface[]>([]);

	useEffect(() => {
		getProducts().then((result) => {
			setProducts(result);
		});
	}, []);

	return (
		<Container>
			<h1 className="mt-5">جدیدترین محصولات</h1>
			<div className="grid grid-cols-4 gap-4 mt-4 mb-10">
				{products.map((product) => (
					<Link key={product.id} to={`/product/${product.id}`}>
						<ProductItem {...product} />
					</Link>
				))}
			</div>
		</Container>
	);
}

export default Store;
