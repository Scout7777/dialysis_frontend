import React from 'react';
import { Row } from 'antd';
import { ProFormText, ProFormSelect, ModalForm } from '@ant-design/pro-form';
// import { PageContainer } from '@ant-design/pro-layout';
// import FormItemDivider from '@/components/FormItemDivider';

const CreateForm = (props) => {
  return (
    <ModalForm
      visible={props.visible}
      modalProps={{
        onCancel: props.onCancel,
        destroyOnClose: true,
        bodyStyle: { padding: '32px 0 36px 68px' },
      }}
      title="新增设备"
    >
      <Row>
        <ProFormSelect
          width={'md'}
          valueEnum={{
            aa: '无',
            none: '1',
            HD: '2',
            HF: '3',
            HDF: '4',
          }}
          name="Type"
          label="归属床位"
          fieldProps={{
            onChange: (value) => {
              console.log(value);
            },
          }}
        />
        <ProFormSelect
          width={'md'}
          valueEnum={{
            aa: '类型1',
            none: '类型2',
            HF: '类型3',
            HDF: '类型4',
          }}
          name="Type"
          label="设备类型"
          fieldProps={{
            onChange: (value) => {
              console.log(value);
            },
          }}
        />
        <ProFormText width={'md'} name="name" label="设备名称"></ProFormText>
      </Row>
    </ModalForm>
  );
};
export default CreateForm;
