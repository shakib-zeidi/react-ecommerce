import { ContainerInterface } from "../../interfaces";

function Container({ children }: ContainerInterface) {
	return (
		<>
			<div className="container mx-auto">{children}</div>
		</>
	);
}

export default Container;
