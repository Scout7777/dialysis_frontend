import React from 'react';
import { Line } from '@ant-design/charts';

const Page = () => {
  const data = [
    { year: '2020-10', value: 0.66 },
    { year: '2020-11', value: 0.75 },
    { year: '2020-12', value: 0.78 },
    { year: '2021-1', value: 0.65 },
    { year: '2021-2', value: 0.66 },
    { year: '2021-3', value: 0.62 },
    { year: '2021-4', value: 0.65 },
    { year: '2021-5', value: 0.75 },
    { year: '2021-6', value: 0.66 },
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
  return <Line {...config} />;
};
export default Page;
