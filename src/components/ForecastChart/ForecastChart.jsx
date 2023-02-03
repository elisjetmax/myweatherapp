import React from "react";
import PropTypes from "prop-types";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ForecastChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart
        title="Forecast"
        data={data}
        margin={{ top: 5, right: 30, left: -20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.6} />
        <Line type={"monotone"} dataKey="min" stroke={"#0000FF"} />
        <Line type={"monotone"} dataKey="max" stroke={"#FF0000"} />
        <XAxis dataKey="dayHour" />
        <YAxis />
        <Tooltip />
        <Legend height={20} />
      </LineChart>
    </ResponsiveContainer>
  );
};

ForecastChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      dayHour: PropTypes.string.isRequired,
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ForecastChart;
