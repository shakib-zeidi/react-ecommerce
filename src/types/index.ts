import React from "react";
import { ProductsType } from "../interfaces";

export type ButtonVariant =
	| "primary"
	| "secondary"
	| "danger"
	| "warning"
	| "success";

export type ButtonType = React.ComponentProps<"button"> & {
	variant?: ButtonVariant;
};

export type ProductItemType = ProductsType;
