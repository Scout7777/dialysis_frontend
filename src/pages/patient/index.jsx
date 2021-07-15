import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Button, Space, Tag } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
// import { searchUser, updateUser } from '@/services/histsys/user';
// import { searchUser } from '@/services/histsys/user';
// import UpdateForm from './components/UserUpdateForm';
import CreateForm from './components/UserCreateForm';

const ProcessMap = {
  // close: 'normal',
  active: 'active',
  // online: 'success',
  disable: 'exception',
};

export default () => {
  const [createModalVisible, handleCreateModalVisible] = useState();
  const [updateModalVisible, handleUpdateModalVisible] = useState();
  // const [currentRow, setCurrentRow] = useState();
  const actionRef = useRef();

  const MockValue = [];
  const aa = ['a', 'b'];
  const role = ['a', 'b', 'c', 'd', 'e'];
  //  let result= Math.floor(Math.random() * aa.length);

  for (let i = 0; i < 20; i += 1) {
    MockValue.push({
      time: 'a',
      name: '测试患者',
      problem: '心梗',
      notice: '轮椅',
      dashboard: '高血压',
      way: aa[Math.floor(Math.random() * aa.length)],
      role: role[Math.floor(Math.random() * role.length)],
      status: 'progress',
      bp: '90/150',
      weight_before: '70',
      weight_later: '68',
      water: '2.0',
      water_now: '1.8',
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
      title: '姓名',
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: '排床',
      dataIndex: 'labels',
      search: false,
      render: () => (
        <Space>
          {/* {record.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))} */}
          <Tag>一/晚</Tag>
          <Tag>三/晚</Tag>
          <Tag>五/晚</Tag>
        </Space>
      ),
    },
    {
      title: '患者类型',
      dataIndex: 'role',
      valueEnum: {
        a: {
          text: '丙肝',
          color: 'green',
        },
        b: {
          text: 'HIV',
          color: 'blue',
        },
        c: {
          text: '乙肝',
          color: 'red',
        },
        d: {
          text: '梅毒',
          color: 'black',
        },
        e: {
          text: '正常',
        },
      },
    },
    {
      title: '检验时效',
      dataIndex: 'status',
      hideInForm: false,
      valueType: (item) => ({
        type: 'progress',
        status: ProcessMap[item.status],
      }),
      // valueEnum: {
      //   active: {
      //     text: '检验时效中',
      //     status: 'Success',
      //   },
      //   disable: {
      //     text: '已过期，请及时检验',
      //     status: 'default',
      //   },
      // },
    },
    {
      title: '血管通路',
      hideInForm: false,
      render: () => (
        <Space>
          {/* {record.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))} */}
          <Tag>AVF</Tag>
        </Space>
      ),
    },
    {
      title: '症状评估',
    },
    {
      title: '用药情况',
    },
    {
      title: '过敏史',
      render: () => (
        <Space>
          {/* {record.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))} */}
          <Tag>药物</Tag>
        </Space>
      ),
    },
    {
      title: '创建时间',
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
        <a
          key="config"
          onClick={() => {
            handleUpdateModalVisible(true);
          }}
        >
          更新
        </a>,
        <a key="delete" onClick={() => {}}>
          查看
        </a>,
      ],
    },
  ];
  return (
    <PageContainer>
      <ProTable
        headerTitle="患者列表"
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
            <PlusOutlined /> 新建
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
      {/* <UpdateForm
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
      /> */}
      <CreateForm
        onCancel={() => {
          handleUpdateModalVisible(false);
        }}
        visible={updateModalVisible}
      />
    </PageContainer>
  );
};
