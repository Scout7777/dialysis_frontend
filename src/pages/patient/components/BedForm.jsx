import React from 'react';
import { Row } from 'antd';
import ProForm, {
  ProFormSelect,
  // ProFormText,
  ProFormRadio,
  // ProFormDatePicker,
  // ProFormTextArea,
  // ProFormFieldSet,
  ProFormCheckbox,
} from '@ant-design/pro-form';

// import FormItemDivider from '@/components/FormItemDivider';

const DiagnosisCreateForm = (props) => {
  return (
    <ProForm onFinish={props.onSubmit}>
      <ProFormSelect
        width={'md'}
        name="area"
        valueEnum={{
          A: '普通分区',
          B: '乙肝',
          C: '丙肝',
          D: '梅毒',
          E: '艾滋',
        }}
        placeholder="选择透析分区"
      />
      <ProFormRadio.Group
        name="week"
        options={[
          {
            label: '单周',
            value: 'a',
          },
          {
            label: '双周',
            value: 'b',
          },
        ]}
      />
      <Row>
        <ProFormCheckbox>周一</ProFormCheckbox>
        <ProFormRadio.Group
          name="group"
          options={[
            {
              label: '上午班',
              value: 'a',
            },
            {
              label: '下午班',
              value: 'b',
            },
            {
              label: '晚上班',
              value: 'c',
            },
          ]}
        />
        <ProFormSelect
          name="way"
          valueEnum={{
            HD: 'HD',
            HDF: 'HDF',
          }}
          placeholder="选择透析方式"
        />
        <ProFormSelect
          name="eq"
          valueEnum={{
            HD: '设备1',
            HDF: '设备2',
          }}
          placeholder="指定透析器"
        />
      </Row>
      <Row>
        <ProFormCheckbox>周二</ProFormCheckbox>
        <ProFormRadio.Group
          name="group"
          options={[
            {
              label: '上午班',
              value: 'a',
            },
            {
              label: '下午班',
              value: 'b',
            },
            {
              label: '晚上班',
              value: 'c',
            },
          ]}
        />
        <ProFormSelect
          name="way"
          valueEnum={{
            HD: 'HD',
            HDF: 'HDF',
          }}
          placeholder="选择透析方式"
        />
        <ProFormSelect
          name="eq"
          valueEnum={{
            HD: '设备1',
            HDF: '设备2',
          }}
          placeholder="指定透析器"
        />
      </Row>
      <Row>
        <ProFormCheckbox>周三</ProFormCheckbox>
        <ProFormRadio.Group
          name="group"
          options={[
            {
              label: '上午班',
              value: 'a',
            },
            {
              label: '下午班',
              value: 'b',
            },
            {
              label: '晚上班',
              value: 'c',
            },
          ]}
        />
        <ProFormSelect
          name="way"
          valueEnum={{
            HD: 'HD',
            HDF: 'HDF',
          }}
          placeholder="选择透析方式"
        />
        <ProFormSelect
          name="eq"
          valueEnum={{
            HD: '设备1',
            HDF: '设备2',
          }}
          placeholder="指定透析器"
        />
      </Row>
      <Row>
        <ProFormCheckbox>周四</ProFormCheckbox>
        <ProFormRadio.Group
          name="group"
          options={[
            {
              label: '上午班',
              value: 'a',
            },
            {
              label: '下午班',
              value: 'b',
            },
            {
              label: '晚上班',
              value: 'c',
            },
          ]}
        />
        <ProFormSelect
          name="way"
          valueEnum={{
            HD: 'HD',
            HDF: 'HDF',
          }}
          placeholder="选择透析方式"
        />
        <ProFormSelect
          name="eq"
          valueEnum={{
            HD: '设备1',
            HDF: '设备2',
          }}
          placeholder="指定透析器"
        />
      </Row>
      <Row>
        <ProFormCheckbox>周五</ProFormCheckbox>
        <ProFormRadio.Group
          name="group"
          options={[
            {
              label: '上午班',
              value: 'a',
            },
            {
              label: '下午班',
              value: 'b',
            },
            {
              label: '晚上班',
              value: 'c',
            },
          ]}
        />
        <ProFormSelect
          name="way"
          valueEnum={{
            HD: 'HD',
            HDF: 'HDF',
          }}
          placeholder="选择透析方式"
        />
        <ProFormSelect
          name="eq"
          valueEnum={{
            HD: '设备1',
            HDF: '设备2',
          }}
          placeholder="指定透析器"
        />
      </Row>
      <Row>
        <ProFormCheckbox>周六</ProFormCheckbox>
        <ProFormRadio.Group
          name="group"
          options={[
            {
              label: '上午班',
              value: 'a',
            },
            {
              label: '下午班',
              value: 'b',
            },
            {
              label: '晚上班',
              value: 'c',
            },
          ]}
        />
        <ProFormSelect
          name="way"
          valueEnum={{
            HD: 'HD',
            HDF: 'HDF',
          }}
          placeholder="选择透析方式"
        />
        <ProFormSelect
          name="eq"
          valueEnum={{
            HD: '设备1',
            HDF: '设备2',
          }}
          placeholder="指定透析器"
        />
      </Row>
    </ProForm>
  );
};
export default DiagnosisCreateForm;
