import React, { useState } from 'react';
// import { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import ProField from '@ant-design/pro-field';
// import { ProFormRadio } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const value = {
  yang: {
    text: '+',
    status: 'Success',
  },
  yin: {
    text: '-',
    status: 'default',
  },
  none: {
    text: '未检',
    status: 'default',
  },
};

const defaultData = [
  {
    id: 624748504,
    title: '药物过敏',
    decs: '请勿使用',
    state: 'open',
    created_at: '2020-05-26T09:42:56Z',
    update_at: '2020-05-26T09:42:56Z',
  },
  {
    id: 624691229,
    title: '透析器过敏',
    decs: '请勿使用',
    state: 'closed',
    created_at: '2020-05-26T08:19:22Z',
    update_at: '2020-05-26T08:19:22Z',
  },
];

export default () => {
  const [editableKeys, setEditableRowKeys] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [position] = useState('bottom');

  const columns = [
    // {
    //   title: '过敏源',
    //   dataIndex: 'title',
    //   formItemProps: (form, { rowIndex }) => {
    //     return {
    //       rules: rowIndex > 2 ? [{ required: true, message: '此项为必填项' }] : [],
    //     };
    //   },
    //   // 第二行不允许编辑
    //   // editable: (text, record, index) => {
    //   //   return index !== 0;
    //   // },
    //   width: '30%',
    // },
    { title: '检验日期', dataIndex: 'date', valueType: 'date' },
    {
      title: '乙肝',
      dataIndex: '乙肝',
      children: [
        { title: '乙肝', dataIndex: 'HBV', valueType: 'radio', valueEnum: value },
        { title: 'HBsAg', dataIndex: 'HBSAG', valueType: 'radio', valueEnum: value },
        { title: 'HBsAb', dataIndex: 'HBSAB', valueType: 'radio', valueEnum: value },
        { title: 'HBeAg', dataIndex: 'HBEAG', valueType: 'radio', valueEnum: value },
        { title: 'HBeAb', dataIndex: 'HBEAB', valueType: 'radio', valueEnum: value },
        { title: 'HBcAb', dataIndex: 'HBCAB', valueType: 'radio', valueEnum: value },
      ],
    },
    {
      title: '丙肝',
      dataIndex: 'HCV',
      valueType: 'radio',
      valueEnum: value,
    },
    {
      title: '梅毒',
      dataIndex: 'RPR',
      valueType: 'radio',
      valueEnum: value,
    },
    {
      title: '艾滋',
      dataIndex: 'HIV',
      valueType: 'radio',
      valueEnum: value,
    },
    { title: '检验间隔', dataIndex: 'jiange' },
    { title: '下次检验', dataIndex: 'date', valueType: 'date' },
    { title: '登记医生', dataIndex: 'doctor' },
    { title: '备注', dataIndex: 'nurse' },
    {
      title: '操作',
      valueType: 'option',
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        <a
          key="delete"
          onClick={() => {
            setDataSource(dataSource.filter((item) => item.id !== record.id));
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  return (
    <>
      <EditableProTable
        rowKey="id"
        headerTitle="传染病检查"
        // maxLength={5}
        recordCreatorProps={
          position !== 'hidden'
            ? {
                position: 'bottom',
                record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
              }
            : false
        }
        toolBarRender={() => [
          <Button type="primary" key="primary">
            <PlusOutlined />
            从HIS导入
          </Button>,
        ]}
        columns={columns}
        request={async () => ({
          data: defaultData,
          total: 3,
          success: true,
        })}
        value={dataSource}
        onChange={setDataSource}
        editable={{
          type: 'multiple',
          editableKeys,
          onSave: async (rowKey, data, row) => {
            console.log(rowKey, data, row);
            await waitTime(2000);
          },
          onChange: setEditableRowKeys,
        }}
      />
      <ProCard title="表格数据" headerBordered collapsible defaultCollapsed>
        <ProField
          fieldProps={{
            style: {
              width: '100%',
            },
          }}
          mode="read"
          valueType="jsonCode"
          text={JSON.stringify(dataSource)}
        />
      </ProCard>
    </>
  );
};
