type ChartProps = { title: string; data: { label: string; value: number }[]; unit?: string; caption?: string };

export default function Chart({ title, data, unit = "", caption }: ChartProps) {
    if (!data.length || data.some((point) => !Number.isFinite(point.value) || point.value < 0)) throw new Error("Chart data must contain finite non-negative values");
    const max = Math.max(...data.map((point) => point.value), 1);
    return <figure className="article-chart" aria-label={title}><figcaption>{title}</figcaption><div className="chart-bars">{data.map((point, i) => <div key={`${point.label}-${i}`} className="chart-row"><span>{point.label}</span><div><div className="chart-bar" style={{ width: `${point.value / max * 100}%` }}/></div><span>{point.value}{unit}</span></div>)}</div>{caption && <p className="chart-caption">{caption}</p>}<details><summary>View data table</summary><table><thead><tr><th>Label</th><th>Value{unit && ` (${unit})`}</th></tr></thead><tbody>{data.map((point,i)=><tr key={i}><td>{point.label}</td><td>{point.value}</td></tr>)}</tbody></table></details></figure>;
}
