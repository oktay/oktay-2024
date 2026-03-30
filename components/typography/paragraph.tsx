import { cn } from "@/lib/utils";

export default function Paragraph({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      {...props}
      className={cn(
        "text-[15px] font-light leading-7 md:leading-8 my-3",
        className,
      )}
    />
  );
}
