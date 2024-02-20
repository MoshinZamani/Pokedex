export default function totalStat(stats: Stat[]): number {
  const sum = (a: number[]) => a.reduce((x, y) => x + y);
  const totalAmount = sum(stats.map((stat: Stat) => Number(stat.base_stat)));
  return totalAmount;
}
