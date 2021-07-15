import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Space, Tag } from 'antd';
// import { PlusOutlined } from '@ant-design/icons';
import { updateUser } from '@/services/histsys/user';
import UpdateForm from './components/UserUpdateForm';
import CreateForm from './components/UserCreateForm';
import MonitorList from './components/MonitorList';
import TotalCard from './components/TotalCard';

export default () => {
  const [createModalVisible, handleCreateModalVisible] = useState();
  const [updateModalVisible, handleUpdateModalVisible] = useState();
  const [currentRow, setCurrentRow] = useState();
  const actionRef = useRef();

  const MockValue = [];

  const aa = ['a', 'b'];

  for (let i = 0; i < 20; i += 1) {
    MockValue.push({
      time: 'a',
      name: '测试患者',
      problem: '心梗',
      notice: '轮椅',
      dashboard: '高血压',
      way: aa[Math.floor(Math.random() * aa.length)],
      bp: '90/150',
      weight_before: '70',
      weight_later: '68',
      water: '2.0',
      water_now: '1.8',
    });
  }

  const columns = [
    {
      title: '床位',
      dataIndex: 'position',
      render: (_, record, index) => <div>{index + 1}床</div>,
    },
    {
      title: '班次',
      dataIndex: 'time',
      valueEnum: {
        a: {
          text: '上午',
          color: 'blue',
        },
        b: {
          text: '下午',
          color: 'red',
        },
        c: {
          text: '晚间',
          color: 'blue',
        },
      },
    },
    {
      title: '患者号',
      dataIndex: 'staffNo',
      sorter: true,
      render: (_, record, index) => <div>00000{index + 1}</div>,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: '症状评估',
      dataIndex: 'problem',
      search: false,
      render: () => (
        <Space>
          {/* {record.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))} */}
          <Tag>脑梗</Tag>
          <Tag>糖尿病</Tag>
        </Space>
      ),
    },
    {
      title: '评估提醒',
      dataIndex: 'way',
      search: false,
      render: () => (
        <Space>
          {/* {record.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))} */}
          <Tag color={'orange'}>轮椅</Tag>
        </Space>
      ),
    },
    {
      title: '监控警告',
      dataIndex: 'dashboard',
      search: false,
      render: () => (
        <Space>
          {/* {record.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))} */}
          <Tag color={'red'}>高血压</Tag>
        </Space>
      ),
    },
    {
      title: '临时医嘱',
      dataIndex: 'advice',
      sorter: true,
    },
    {
      title: '透析方式',
      dataIndex: 'way',
      valueEnum: {
        a: {
          text: 'HD',
          color: 'blue',
        },
        b: {
          text: 'HDF',
          color: 'red',
        },
      },
    },
    {
      title: '透前血压',
      dataIndex: 'bp',
    },
    {
      title: '透前体重',
      dataIndex: 'weight_before',
    },
    {
      title: '透后体重',
      dataIndex: 'weight_later',
    },
    {
      title: '设定脱水量',
      dataIndex: 'water',
    },
    {
      title: '器显脱水量',
      dataIndex: 'water_now',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: () => [
        <a
          key="config"
          onClick={() => {
            handleCreateModalVisible(true);
          }}
        >
          查看详情/操作
        </a>,
        // <a key="delete" onClick={() => {}}>
        //   查看详情/操作
        // </a>,
      ],
    },
  ];
  return (
    <PageContainer>
      <TotalCard></TotalCard>
      <ProTable
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          // <Button
          //   type="primary"
          //   key="primary"
          //   onClick={() => {
          //     handleCreateModalVisible(true);
          //   }}
          // >
          //   <PlusOutlined /> 新建
          // </Button>,
        ]}
        // request={searchUser}
        dataSource={MockValue}
        columns={columns}
        // rowSelection={{
        //   onChange: (_, selectedRows) => {
        //     setSelectedRows(selectedRows);
        //   },
        // }}
      />
      <CreateForm
        onCancel={() => {
          handleCreateModalVisible(false);
        }}
        visible={createModalVisible}
      />
      <UpdateForm
        onSubmit={async (value) => {
          const { id } = currentRow || {};
          const success = await updateUser(id, value);
          if (success) {
            handleUpdateModalVisible(false);
            setCurrentRow(undefined);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          handleUpdateModalVisible(false);
          setCurrentRow(undefined);
        }}
        visible={updateModalVisible}
        values={currentRow || {}}
      />
      <MonitorList />
    </PageContainer>
  );
};
