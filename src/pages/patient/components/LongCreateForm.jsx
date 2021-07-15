import React from 'react';
import { Row, Col, Card } from 'antd';
import ProForm, {
  ProFormSelect,
  ProFormText,
  // ProFormRadio,
  // ProFormDatePicker,
  // ProFormFieldSet,
  ProFormDigit,
  ProFormSwitch,
} from '@ant-design/pro-form';

// import FormItemDivider from '@/components/FormItemDivider';

/* 功能键：从HIS获取患者信息
患者基本信息：
必填：患者唯一编码、住院号、门诊号（登记号）、医保号、透析号、证件类型、证件号码、患者姓名、性别、出生日期（最好可以填完身份证号自动生成）、慢性肾衰竭标志（是、否）医疗支付方式、是否本地医保、首次透析日期、本院首次透析日期、
选填：身高、密级、重名附加符、血型、教育程度、职业、婚姻状况、生育情况、本人电话、家庭电话、联系人电话、联系人关系、家庭住址
上传头像，更新患者LIS信息，时间段 */
const LongCreateForm = (props) => {
  console.log(props);
  return (
    <ProForm>
      <ProFormDigit name="DryWeight" label="干体重（kg）"></ProFormDigit>
      <Row>
        <Col span={8}>
          <Card>
            <ProFormSelect
              valueEnum={{
                none: '无',
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
            <ProFormDigit name="DialysisDuration" label="透析时长（小时）"></ProFormDigit>
            <ProFormDigit name="BloodVol" label="血流量（ml/min）"></ProFormDigit>
            <ProFormDigit name="Conductivity" label="电导度（mS/cm）"></ProFormDigit>
            <ProFormDigit name="DlTemperature" label="透析液温度（℃）"></ProFormDigit>
            <ProFormDigit name="DlFlow" label="透析液流量（ml/min）"></ProFormDigit>
            <ProFormDigit name="BicarbonateRadical" label="碳酸氢根（mmol/l）"></ProFormDigit>
            <ProFormDigit name="DlSodium" label="透析液钠（mmol/l）"></ProFormDigit>
            <ProFormDigit name="DlPotassium" label="透析液钾"></ProFormDigit>
            <ProFormDigit name="DlCalcium" label="透析液钙"></ProFormDigit>
            <ProFormText name="Anticoagulant" label="抗凝剂"></ProFormText>
            <ProFormDigit name="AnticoagulantQuantity" label="抗凝剂剂量（AxaIU）"></ProFormDigit>
            <ProFormDigit name="InitialAmount" label="初始量"></ProFormDigit>
            <ProFormDigit name="MaintenanceQuantity" label="维持量"></ProFormDigit>
            <ProFormDigit name="RlAmount" label="置换液量（L）"></ProFormDigit>
            <ProFormText name="ReplacementMode" label="置换模式"></ProFormText>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <ProFormSwitch name="switch1" label="HP" />
            <ProFormDigit name="DialysisDuration" label="透析时长（小时）"></ProFormDigit>
            <ProFormDigit name="BloodVol" label="血流量（ml/min）"></ProFormDigit>
            <ProFormDigit name="Conductivity" label="电导度（mS/cm）"></ProFormDigit>
            <ProFormDigit name="DlTemperature" label="透析液温度（℃）"></ProFormDigit>
            <ProFormDigit name="DlFlow" label="透析液流量（ml/min）"></ProFormDigit>
            <ProFormDigit name="BicarbonateRadical" label="碳酸氢根（mmol/l）"></ProFormDigit>
            <ProFormDigit name="DlSodium" label="透析液钠（mmol/l）"></ProFormDigit>
            <ProFormDigit name="DlPotassium" label="透析液钾"></ProFormDigit>
            <ProFormDigit name="DlCalcium" label="透析液钙"></ProFormDigit>
            <ProFormText name="Anticoagulant" label="抗凝剂"></ProFormText>
            <ProFormDigit name="AnticoagulantQuantity" label="抗凝剂剂量（AxaIU）"></ProFormDigit>
            <ProFormDigit name="InitialAmount" label="初始量"></ProFormDigit>
            <ProFormDigit name="MaintenanceQuantity" label="维持量"></ProFormDigit>
            <ProFormDigit name="RlAmount" label="置换液量（L）"></ProFormDigit>
            <ProFormText name="ReplacementMode" label="置换模式"></ProFormText>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <ProFormSwitch name="switch2" label="SUF" />
            <ProFormDigit name="DialysisDuration" label="透析时长（小时）"></ProFormDigit>
            <ProFormDigit name="BloodVol" label="血流量（ml/min）"></ProFormDigit>
            <ProFormDigit name="Conductivity" label="电导度（mS/cm）"></ProFormDigit>
            <ProFormDigit name="DlTemperature" label="透析液温度（℃）"></ProFormDigit>
            <ProFormDigit name="DlFlow" label="透析液流量（ml/min）"></ProFormDigit>
            <ProFormDigit name="BicarbonateRadical" label="碳酸氢根（mmol/l）"></ProFormDigit>
            <ProFormDigit name="DlSodium" label="透析液钠（mmol/l）"></ProFormDigit>
            <ProFormDigit name="DlPotassium" label="透析液钾"></ProFormDigit>
            <ProFormDigit name="DlCalcium" label="透析液钙"></ProFormDigit>
            <ProFormText name="Anticoagulant" label="抗凝剂"></ProFormText>
            <ProFormDigit name="AnticoagulantQuantity" label="抗凝剂剂量（AxaIU）"></ProFormDigit>
            <ProFormDigit name="InitialAmount" label="初始量"></ProFormDigit>
            <ProFormDigit name="MaintenanceQuantity" label="维持量"></ProFormDigit>
          </Card>
        </Col>
      </Row>
    </ProForm>
  );
};
export default LongCreateForm;
