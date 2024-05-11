import { cn } from "@/lib/utils";

interface SectionProps extends React.ComponentPropsWithoutRef<"section"> {
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "flex min-h-[60dvh] w-full flex-grow flex-col justify-center px-6 md:px-24",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
