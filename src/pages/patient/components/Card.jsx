import React, { useState } from 'react';
import ProCard from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';

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
        title="患者透析卡片"
        extra="2021年7月1日"
        split={responsive ? 'horizontal' : 'vertical'}
        bordered
        headerBordered
      >
        <ProCard title="患者信息" colSpan="50%">
          <div>姓名：测试患者</div>
          <div>就诊卡号：00000001</div>
          <div>身份证号： xxxxxxxxx</div>
        </ProCard>
        <ProCard title="二维码">
          <div style={{ height: 360 }}>后端对接生成</div>
        </ProCard>
      </ProCard>
    </RcResizeObserver>
  );
};
