import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const LineCharts = ({ data }) => {

    return (
        <div>
            <LineChart width={600} height={300} data={data}
            >
                <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend verticalAlign="bottom" height={36}></Legend>
                <Line name='Month Wise Sell' type="monotone" dataKey="sell" stroke="#8884d8" />
            </LineChart>
        </div>
    );
};

export default LineCharts;