/** Large glowing heading used above each section. */
export function SectionTitle({
  children,
  align = "left",
  className = "",
}: {
  children: React.ReactNode;
  align?: "left" | "right";
  className?: string;
}) {
  return (
    <h3 className={`section-title ${align === "right" ? "text-right" : "text-left"} ${className}`}>
      {children}
    </h3>
  );
}
