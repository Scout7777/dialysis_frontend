import React from 'react';
import { Row, Col } from 'antd';
import ProForm, {
  ProFormSelect,
  ProFormText,
  ProFormRadio,
  ProFormDatePicker,
  ProFormFieldSet,
} from '@ant-design/pro-form';

import FormItemDivider from '@/components/FormItemDivider';

/* 功能键：从HIS获取患者信息
患者基本信息：
必填：患者唯一编码、住院号、门诊号（登记号）、医保号、透析号、证件类型、证件号码、患者姓名、性别、出生日期（最好可以填完身份证号自动生成）、慢性肾衰竭标志（是、否）医疗支付方式、是否本地医保、首次透析日期、本院首次透析日期、
选填：身高、密级、重名附加符、血型、教育程度、职业、婚姻状况、生育情况、本人电话、家庭电话、联系人电话、联系人关系、家庭住址
上传头像，更新患者LIS信息，时间段 */
const ImageCreateForm = (props) => {
  return (
    <ProForm onFinish={props.onSubmit}>
      <FormItemDivider>必填</FormItemDivider>
      <Row>
        <Col span={12}>
          <ProFormText name="staffNo" label="住院号" width="md" rules={[{ required: true }]} />
        </Col>
        <Col span={12}>
          <ProFormText
            name="staffNo"
            label="门诊号（登记号）"
            width="md"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name="staffNo"
            label="医保号"
            width="md"
            placeholder="默认为工号，可修改"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12}>
          <ProFormText
            name="staffNo"
            label="透析号"
            width="md"
            placeholder="默认为工号，可修改"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12}>
          <ProFormFieldSet name="id" label="证件" rules={[{ required: true }]}>
            <ProFormSelect
              width="xs"
              request={async () => [
                // 居民身份证(01),
                // 居民户口簿(02),
                // 护照(03),
                // 军官证(04),
                // 驾驶证(05),
                // 港澳居民来往内地通行证(06),
                // 台湾居民来往内地通行证(07),
                // 其他法定有效证件(99)
                { label: '居民身份证', value: '居民身份证' },
                { label: '居民户口簿', value: '居民户口簿' },
                { label: '护照', value: '护照' },
                { label: '军官证', value: '军官证' },
                { label: '驾驶证', value: '驾驶证' },
                { label: '港澳居民来往内地通行证', value: '港澳居民来往内地通行证' },
                { label: '台湾居民来往内地通行证', value: '台湾居民来往内地通行证' },
                { label: '其他法定有效证件', value: '其他法定有效证件' },
              ]}
              name="idType"
              label="类型"
            />
            <ProFormText width="sm" name="idNo" label="证件号码" />
          </ProFormFieldSet>
        </Col>
        <Col span={12}>
          <ProFormText
            name="name"
            label="姓名"
            width="md"
            placeholder="请输入真实姓名"
            rules={[{ required: true }]}
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
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12}>
          <ProFormDatePicker
            name="birthday"
            width="md"
            label="出生日期"
            rules={[{ required: true }]}
          />
        </Col>
        {/* <ProForm.Item label="出生日期">
        <ProFormDependency name={['list']}>
          {({ list }) => {
            return <div>{JSON.stringify(list, null, 2)}</div>;
          }}
        </ProFormDependency>
      </ProForm.Item> */}
        <Col span={12}>
          <ProFormRadio.Group
            name="isAdvanced"
            label="慢性肾衰竭标志"
            rules={[{ required: true }]}
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
          />
        </Col>
        <Col span={12}>
          <ProFormSelect
            name="role"
            width="md"
            label="医疗支付方式"
            valueEnum={{
              doctor: '医保',
              nurse: '自费',
            }}
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12}>
          <ProFormRadio.Group
            name="isAdvanced"
            label="是否本地医保"
            rules={[{ required: true }]}
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
          />
        </Col>
        <Col span={12}>
          <ProFormDatePicker
            name="firstDate"
            width="md"
            label="首次透析日期"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12}>
          <ProFormDatePicker
            name="localFirst"
            width="md"
            label="本院首次透析日期"
            rules={[{ required: true }]}
          />
        </Col>
      </Row>
      <FormItemDivider>选填</FormItemDivider>

      <ProFormText name="telephone" width="md" label="本人电话" />
    </ProForm>
  );
};
export default ImageCreateForm;
