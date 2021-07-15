import React, { useState } from 'react';
// import { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import ProField from '@ant-design/pro-field';
// import { ProFormRadio } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const defaultData = [
  {
    id: 624748504,
    title: '测试数据不符合医疗标准',
    decs: '请勿使用',
    state: 'open',
    use: true,
    useless: true,
    created_at: '2020-05-26T09:42:56Z',
    update_at: '2020-05-26T09:42:56Z',
  },
  {
    id: 624691229,
    title: '测试数据不符合医疗标准',
    decs: '请勿使用',
    state: 'closed',
    use: true,
    useless: true,
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
    //   title: '保留',
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
    //   // width: '30%',
    // },
    {
      title: '通路类型',
      key: 'state',
      dataIndex: 'state',
      valueType: 'select',
      valueEnum: {
        all: { text: '全部', status: 'Default' },
        open: {
          text: '中心静脉长期导管',
        },
        closed: {
          text: 'TCC',
        },
      },
    },
    {
      title: '方向',
      key: 'state',
      dataIndex: 'state',
      valueType: 'checkbox',
      valueEnum: {
        // all: { text: '全部', status: 'Default' },
        open: {
          text: '左',
        },
        closed: {
          text: '右',
        },
      },
    },
    {
      title: '部位',
      key: 'state',
      dataIndex: 'state',
      valueType: 'select',
      valueEnum: {
        all: { text: '全部', status: 'Default' },
        open: {
          text: '颈内静脉',
        },
        closed: {
          text: '下肢',
        },
      },
    },
    {
      title: '手术吻合方式',
      key: 'state',
      dataIndex: 'state',
      valueType: 'select',
      valueEnum: {
        all: { text: '全部', status: 'Default' },
        open: {
          text: '无',
        },
        closed: {
          text: '端端吻合',
        },
      },
    },
    {
      title: '建立时间',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '是否启用',
      dataIndex: 'use',
      valueType: 'switch',
    },
    {
      title: '启用时间',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '是否弃用',
      dataIndex: 'useless',
      valueType: 'switch',
    },
    {
      title: '弃用原因',
      dataIndex: 'decs',
      fieldProps: (from, { rowKey, rowIndex }) => {
        if (from.getFieldValue([rowKey || '', 'title']) === '不好玩') {
          return {
            disabled: true,
          };
        }
        if (rowIndex > 9) {
          return {
            disabled: true,
          };
        }
        return {};
      },
    },
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
        headerTitle="血管通路"
        maxLength={5}
        recordCreatorProps={
          position !== 'hidden'
            ? {
                position: 'bottom',
                record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
              }
            : false
        }
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
