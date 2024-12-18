import { ButtonType, ButtonVariant } from "../../types";

function Button({ children, variant, style, ...rest }: ButtonType) {
	return (
		<>
			<button {...rest} style={{ ...style, ...checkVariant(variant) }}>
				{children}
			</button>
		</>
	);
}

export default Button;

function checkVariant(variant: ButtonVariant) {
	switch (variant) {
		case "primary":
			return {
				backgroundColor: "blue",
				color: "white",
			};
		case "secondary":
			return {
				backgroundColor: "gray",
				color: "black",
			};
		case "danger":
			return {
				backgroundColor: "red",
				color: "white",
			};
		case "warning":
			return {
				backgroundColor: "yellow",
				color: "white",
			};
		case "success":
			return {
				backgroundColor: "green",
				color: "white",
			};
		default:
			return variant;
	}
}
