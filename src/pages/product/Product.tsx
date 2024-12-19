import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import { ProductInterface } from "../../interfaces";

function Product() {
	const params = useParams<{ id: string }>();
	const [product, setProduct] = useState<ProductInterface>();

	useEffect(() => {
		getProduct(params.id as string).then((data) => {
			setProduct(data)
		});
	}, []);

	return (
		<div>
			<Container>
				<div className="h-auto shadow mt-5 grid grid-cols-12 rounded">
					<div className="col-span-7 order-1">
						<h1 className="p-4">عنوان محصول : <br /> <span className="text-gray-500">{product?.title}</span></h1>
						<hr />
						<div>
							<p className="p-4">قیمت : <br /> <span className="text-gray-500">{product?.price} $</span></p>
							<hr />
							<p className="p-4">
								توضیحات محصول : <br /> <span className="text-gray-500">{product?.description}</span>
							</p>
						</div>
					</div>
					<div className="col-span-5 shadow rounded-br flex flex-col justify-between">
						<img
							className="w-52 p-3 rounded-tr self-center"
							src={product?.image}
							alt="car-img"
						/>
						<Button
							className="rounded-br p-2 w-full"
							variant="primary"
						>
							Add To Cart
						</Button>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Product;
