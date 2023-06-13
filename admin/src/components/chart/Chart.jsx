import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
 // The Chart component receives props: title, data, dataKey, grid
  return (
    <div className="chart">
         {/* Render the chart title */}
      <h3 className="chartTitle">{title}</h3>
       {/* Create a responsive container for the chart */}
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
           {/* Render the x-axis */}
          <XAxis dataKey="name" stroke="#5550bd" />
          {/* Render the line */}
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          {/* Render tooltip */}
          <Tooltip />
            {/* Render cartesian grid if grid prop is true */}
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
