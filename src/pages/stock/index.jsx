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

  const MockData = [
    {
      name: '耗材1',
      stock: '1000',
      type: 'a',
      createdAt: Date.now() - Math.floor(Math.random() * 10000),
    },
    {
      name: '耗材2',
      stock: '1000',
      type: 'b',
      createdAt: Date.now() - Math.floor(Math.random() * 10000),
    },
    {
      name: '耗材3',
      stock: '1000',
      type: 'b',
      createdAt: Date.now() - Math.floor(Math.random() * 10000),
    },
    {
      name: '耗材4',
      stock: '1000',
      type: 'c',
      createdAt: Date.now() - Math.floor(Math.random() * 10000),
    },
    {
      name: '耗材5',
      stock: '1000',
      type: 'd',
      createdAt: Date.now() - Math.floor(Math.random() * 10000),
    },
  ];

  const columns = [
    // {
    //   title: '头像',
    //   dataIndex: 'avatar',
    //   valueType: 'avatar',
    //   search: false,
    // },
    {
      title: '耗材名称',
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: '库存数量',
      dataIndex: 'stock',
    },
    {
      title: '耗材类别',
      dataIndex: 'type',
      valueEnum: {
        a: {
          text: '类别1',
          color: 'blue',
        },
        b: {
          text: '类别2',
          color: 'green',
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
      title: '最近入库时间',
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
        <a>入库</a>,
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
            <PlusOutlined /> 新品入库
          </Button>,
        ]}
        // request={searchUser}
        dataSource={MockData}
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
