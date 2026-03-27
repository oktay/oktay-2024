import { cn } from "@/lib/utils";

type ListProps = React.HTMLAttributes<HTMLUListElement | HTMLOListElement> & {
  ordered?: boolean;
};

export function List({ ordered, className, ...props }: ListProps) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag
      {...props}
      className={cn(
        ordered ? "list-decimal" : "list-disc",
        "text-[15px] font-light pl-6 space-y-1.5 my-3",
        className,
      )}
    />
  );
}

export function ListItem({
  className,
  ...props
}: React.LiHTMLAttributes<HTMLLIElement>) {
  return <li {...props} className={cn("leading-7 [&>p]:my-0", className)} />;
}
