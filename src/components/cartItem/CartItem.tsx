import Button from "../button/Button";

function CartItem() {
	return (
		<div className="flex justify-between flex-row-reverse items-center mt-5 shadow p-4">
			<div>
				<img
					className="rounded w-48"
					src="/public/car.webp"
					alt="car-img"
				/>
			</div>
			<div>
				<h2 className="text-right">عنوان محصول</h2>
			</div>
			<div className="mr-4">
				<div className="mt-2">
					<Button className="rounded mr-2 p-2" variant="danger">
						حذف محصول
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
