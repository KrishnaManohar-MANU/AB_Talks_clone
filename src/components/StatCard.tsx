interface StatCardProps {
  label: string;
  value: string;
}

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="flex-1 min-w-0">
      <div className="font-display text-lg font-bold tabular-nums">{value}</div>
      <div className="mt-0.5 text-xs text-text-muted truncate">{label}</div>
    </div>
  );
}