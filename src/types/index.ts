import React from "react";
import { ProductInterface } from "../interfaces";

export type ButtonVariant =
	| "primary"
	| "secondary"
	| "danger"
	| "warning"
	| "success";

export type ButtonType = React.ComponentProps<"button"> & {
	variant?: ButtonVariant;
};

export type ProductItemType = ProductInterface;
