type ThemedImageProps = {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  className?: string;
};

export default function ThemedImage({ lightSrc, darkSrc, alt, className }: ThemedImageProps) {
  return (
    <>
      <div className="dark:hidden">
        <img src={lightSrc} alt={alt} className={className} />
      </div>
      <div className="hidden dark:block">
        <img src={darkSrc} alt={alt} className={className} />
      </div>
    </>
  );
}