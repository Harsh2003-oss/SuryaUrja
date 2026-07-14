type BadgeProps = {
  text: string;
};

export default function Badge({ text }: BadgeProps) {
  return (
    <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-green-700">
      {text}
    </span>
  );
}