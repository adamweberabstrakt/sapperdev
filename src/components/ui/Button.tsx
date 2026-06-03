import Link from "next/link";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "acid"
  | "outline-acid";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-cyan text-navy font-semibold hover:bg-cyan/90",
  secondary: "bg-purple text-white font-semibold hover:bg-purple/90",
  outline:
    "border-2 border-cyan text-cyan font-semibold hover:bg-cyan hover:text-navy",
  // Brand v2
  acid: "bg-acid text-ink font-bold uppercase tracking-wider hover:bg-acid/90",
  "outline-acid":
    "border-2 border-acid text-acid font-bold uppercase tracking-wider hover:bg-acid hover:text-ink",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-md text-sm transition-all duration-200";
  const styles = `${baseStyles} ${variantStyles[variant]} ${className} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  }`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles} disabled={disabled}>
      {children}
    </button>
  );
}
