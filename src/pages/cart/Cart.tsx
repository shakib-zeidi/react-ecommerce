import Button from "../../components/button/Button";
import CartItem from "../../components/cartItem/CartItem";
import Container from "../../components/container/Container";
import useShoppingCartContext from "../../hooks/usShoppingCartContext";

function Cart() {
	const { cartItems } = useShoppingCartContext();

	return (
		<div>
			<Container>
				<div>
					{cartItems.map((item) => (
						<CartItem {...item} />
					))}
				</div>

				<div className="bg-gray-200 rounded p-6 mt-4 mb-4 flex justify-between items-center">
					<div>
						<p>قیمت کل : 20,0000 تومان</p>
						<p>تخفیف شما : 2,0000 تومان</p>
						<p>قیمت نهایی : 18,000 تومان</p>
					</div>
					<div>
						<Button className="rounded px-3 py-1" variant="success">
							ثبت سفارش
						</Button>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Cart;
