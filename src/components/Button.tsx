interface ButtonProps
	extends Omit<
		React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
		"color"
	> {
	variant?: "fill" | "outlined";
}

const Button = ({ className, variant = "fill", children, ...props }: ButtonProps) => {
	return (
		<button
			className={`rounded-md px-8 py-4 text-base font-semibold duration-300 ease-in-out hover:bg-primary/80
				${variant === "fill" && "bg-primary text-[--button-text-color--fill]"}
				${variant === "outlined" && "bg-[transparent] border border-primary text-[--title-color]"}
				`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
