import React from 'react';
import { Modal, Tabs } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import BasicCreateForm from './BasicCreateForm';
import DiagnosisCreateForm from './DiagnosisCreateForm';
import ImageCreateForm from './ImageCreateForm';
import AllergyCreateForm from './AllergyCreateForm';
import AccessCreateForm from './AccessCreateForm';
import ChronicCreateForm from './ChronicCreateForm';
import AccessComplicationCreateForm from './AccessComplicationCreateForm';
import LongCreateForm from './LongCreateForm';
import ChargeCreateForm from './ChargeCreateForm';
import AssessCreateForm from './AssessCreateForm';
import MedicalCreateForm from './MedicalCreateForm';
import InfectionForm from './InfectionForm';
import BedForm from './BedForm';
import Card from './Card';

const { TabPane } = Tabs;

const CreateForm = (props) => {
  return (
    <Modal
      title="患者信息"
      width={1350}
      visible={props.visible}
      onCancel={props.onCancel}
      destroyOnClose={true}
    >
      <Tabs defaultActiveKey="1" tabPosition="left">
        <TabPane tab="电子病历" key="1">
          <PageContainer title="电子病历" style={{ padding: 24 }}>
            <BasicCreateForm />
          </PageContainer>
        </TabPane>
        <TabPane tab="诊断信息" key="2">
          <PageContainer title="诊断信息" style={{ padding: 24 }}>
            <DiagnosisCreateForm />
          </PageContainer>
        </TabPane>
        <TabPane tab="患者图片管理" key="3">
          <PageContainer title="患者图片管理" style={{ padding: 24 }}>
            <ImageCreateForm />
          </PageContainer>
        </TabPane>
        <TabPane tab="患者签字文档" key="4">
          <PageContainer title="患者签字文档" style={{ padding: 24 }}>
            <ImageCreateForm />
          </PageContainer>
        </TabPane>
        <TabPane tab="过敏史" key="5">
          {/* <PageContainer title="过敏史" style={{ padding: 24 }}> */}
          <AllergyCreateForm />
          {/* </PageContainer> */}
        </TabPane>
        <TabPane tab="血管通路" key="6">
          <AccessCreateForm />
        </TabPane>
        <TabPane tab="血管通路并发症" key="7">
          <AccessComplicationCreateForm />
        </TabPane>
        <TabPane tab="慢性并发症" key="8">
          <ChronicCreateForm />
        </TabPane>
        <TabPane tab="长期透析医嘱" key="9">
          <LongCreateForm />
        </TabPane>
        <TabPane tab="耗材设置" key="10">
          <ChargeCreateForm />
        </TabPane>
        <TabPane tab="传染病检查" key="11">
          <InfectionForm />
        </TabPane>
        <TabPane tab="排床规律" key="12">
          <BedForm />
        </TabPane>
        <TabPane tab="病症评估" key="13">
          <PageContainer title="病症评估" style={{ padding: 24 }}>
            <AssessCreateForm />
          </PageContainer>
        </TabPane>
        <TabPane tab="检验结果" key="14">
          获取HIS信息后同步开发
        </TabPane>
        <TabPane tab="住院信息" key="15">
          获取HIS信息后同步开发
        </TabPane>
        <TabPane tab="常规透析用药" key="16">
          移动端录入
        </TabPane>
        <TabPane tab="门诊用药医嘱" key="17">
          <MedicalCreateForm />
        </TabPane>
        <TabPane tab="发卡" key="18">
          <Card />
        </TabPane>
      </Tabs>
    </Modal>
  );
};
export default CreateForm;
