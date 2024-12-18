import { ButtonType } from "../../types";

function Button({ children, ...rest }: ButtonType) {
	return (
		<>
			<button {...rest}>{children}</button>
		</>
	);
}

export default Button;
