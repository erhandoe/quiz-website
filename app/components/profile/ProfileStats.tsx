"use client";

type Stat = {
  label: string;
  value: string | number;
};

type ProfileStatsProps = {
  stats: Stat[];
};

export default function ProfileStats({ stats }: ProfileStatsProps) {
  return (
    <section className="mt-10 bg-[#111] p-6 rounded-lg border border-[#ff00ff] shadow-inner">
      <h2 className="text-xl font-semibold text-[#ff00ff] mb-4">Your Stats</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300">
        {stats.map((stat, idx) => (
          <li key={idx}>
            <span className="block font-bold text-[#00f2ff] text-lg">
              {stat.value}
            </span>
            {stat.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
