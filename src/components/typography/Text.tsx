import type { JSX } from "react";

type TextProps = {
  children: React.ReactNode,
  elementType?: keyof JSX.IntrinsicElements,
  className?: string
}

export default function Text({ children, elementType, className}: TextProps) {
  const Component = elementType || "p";
  return <Component className={`text-gray-900 dark:text-gray-300 ${className}`}>{children}</Component>;
}