import Navbar from "../navbar/Navbar";
import { HomeLayoutInterface } from "../../interfaces";

function HomeLayout({ children }: HomeLayoutInterface) {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}

export default HomeLayout;
