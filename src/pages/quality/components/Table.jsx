import React, { useState } from 'react';
// import { BadgeProps } from 'antd';
// import { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import ProCard from '@ant-design/pro-card';
// @ts-ignore
import styles from './split.less';
import UserBasic from './UserBasic';

// type TableListItem = {
//   createdAtRange?: number[];
//   createdAt: number;
//   code: string;
// };

// type DetailListProps = {
//   ip: string;
// };

// type statusType = BadgeProps['status'];

const valueEnum = ['success', 'error', 'processing', 'default'];

// export type IpListItem = {
//   ip?: string;
//   cpu?: number | string;
//   mem?: number | string;
//   disk?: number | string;
//   status: statusType;
// };

const ipListDataSource = [];

for (let i = 0; i < 20; i += 1) {
  ipListDataSource.push({
    ip: `患者${i + 1}`,
    cpu: '2/3',
    mem: 20,
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    disk: 30,
  });
}

// type IPListProps = {
//   ip: string;
//   onChange: (id: string) => void;
// };

const IPList = (props) => {
  const { onChange, ip } = props;

  const columns = [
    {
      title: '姓名',
      key: 'ip',
      dataIndex: 'ip',
      // render: (_, item) => {
      //   return <Badge status={item.status} text={item.ip} />;
      // },
    },
    {
      title: '本周透析',
      key: 'cpu',
      dataIndex: 'cpu',
      // valueType: {
      //   type: 'percent',
      //   precision: 0,
      // },
    },
  ];
  return (
    <ProTable
      scroll={{ y: 750 }}
      columns={columns}
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: ipListDataSource,
          success: true,
        });
      }}
      rowKey="ip"
      rowClassName={(record) => {
        return record.ip === ip ? styles['split-row-select-active'] : '';
      }}
      toolbar={{
        search: {
          onSearch: (value) => {
            alert(value);
          },
        },
        // actions: [
        //   <Button key="list" type="primary">
        //     新建床位
        //   </Button>,
        // ],
      }}
      options={false}
      pagination={false}
      search={false}
      onRow={(record) => {
        return {
          onClick: () => {
            if (record.ip) {
              onChange(record.ip);
            }
          },
        };
      }}
    />
  );
};

const Table = () => {
  const [ip, setIp] = useState('1床');
  return (
    <ProCard style={{ marginTop: 12 }} title="患者数据统计" split="vertical">
      <ProCard colSpan="260px" ghost>
        <IPList onChange={(cIp) => setIp(cIp)} ip={ip} />
      </ProCard>
      <ProCard title="透后Kt/V变化情况图">
        <UserBasic />
      </ProCard>
    </ProCard>
  );
};

export default Table;
