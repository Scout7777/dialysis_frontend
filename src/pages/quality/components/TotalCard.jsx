import React, { useState } from 'react';
import ProCard from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';
import ChartBasic from './ChartBasic';
import Gauge from './Gauge';

export default () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <ProCard
        title="数据总览"
        // extra={Date.now()}
        bordered
        headerBordered
        split={responsive ? 'horizontal' : 'vertical'}
      >
        <ProCard split="horizontal">
          <ProCard split="horizontal">
            <ProCard split={responsive ? 'horizontal' : 'vertical'}>
              <ProCard title="昨日全部透析">123</ProCard>
              <ProCard title="本月累计透析">1234</ProCard>
              <ProCard title="今年累计透析">11345</ProCard>
            </ProCard>
            <ProCard split="vertical">
              <ProCard title="进行中透析">12/56</ProCard>
              <ProCard title="今日已透析">134 个</ProCard>
            </ProCard>
          </ProCard>
          <ProCard title="透析人次趋势">
            <ChartBasic></ChartBasic>
          </ProCard>
        </ProCard>
        <ProCard title="床位占用情况">
          <Gauge />
        </ProCard>
      </ProCard>
    </RcResizeObserver>
  );
};
