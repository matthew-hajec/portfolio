import type { JSX } from "react";

type TextProps = {
  children: React.ReactNode,
  elementType?: keyof JSX.IntrinsicElements,
  className?: string
}

export default function Text({ children, elementType, className}: TextProps) {
  const Component = elementType || "p";
  return <Component className={`font-['Open_Sans'] text-gray-600 dark:text-gray-400 ${className}`}>{children}</Component>;
}