import React from 'react';
import { Line } from '@ant-design/charts';

const Page = () => {
  const data = [
    { year: '2020-10', value: 2131 },
    { year: '2020-11', value: 3224 },
    { year: '2020-12', value: 3123 },
    { year: '2021-1', value: 2311 },
    { year: '2021-2', value: 3222 },
    { year: '2021-3', value: 3123 },
    { year: '2021-4', value: 3232 },
    { year: '2021-5', value: 3432 },
    { year: '2021-6', value: 3100 },
  ];

  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  return <Line {...config} style={{ height: 150 }} />;
};
export default Page;
