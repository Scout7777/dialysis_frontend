import React from 'react';
import { Row, Col, Card } from 'antd';
import ProForm, {
  ProFormSelect,
  // ProFormText,
  // ProFormRadio,
  // ProFormDatePicker,
  // ProFormFieldSet,
  ProFormDigit,
  // ProFormSwitch,
} from '@ant-design/pro-form';

// import FormItemDivider from '@/components/FormItemDivider';

/* 功能键：从HIS获取患者信息
患者基本信息：
必填：患者唯一编码、住院号、门诊号（登记号）、医保号、透析号、证件类型、证件号码、患者姓名、性别、出生日期（最好可以填完身份证号自动生成）、慢性肾衰竭标志（是、否）医疗支付方式、是否本地医保、首次透析日期、本院首次透析日期、
选填：身高、密级、重名附加符、血型、教育程度、职业、婚姻状况、生育情况、本人电话、家庭电话、联系人电话、联系人关系、家庭住址
上传头像，更新患者LIS信息，时间段 */
const ChargeCreateForm = (props) => {
  console.log(props);
  return (
    <ProForm>
      <Row>
        <Col span={8}>
          <Card title={'收费套餐'}>
            <ProFormSelect
              valueEnum={{
                HD: 'HD',
                HF: 'HF',
                HDF: 'HDF',
              }}
              name="Type"
              label="HD/HF/HDF类型"
              fieldProps={{
                onChange: (value) => {
                  console.log(value);
                },
              }}
            />
            <ProFormSelect
              valueEnum={{
                HD: 'HD',
                HF: 'HF',
                HDF: 'HDF',
              }}
              name="name"
              label="血管通路名称"
            />
            <ProFormDigit name="DialysisDuration" label="数量" />
            <ProFormSelect
              valueEnum={{
                HD: '类型1',
                HF: '类型2',
                HDF: '类型3',
              }}
              name="name1"
              label="预留耗材"
            />
            <ProFormDigit name="DialysisDuration1" label="数量" />
            <ProFormSelect
              valueEnum={{
                HD: '类型1',
                HF: '类型2',
                HDF: '类型3',
              }}
              name="name2"
              label="穿刺针/导管护理"
            />
            <ProFormDigit name="DialysisDuration2" label="数量" />
          </Card>
        </Col>
        <Col span={8}>
          <Card></Card>
        </Col>
        <Col span={8}>
          <Card></Card>
        </Col>
      </Row>
    </ProForm>
  );
};
export default ChargeCreateForm;
