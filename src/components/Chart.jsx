// import "./styles.css";
import { PieChart, Pie, Cell, Legend } from "recharts";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
const data = [
  { name: "Group A", value: 40 },
  { name: "Group B", value: 30 },
  { name: "Group C", value: 30 },
  { name: "Group D", value: 20 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function Chart({surveyId}) {
  const axiosPublic = useAxiosPublic()
  const { data: votes = [] } = useQuery({
    queryKey: ["voteamount"],
    queryFn: async () => {
      const result = await axiosPublic.get(`/voteamount/${surveyId}`);
      return result.data;
    },
  });
  console.log(votes)
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={120}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend></Legend>
    </PieChart>
  );
}
Chart.propTypes = {
  surveyId: PropTypes.string
};