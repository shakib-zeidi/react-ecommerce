import Button from "../../components/button/Button";
import CartItem from "../../components/cartItem/CartItem";
import Container from "../../components/container/Container";

function Cart() {
	return (
		<div>
			<Container>
				<div className="">
					<CartItem />
					<CartItem />
					<CartItem />
					<CartItem />
					<CartItem />
				</div>

				<div className="bg-gray-200 rounded p-6 mt-4 mb-4 flex flex-row-reverse justify-between items-center">
					<div>
						<p className="text-right">قیمت کل : 20,0000 تومان</p>
						<p className="text-right">تخفیف شما : 2,0000 تومان</p>
						<p className="text-right">قیمت نهایی : 18,000 تومان</p>
					</div>
					<div>
						<Button className="rounded p-2" variant="success">
							ثبت سفارش
						</Button>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Cart;