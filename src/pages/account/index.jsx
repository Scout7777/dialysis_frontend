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
      hc: 100,
      sb: 100,
      yp: 100,
      total: 300,
      createdAt: Date.now() - Math.floor(Math.random() * 10000),
    });
  }

  const columns = [
    // {
    //   title: '头像',
    //   dataIndex: 'avatar',
    //   valueType: 'avatar',
    //   search: false,
    // },
    {
      title: '患者号',
      dataIndex: 'staffNo',
      sorter: true,
      render: (_, record, index) => <div>00000{index + 1}</div>,
    },
    {
      title: '透析编号',
      dataIndex: 'dialysisId',
      render: (_, record, index) => <div>10000{index + 1}</div>,
    },
    {
      title: '姓名',
      dataIndex: 'name',
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
      title: '耗材费用',
      dataIndex: 'hc',
    },
    {
      title: '药品费用',
      dataIndex: 'yp',
    },
    {
      title: '设备费用',
      dataIndex: 'sb',
    },
    {
      title: '其他费用',
      dataIndex: 'other',
    },
    {
      title: '合计',
      dataIndex: 'total',
    },
    {
      title: '透析时间',
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
        <a
          key="config"
          onClick={() => {
            handleCreateModalVisible(true);
          }}
        >
          查看详情
        </a>,
        <a
          key="config"
          onClick={() => {
            handleCreateModalVisible(true);
          }}
        >
          打印单据
        </a>,
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
            <PlusOutlined /> 手动补录
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
