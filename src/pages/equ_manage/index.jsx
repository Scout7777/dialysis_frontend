import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { updateUser } from '@/services/histsys/user';
import UpdateForm from './components/UserUpdateForm';
import CreateForm from './components/UserCreateForm';
// import MonitorList from './components/MonitorList';

export default () => {
  const [createModalVisible, handleCreateModalVisible] = useState();
  const [updateModalVisible, handleUpdateModalVisible] = useState();
  const [currentRow, setCurrentRow] = useState();
  const actionRef = useRef();

  const MockValue = [];

  const aa = ['a', 'b'];

  const role = ['a', 'b', 'c', 'd'];

  for (let i = 0; i < 20; i += 1) {
    MockValue.push({
      id: `20000${i + 1}`,
      name: `设备${i + 1}`,
      qType: aa[Math.floor(Math.random() * aa.length)],
      bed: `床位${i + 1}`,
      type: role[Math.floor(Math.random() * role.length)],
      createdAt: Date.now() - Math.floor(Math.random() * 10000),
    });
  }

  const last = [
    {
      id: '91',
      name: '设备91',
      qType: 'a',
      bed: '床位1',
      stock: '1000',
      type: 'a',
      createdAt: Date.now() - Math.floor(Math.random() * 10000),
    },
    {
      id: '92',
      name: '设备92',
      qType: 'b',
      bed: '床位2',
      stock: '1000',
      type: 'b',
      createdAt: Date.now() - Math.floor(Math.random() * 10000),
    },
    {
      id: '93',
      name: '设备93',
      qType: 'b',
      bed: '床位3',
      stock: '1000',
      type: 'c',
      createdAt: Date.now() - Math.floor(Math.random() * 10000),
    },
    {
      id: '94',
      name: '设备94',
      qType: 'a',
      stock: '1000',
      type: 'd',
      createdAt: Date.now() - Math.floor(Math.random() * 10000),
    },
    {
      id: '95',
      name: '设备95',
      qType: 'a',
      stock: '1000',
      type: 'd',
      createdAt: Date.now() - Math.floor(Math.random() * 10000),
    },
    {
      id: '96',
      name: '设备96',
      qType: 'a',
      stock: '1000',
      type: 'd',
      createdAt: Date.now() - Math.floor(Math.random() * 10000),
    },
    {
      id: '97',
      name: '设备97',
      qType: 'a',
      stock: '1000',
      type: 'd',
      createdAt: Date.now() - Math.floor(Math.random() * 10000),
    },
  ];

  MockValue.concat(last);

  const columns = [
    // {
    //   title: '头像',
    //   dataIndex: 'avatar',
    //   valueType: 'avatar',
    //   search: false,
    // },
    {
      title: '设备编号',
      dataIndex: 'id',
      sorter: true,
    },
    {
      title: '设备名称',
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: '归属床位',
      dataIndex: 'bed',
      sorter: true,
    },
    {
      title: '设备类别',
      dataIndex: 'qType',
      valueEnum: {
        a: {
          text: '类别1',
          color: 'green',
        },
        b: {
          text: '类别2',
          color: 'blue',
        },
        c: {
          text: '类别3',
          color: 'red',
        },
        d: {
          text: '类别4',
          color: 'pink',
        },
      },
    },
    {
      title: '设备状态',
      dataIndex: 'type',
      valueEnum: {
        a: {
          text: '正常',
          color: 'green',
        },
        b: {
          text: '检修',
          color: 'blue',
        },
        c: {
          text: '故障',
          color: 'red',
        },
        d: {
          text: '停用',
          color: 'gray',
        },
      },
    },
    {
      title: '最近检修时间',
      sorter: true,
      search: false,
      dataIndex: 'createdAt',
      valueType: 'dateTime',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: () => [
        // render: (_, record) => [
        <a>查看详情</a>,
        <a>检修</a>,
        <a>停用</a>,
      ],
    },
  ];
  return (
    <PageContainer>
      <ProTable
        // headerTitle="患者列表"
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleCreateModalVisible(true);
            }}
          >
            <PlusOutlined /> 新增设备
          </Button>,
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
    </PageContainer>
  );
};
