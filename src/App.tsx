import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import HomeLayout from "./components/layout/HomeLayout";
import Product from "./pages/product/Product";

function App() {
	return (
		<HomeLayout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/store" element={<Store />} />
				<Route path="/product/:id" element={<Product />} />
			</Routes>
		</HomeLayout>
	);
}

export default App;
