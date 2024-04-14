import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const BarChartComponent = ({data}) => {
  return <ResponsiveContainer width='100%' height={300}>
    <BarChart data={data} margin={{top: 50}}>
        <CartesianGrid strokeDasharray='7 7'/>
        <XAxis dataKey='date'/>
        <YAxis allowDecimals={false}/>
        <Tooltip/>
        <Bar dataKey='count' fill='#2cb1bc' barSize={100}/>
    </BarChart>
  </ResponsiveContainer>;
};
export default BarChartComponent;
