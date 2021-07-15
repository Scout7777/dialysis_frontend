import React from 'react';
import { Row, Col } from 'antd';
import {
  ProFormSelect,
  ProFormText,
  ModalForm,
  ProFormRadio,
  ProFormDatePicker,
} from '@ant-design/pro-form';

import FormItemDivider from '@/components/FormItemDivider';

// const SelectIdCardType = (
//   <Select defaultValue=".com" className="select-after">
//     <Option value=".com">.com</Option>
//     <Option value=".jp">.jp</Option>
//     <Option value=".cn">.cn</Option>
//     <Option value=".org">.org</Option>
//   </Select>
// );
const UpdateForm = (props) => {
  const record = props.values || {};
  return (
    <ModalForm
      title="更新"
      width={900}
      bodyStyle={{ padding: '32px 40px 48px' }}
      visible={props.visible}
      modalProps={{
        onCancel: props.onCancel,
        destroyOnClose: true,
        bodyStyle: { padding: '32px 0 36px 68px' },
      }}
      onFinish={props.onSubmit}
    >
      <FormItemDivider>用户基本信息</FormItemDivider>
      <Row>
        <Col span={12}>
          <ProFormText
            name="name"
            label="姓名"
            width="md"
            placeholder="请输入真实姓名"
            rules={[{ required: true, message: '请输入内容' }]}
            initialValue={record.name}
          />
        </Col>
        <Col span={12}>
          <ProFormSelect
            name="role"
            width="md"
            label="角色"
            valueEnum={{
              doctor: '医生',
              nurse: '护士',
              engineer: '工程师',
              admin: '管理员',
            }}
            rules={[{ required: true, message: '请选择角色' }]}
            initialValue={record.role}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name="staffNo"
            label="工号"
            width="md"
            placeholder="请输入工号（未输入将会自动生成）"
            initialValue={record.staffNo}
          />
        </Col>
        <Col span={12}>
          {/* <ProFormText
            name="password"
            label="初始密码"
            width="md"
            placeholder="请输入初始密码"
            rules={[{ required: true, message: "请输入内容" }]}
            // initialValue={record.password}
          /> */}
        </Col>
        <Col span={12}>
          <ProFormRadio.Group
            name="gender"
            label="性别"
            initialValue="male"
            options={[
              { value: 'male', label: '男' },
              { value: 'female', label: '女' },
            ]}
            initialValue={record.gender}
          />
        </Col>
        <Col>
          <ProFormRadio.Group
            name="status"
            label="状态"
            initialValue="active"
            options={[
              {
                value: 'active',
                label: '正常',
              },
              {
                value: 'disable',
                label: '禁用',
              },
            ]}
            initialValue={record.status}
          />
        </Col>
      </Row>
      <FormItemDivider>医疗专业信息</FormItemDivider>

      <ProFormDatePicker
        name="inDate"
        width="md"
        label="加入血透时间"
        rules={[{ required: false, message: '请选择时间' }]}
        initialValue={record.inDate}
      />
    </ModalForm>
  );
};
export default UpdateForm;
