import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  background?: "default" | "muted" | "dark";
}

export function Section({ id, className, children, background = "default" }: SectionProps) {
  const bgColors = {
    default: "bg-background",
    muted: "bg-secondary/30",
    dark: "bg-foreground text-background",
  };

  return (
    <section 
      id={id} 
      className={cn(
        "py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden",
        bgColors[background],
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, center = true, light = false }: { title: string, subtitle?: string, center?: boolean, light?: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("mb-16", center && "text-center")}
    >
      <h2 className={cn(
        "text-3xl md:text-5xl font-bold mb-4",
        light ? "text-background" : "text-foreground"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-lg md:text-xl max-w-2xl mx-auto",
          light ? "text-background/80" : "text-muted-foreground"
        )}>
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1 w-24 bg-primary mt-6",
        center && "mx-auto",
        light && "bg-white"
      )} />
    </motion.div>
  );
}
