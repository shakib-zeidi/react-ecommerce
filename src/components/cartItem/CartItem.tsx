import Button from "../button/Button";

function CartItem() {
	return (
		<div className="flex justify-between flex-row-reverse mt-4 border-b pb-2 ">
			<img
				className="rounded w-28"
				src="/public/car.webp"
				alt="car-img"
			/>
			<div className="mr-4">
				<h2 className="text-right">عنوان محصول</h2>
				<div className="mt-2">
					<Button className="rounded mr-2 p-2" variant="danger">
						Remove
					</Button>
					<Button className="rounded p-2" variant="primary">
						+
					</Button>
					<span className="mx-2">{2}</span>
					<Button className="rounded p-2" variant="primary">
						-
					</Button>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
