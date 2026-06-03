interface SectionProps {
  children: React.ReactNode;
  bg?: "white" | "navy" | "light-gray" | "ink";
  className?: string;
  id?: string;
}

const bgStyles = {
  white: "bg-white text-navy",
  navy: "bg-navy text-white",
  "light-gray": "bg-light-gray text-navy",
  ink: "bg-ink text-bone",
};

export default function Section({
  children,
  bg = "white",
  className = "",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-20 ${bgStyles[bg]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
