import React from 'react';
import { Gauge } from '@ant-design/charts';

const DemoGauge = () => {
  const config = {
    percent: 0.6,
    range: { color: '#30BF78' },
    indicator: {
      pointer: { style: { stroke: '#D0D0D0' } },
      pin: { style: { stroke: '#D0D0D0' } },
    },
    axis: {
      label: {
        formatter: function formatter(v) {
          return Number(v) * 100;
        },
      },
      subTickLine: { count: 3 },
    },
    statistic: {
      content: {
        formatter: function formatter() {
          return '床位占用 30/50';
        },
        style: {
          color: 'rgba(0,0,0,0.65)',
          fontSize: 16,
        },
      },
    },
  };
  return <Gauge {...config} style={{ height: 200 }} />;
};

export default DemoGauge;
