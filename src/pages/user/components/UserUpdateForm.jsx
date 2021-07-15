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
            name="hospitalid"
            label="医疗机构组织代码"
            width="md"
            initialValue="默认值"
            disabled={true}
          />
        </Col>
        <Col span={12}></Col>
        <Col span={12}>
          <ProFormText
            name="staffNo"
            label="医院员工工号"
            width="md"
            rules={[{ required: true }]}
            initialValue={record.staffNo}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name="staffNo"
            label="用户名"
            width="md"
            placeholder="默认为工号，可修改"
            rules={[{ required: true }]}
            initialValue={record.staffNo}
          />
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
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name="name"
            label="人员姓名"
            width="md"
            placeholder="请输入真实姓名"
            rules={[{ required: true }]}
            initialValue={record.name}
          />
        </Col>
        <Col span={12}>
          <ProFormSelect
            width="md"
            valueEnum={{
              // 居民身份证(01),
              // 居民户口簿(02),
              // 护照(03),
              // 军官证(04),
              // 驾驶证(05),
              // 港澳居民来往内地通行证(06),
              // 台湾居民来往内地通行证(07),
              // 其他法定有效证件(99)
              居民身份证: '居民身份证',
              居民户口簿: '居民户口簿',
              护照: '护照',
              军官证: '军官证',
              驾驶证: '驾驶证',
              港澳居民来往内地通行证: '港澳居民来往内地通行证',
              台湾居民来往内地通行证: '台湾居民来往内地通行证',
              其他法定有效证件: '其他法定有效证件',
            }}
            name="idType"
            label="类型"
            initialValue={record.idType}
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            width="md"
            name="idNo"
            label="证件号码"
            initialValue={record.idNo}
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12}>
          <ProFormSelect
            name="role"
            width="md"
            label="人员职务"
            valueEnum={{
              doctor: '医生',
              nurse: '护士',
              engineer: '工程师',
              admin: '管理员',
            }}
            rules={[{ required: true }]}
            initialValue={record.role}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name="staffNo"
            label="人员编号"
            width="md"
            rules={[{ required: true }]}
            initialValue={record.staffNo}
          />
        </Col>
        <Col span={12}>
          <ProFormSelect
            // name="role"
            width="md"
            label="人员职称"
            valueEnum={
              {
                // doctor: '医生',
                // nurse: '护士',
                // engineer: '工程师',
                // admin: '管理员',
              }
            }
          />
        </Col>
        <Col span={12}>
          <ProFormSelect
            name="staffLevel"
            width="md"
            label="职称等级"
            valueEnum={{
              // 正高(1001),
              // 副高(1002),
              // 中级(1003),
              // 助理(1004),
              // 士级(1005),
              // 不详(1009);
              正高: '正高',
              副高: '副高',
              中级: '中级',
              助理: '助理',
              士级: '助理',
              不详: '不详',
            }}
            initialValue={record.staffLevel}
          />
        </Col>
        <Col span={12}>
          <ProFormSelect
            name="hospitalPosition"
            width="md"
            label="职责"
            valueEnum={{
              // 科室主任(1),
              // 护士长(2),
              // 护理组长(3),
              // 初责(4),
              // 高责(5),
              // 其它(9);
              科室主任: '科室主任',
              护士长: '护士长',
              护理组长: '护理组长',
              初责: '初责',
              高责: '高责',
              其它: '其它',
            }}
            initialValue={record.hospitalPosition}
          />
        </Col>
        <Col span={12}>
          <ProFormRadio.Group
            name="isAdvanced"
            label="是否进修人员"
            initialValue="active"
            options={[
              {
                value: true,
                label: '是',
              },
              {
                value: false,
                label: '否',
              },
            ]}
            initialValue={record.isAdvanced}
          />
        </Col>
        <Col span={12}>
          <ProFormRadio.Group
            name="status"
            label="人员状态"
            initialValue="active"
            options={[
              {
                value: 'active',
                label: '在岗',
              },
              {
                value: 'disable',
                label: '离职',
              },
            ]}
            rules={[{ required: true }]}
            initialValue={record.status}
          />
        </Col>
        <Col>
          <ProFormRadio.Group
            name="postType"
            label="编制类型"
            initialValue="fullTime"
            options={[
              {
                value: 'fullTime',
                label: '全职',
              },
              {
                value: 'partTime',
                label: '兼职',
              },
            ]}
            rules={[{ required: true }]}
            initialValue={record.postType}
          />
        </Col>
      </Row>
      <FormItemDivider>医疗专业信息</FormItemDivider>

      <ProFormDatePicker
        name="inDate"
        width="md"
        label="加入血透时间"
        rules={[{ required: true }]}
        initialValue={record.inDate}
      />
    </ModalForm>
  );
};
export default UpdateForm;
