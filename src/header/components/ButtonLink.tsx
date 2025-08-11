type ColorMap = {
  gray: string;
  blue: string;
  white: string;
};

const colorMap: ColorMap = {
  gray: "bg-gray-200 hover:bg-gray-300",
  blue: "bg-blue-500 hover:bg-blue-600",
  white: "bg-white",
};

interface ButtonLinkProps {
  href?: string;
  color?: keyof typeof colorMap;
  className?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

function ButtonLink({
  href = "/",
  color = "white",
  className = "",
  children,
  onClick,
}: ButtonLinkProps) {
  const bgClasses = colorMap[color];

  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-sm inline-block py-2 px-4 rounded ${bgClasses} transition-colors ${className}`}
    >
      {children}
    </a>
  );
}

export default ButtonLink;
