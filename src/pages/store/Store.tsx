import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import ProductItem from "../../components/productItem/ProductItem";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";

function Store() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts().then((result) => {
			setProducts(result);
		});
	}, []);

	return (
		<Container>
			<h1 className="mt-5">جدیدترین محصولات</h1>
			<div className="grid grid-cols-4 gap-4 mt-4">
				{products.map((product) => (
					<Link to={`/product/${1}`}>
						<ProductItem />
					</Link>
				))}
			</div>
		</Container>
	);
}

export default Store;
