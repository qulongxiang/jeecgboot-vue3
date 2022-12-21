import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '所属社区',
    align: "center",
    dataIndex: 'mzCommunityId_dictText'
  },
  {
    title: '小区名称',
    align: "center",
    dataIndex: 'xqmc'
  },
  {
    title: '小区地址',
    align: "center",
    dataIndex: 'xqdz'
  },
  {
    title: '网格级别',
    align: "center",
    dataIndex: 'wgjb_dictText'
  },
  {
    title: '网格员',
    align: "center",
    dataIndex: 'wgy'
  },
  {
    title: '物业公司',
    align: "center",
    dataIndex: 'wygs'
  },
];

//查询数据
export const searchFormSchema: FormSchema[] = [
  {
    label: "所属社区",
    field: 'mzCommunityId',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode: "mz_community_info,sqmc,id"
    },
    colProps: {span: 6},
  },
  {
    label: "小区名称",
    field: 'xqmc',
    component: 'Input',
    colProps: {span: 6},
  },
  {
    label: "小区地址",
    field: 'xqdz',
    component: 'Input',
    colProps: {span: 6},
  },
  {
    label: "网格员",
    field: 'wgy',
    component: 'Input',
    colProps: {span: 6},
  },
];

//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '所属社区',
    field: 'mzCommunityId',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode: "mz_community_info,sqmc,id"
    },
    dynamicRules: ({model,schema}) => {
      return [
              { required: true, message: '请输入所属社区!'},
             ];
    },
  },
  {
    label: '小区编码',
    field: 'xqCode',
    component: 'Input',
    dynamicDisabled: true
  },
  {
    label: '小区名称',
    field: 'xqmc',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
      return [
              { required: true, message: '请输入小区名称!'},
             ];
    },
  },
  {
    label: '成立日期',
    field: 'clrq',
    component: 'DatePicker',
  },
  {
    label: '小区地址',
    field: 'xqdz',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
      return [
              { required: true, message: '请输入小区地址!'},
             ];
    },
  },
  {
    label: '占地面积',
    field: 'zdmj',
    component: 'InputNumber',
  },
  {
    label: '建筑面积',
    field: 'jzmj',
    component: 'InputNumber',
  },
  {
    label: '容积率',
    field: 'rjl',
    component: 'InputNumber',
  },
  {
    label: '总户数',
    field: 'zhs',
    component: 'InputNumber',
  },
  {
    label: '住宅楼数',
    field: 'zzls',
    component: 'InputNumber',
  },
  {
    label: '单元数',
    field: 'dys',
    component: 'InputNumber',
  },
  {
    label: '居住户数',
    field: 'jzhs',
    component: 'InputNumber',
  },
  {
    label: '居住人数',
    field: 'jzrs',
    component: 'InputNumber',
  },
  {
    label: '入住率',
    field: 'rzl',
    component: 'InputNumber',
  },
  {
    label: '网格级别',
    field: 'wgjb',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode: "wgjb"
    },
  },
  {
    label: '网格员',
    field: 'wgy',
    component: 'Input',
  },
  {
    label: '流动人口数',
    field: 'ldrks',
    component: 'InputNumber',
  },
  {
    label: '育龄妇女人数',
    field: 'ylfnrs',
    component: 'InputNumber',
  },
  {
    label: '低保户数',
    field: 'dbhs',
    component: 'InputNumber',
  },
  {
    label: '60岁以上人数',
    field: 'lrs',
    component: 'InputNumber',
  },
  {
    label: '伤残军人数',
    field: 'scjrs',
    component: 'InputNumber',
  },
  {
    label: '残疾人数',
    field: 'cjrs',
    component: 'InputNumber',
  },
  {
    label: '少年儿童人数',
    field: 'snetrs',
    component: 'InputNumber',
  },
  {
    label: '广场数',
    field: 'gcs',
    component: 'InputNumber',
  },
  {
    label: '广场面积',
    field: 'gcmj',
    component: 'InputNumber',
  },
  {
    label: '停车位数',
    field: 'tcws',
    component: 'InputNumber',
  },
  {
    label: '停车需求',
    field: 'tcxq',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode: "tcxq"
    },
  },
  {
    label: '充电桩数',
    field: 'cdzs',
    component: 'InputNumber',
  },
  {
    label: '充电桩需求',
    field: 'cdzxq',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode: "cdxq"
    },
  },
  {
    label: '物业公司',
    field: 'wygs',
    component: 'Input',
  },
  {
    label: '是否垃圾分类',
    field: 'sfljfl',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode: "yn"
    },
  },
  {
    label: '每天清运次数',
    field: 'mtqycs',
    component: 'InputNumber',
  },
  {
    label: '排水管道情况',
    field: 'psgdqk',
    component: 'JDictSelectTag',
    componentProps:{
      dictCode: "psgdqk"
    },
  },
	// TODO 主键隐藏字段，目前写死为ID
  {
    label: '',
    field: 'id',
    component: 'Input',
    show: false,
  },
];
