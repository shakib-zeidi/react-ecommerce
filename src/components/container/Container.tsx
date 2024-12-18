import { ContainerInterface } from "../../interfaces";

function Container({ children, className }: ContainerInterface) {
	return (
		<>
			<div className={`container mx-auto ${className}`}>{children}</div>
		</>
	);
}

export default Container;
