import React from "react";

export type ButtonVariant = "primary" | "secondary" | "danger" | "warning" | "success";

export type ButtonType = React.ComponentProps<"button"> & {
	variant?: ButtonVariant;
};
