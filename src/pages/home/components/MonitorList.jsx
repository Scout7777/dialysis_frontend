import React from 'react';
import { Progress, Tag } from 'antd';
import ProList from '@ant-design/pro-list';

const montorList = () => {
  const data = ['临1床', '1床', '2床', '3床', '4床', '5床', '6床', '7床'].map((item) => ({
    title: item,
    subTitle: <Tag color="#5BD8A6">正常</Tag>,
    actions: [<a>操作</a>],
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
    content: (
      <div
        style={{
          flex: 1,
        }}
      >
        <div
          style={{
            width: 200,
          }}
        >
          <div>进行中</div>
          <Progress percent={45} />
        </div>
      </div>
    ),
  }));

  return (
    <ProList
      grid={{ gutter: 16, column: 2 }}
      metas={{
        title: {},
        subTitle: {},
        type: {},
        avatar: {},
        content: {},
        actions: {},
      }}
      dataSource={data}
    />
  );
};

export default montorList;
