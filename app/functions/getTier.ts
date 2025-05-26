export function getTier(points: number) {
  if (points >= 950) return { label: "Platinum", color: "platinum" };
  if (points >= 900) return { label: "Gold", color: "gold" };
  if (points >= 800) return { label: "Silver", color: "silver" };
  return { label: "Bronze", color: "bronze" };
}
