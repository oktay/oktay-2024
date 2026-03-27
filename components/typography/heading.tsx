import { cn } from "@/lib/utils";

const styles: Record<number, string> = {
  1: "text-2xl font-semibold tracking-tight mt-10 mb-3",
  2: "text-xl font-semibold tracking-tight mt-8 mb-2",
  3: "text-lg font-medium tracking-tight mt-6 mb-2",
  4: "text-base font-medium mt-5 mb-1",
  5: "text-sm font-medium mt-4 mb-1",
  6: "text-sm font-medium mt-4 mb-1",
};

type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export default function Heading({ level, className, ...props }: Props) {
  const Tag = `h${level}` as const;
  return <Tag {...props} className={cn(styles[level], className)} />;
}
