import { cn } from "@/lib/utils";

export default function Dots({
  className,
  flip,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <div
      className={cn(
        `absolute grid grid-cols-5 gap-4 md:grid-cols-8 ${
          flip ? "rotate-180" : ""
        }`,
        className,
      )}
    >
      {Array.from({ length: 32 }).map((_, index) => (
        <div
          className={`blink size-1 rounded-full bg-white/5 ${
            index === 0 || index === 28
              ? "col-span-5 md:col-span-8"
              : "col-span-1"
          }`}
          key={index}
        />
      ))}
    </div>
  );
}
