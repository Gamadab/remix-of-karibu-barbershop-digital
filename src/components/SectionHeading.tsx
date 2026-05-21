import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "center", className }: Props) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h2>
      <div className={cn("gold-divider mt-5", align === "center" && "mx-auto")} />
      {description && (
        <p className="mt-5 text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}
