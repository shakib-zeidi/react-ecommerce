import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import HomeLayout from "./components/layout/HomeLayout";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import { ShoppingCartProvider } from "./context/shoppingCartContext";

function App() {
	return (
		<ShoppingCartProvider>
			<HomeLayout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/store" element={<Store />} />
					<Route path="/product/:id" element={<Product />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</HomeLayout>
		</ShoppingCartProvider>
	);
}

export default App;
