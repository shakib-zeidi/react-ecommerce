import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import HomeLayout from "./components/layout/HomeLayout";

function App() {
	return (
		<HomeLayout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/store" element={<Store />} />
			</Routes>
		</HomeLayout>
	);
}

export default App;
