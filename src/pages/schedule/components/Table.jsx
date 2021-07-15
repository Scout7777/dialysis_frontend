import React, { useEffect, useState } from 'react';
// import { BadgeProps } from 'antd';
import { Button, Space, Tag, Popover } from 'antd';
// import { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import ProCard from '@ant-design/pro-card';
import { FilterOutlined } from '@ant-design/icons';
import { QueryFilter, ProFormSelect, ProFormDatePicker, ProFormText } from '@ant-design/pro-form';
// @ts-ignore
import styles from './split.less';

// type TableListItem = {
//   createdAtRange?: number[];
//   createdAt: number;
//   code: string;
// };

// type DetailListProps = {
//   ip: string;
// };
const PopTag = (props) => {
  const [visible, setVisible] = useState(false);

  const { lable, color } = props;

  function hide() {
    setVisible(false);
  }

  function handleVisibleChange(value) {
    setVisible({ value });
  }

  return (
    <Popover
      content={
        <Space>
          <a onClick={hide}>请假</a>
          <a onClick={hide}>移除</a>
          <a onClick={hide}>其他操作</a>
          <a onClick={hide}>取消</a>
        </Space>
      }
      title="操作"
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
    >
      <Tag style={{ margin: 6 }} color={color}>
        {lable}
      </Tag>
    </Popover>
  );
};

const DetailList = (props) => {
  const { ip } = props;
  const [tableListDataSource, setTableListDataSource] = useState([]);

  const columns = [
    {
      title: '班次',
      dataIndex: 'banci',
    },
    {
      title: '星期一',
      width: 150,
      render: () => (
        <div style={{ flexWrap: 'wrap', display: 'inline-flex' }}>
          <PopTag lable={'小红'}></PopTag>
          <PopTag lable={'小霞'}></PopTag>
          <PopTag lable={'小明'}></PopTag>
          <PopTag lable={'小张'}></PopTag>
          <PopTag lable={'小李'}></PopTag>
          <PopTag lable={'小王'}></PopTag>
        </div>
      ),
    },
    {
      title: '星期二',
      width: 150,
      render: () => (
        <div style={{ flexWrap: 'wrap', display: 'inline-flex' }}>
          <PopTag lable={'小红'}></PopTag>
          <PopTag lable={'小霞'}></PopTag>
          <PopTag lable={'小明'}></PopTag>
          <PopTag lable={'小张'}></PopTag>
          <PopTag lable={'小李'}></PopTag>
          <PopTag lable={'小王'}></PopTag>
        </div>
      ),
    },
    {
      title: '星期三',
      width: 150,
      render: () => (
        <div style={{ flexWrap: 'wrap', display: 'inline-flex' }}>
          <PopTag lable={'小红'}></PopTag>
          <PopTag lable={'小霞'}></PopTag>
          <PopTag lable={'小明'}></PopTag>
          <PopTag lable={'小张'}></PopTag>
          <PopTag lable={'小李'}></PopTag>
          <PopTag lable={'小王'}></PopTag>
        </div>
      ),
    },
    {
      title: '星期四',
      width: 150,
      render: () => (
        <div style={{ flexWrap: 'wrap', display: 'inline-flex' }}>
          <PopTag lable={'小红'}></PopTag>
          <PopTag lable={'小霞'}></PopTag>
          <PopTag lable={'小明'}></PopTag>
          <PopTag lable={'小张'}></PopTag>
          <PopTag lable={'小李'}></PopTag>
          <PopTag lable={'小王'}></PopTag>
        </div>
      ),
    },
    {
      title: '星期五',
      width: 150,
      render: () => (
        <div style={{ flexWrap: 'wrap', display: 'inline-flex' }}>
          <PopTag lable={'小红'}></PopTag>
          <PopTag lable={'小霞'}></PopTag>
          <PopTag lable={'小明'}></PopTag>
          <PopTag lable={'小张'}></PopTag>
          <PopTag lable={'小李'}></PopTag>
          <PopTag lable={'小王'}></PopTag>
        </div>
      ),
    },
    {
      title: '星期六',
      width: 150,
      render: () => (
        <div style={{ flexWrap: 'wrap', display: 'inline-flex' }}>
          <PopTag lable={'小红'}></PopTag>
          <PopTag lable={'小霞'}></PopTag>
          <PopTag lable={'小明'}></PopTag>
          <PopTag lable={'小张'}></PopTag>
          <PopTag lable={'小李'}></PopTag>
          <PopTag lable={'小王'}></PopTag>
        </div>
      ),
    },
    {
      title: '星期日',
      width: 150,
      render: () => (
        <div style={{ flexWrap: 'wrap', display: 'inline-flex' }}>
          <PopTag lable={'小红'}></PopTag>
          <PopTag lable={'小霞'}></PopTag>
          <PopTag lable={'小明'}></PopTag>
          <PopTag lable={'小张'}></PopTag>
          <PopTag lable={'小李'}></PopTag>
          <PopTag lable={'小王'}></PopTag>
        </div>
      ),
    },
    // {
    //   title: '临时预留区域',
    //   width: 150,
    //   render: () => (
    //     <div style={{flexWrap: 'wrap', display: 'inline-flex'}}>
    //     </div>
    //   ),
    // },
    {
      title: '操作',
      key: 'option',
      //   width: 80,
      valueType: 'option',
      render: () => [<a key="a">临时调整</a>, <a key="a">长期调整</a>],
    },
  ];

  useEffect(() => {
    const source = [{ banci: '上午班' }, { banci: '下午班' }, { banci: '晚上班' }];
    setTableListDataSource(source);
  }, [ip]);

  return (
    <div>
      <ProTable
        headerTitle="执行排班"
        columns={columns}
        dataSource={tableListDataSource}
        pagination={false}
        rowKey="key"
        search={false}
        toolbar={{
          actions: [
            <Button key="list" type="primary">
              新增排班
            </Button>,
          ],
        }}
      />
    </div>
  );
};

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
    ip: `护士${i + 1}`,
    cpu: '6/7',
    mem: 20,
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    disk: 30,
  });
}

// type IPListProps = {
//   ip: string;
//   onChange: (id: string) => void;
// };

const Filter = () => {
  return (
    <QueryFilter
      initialValues={{
        sex: 'man',
      }}
      bordered
      collapseLabel={<FilterOutlined />}
      onFinish={async (values) => console.log(values)}
    >
      <ProFormSelect
        name="week"
        valueEnum={{
          this: '本周',
          last: '上周',
          next: '下周',
        }}
        initialValue={'this'}
      />
      <ProFormDatePicker name="time" placeholder="指定日期" />
      <ProFormText name="name" placeholder="指定医护人员" />
    </QueryFilter>
  );
};

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
      title: '本周执行',
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
    <ProCard split="vertical">
      <ProCard colSpan="260px" ghost>
        <IPList onChange={(cIp) => setIp(cIp)} ip={ip} />
      </ProCard>
      <ProCard>
        <Filter />
        <DetailList />
      </ProCard>
    </ProCard>
  );
};

export default Table;
