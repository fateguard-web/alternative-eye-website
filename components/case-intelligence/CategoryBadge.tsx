interface CategoryBadgeProps {
  category: string;
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-[#ff0000] text-white rounded-full">
      {category}
    </span>
  );
}
