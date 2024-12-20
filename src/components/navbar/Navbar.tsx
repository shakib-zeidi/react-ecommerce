import { Link } from "react-router-dom";
import Container from "../container/Container";
import useShoppingCartContext from "../../hooks/usShoppingCartContext";

function Navbar() {
	const { cartQty } = useShoppingCartContext();

	return (
		<div className="h-14 border-b shadow flex items-center">
			<Container>
				<div className="flex justify-between">
					<ul className="flex">
						<li className="ml-4">
							<Link to="/">خانه</Link>
						</li>
						<li className="ml-4">
							<Link to="/store">فروشگاه</Link>
						</li>
					</ul>
					<div>
						<Link className="relative" to="/cart">
							<button>
								<svg
									width="30px"
									height="30px"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M20 10L18.5145 17.4276C18.3312 18.3439 18.2396 18.8021 18.0004 19.1448C17.7894 19.447 17.499 19.685 17.1613 19.8326C16.7783 20 16.3111 20 15.3766 20H8.62337C7.6889 20 7.22166 20 6.83869 19.8326C6.50097 19.685 6.2106 19.447 5.99964 19.1448C5.76041 18.8021 5.66878 18.3439 5.48551 17.4276L4 10M20 10H18M20 10H21M4 10H3M4 10H6M6 10H18M6 10L9 4M18 10L15 4M9 13V16M12 13V16M15 13V16"
										stroke="#000000"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</button>
							{cartQty !== 0 ? (
								<span className="absolute w-5 h-5 text-xs bg-red-600 flex justify-center items-center rounded-full text-white -top-4 -left-4">
									{cartQty !== 0 ? cartQty : ""}
								</span>
							) : (
								""
							)}
						</Link>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Navbar;
