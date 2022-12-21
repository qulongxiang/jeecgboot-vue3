import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '所属街道',
    align:"center",
    dataIndex: 'ssjd_dictText'
   },
   {
    title: '社区名称',
    align:"center",
    dataIndex: 'sqmc'
   },
   {
    title: '社区地址',
    align:"center",
    dataIndex: 'sqdz'
   },
   {
    title: '社区负责人',
    align:"center",
    dataIndex: 'sqfzr'
   },
   {
    title: '成立日期',
    align:"center",
    dataIndex: 'clrq',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "社区编号",
      field: "sqCode",
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "社区名称",
      field: "sqmc",
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "社区地址",
      field: "sqdz",
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "社区负责人",
      field: "sqfzr",
      component: 'Input',
      colProps: {span: 6},
 	},
];

//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '所属街道',
    field: 'ssjd',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"sys_depart,depart_name,org_code"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入所属街道!'},
          ];
     },
  },
  {
    label: '社区编号',
    field: 'sqCode',
    component: 'Input',
    dynamicDisabled:true,
  },
  {
    label: '社区名称',
    field: 'sqmc',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入社区名称!'},
          ];
     },
  },
  {
    label: '社区地址',
    field: 'sqdz',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入社区地址!'},
          ];
     },
  },
  {
    label: '社区负责人',
    field: 'sqfzr',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入社区负责人!'},
          ];
     },
  },
  {
    label: '联系电话',
    field: 'lxdh',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入联系电话!'},
                 { pattern: /^((0\d{2,3}-\d{7,8})|(1\d{10}))$/, message: '请输入正确格式的座机、手机号!'},
          ];
     },
  },
  {
    label: '成立日期',
    field: 'clrq',
    component: 'DatePicker',
  },
  {
    label: '辖区面积',
    field: 'xqmj',
    component: 'InputNumber',
  },
  {
    label: '居民小区数',
    field: 'jmxqs',
    component: 'InputNumber',
  },
  {
    label: '栋楼数',
    field: 'dls',
    component: 'InputNumber',
  },
  {
    label: '单元数',
    field: 'dys',
    component: 'InputNumber',
  },
  {
    label: '户数',
    field: 'hs',
    component: 'InputNumber',
  },
  {
    label: '入住居民小区数',
    field: 'rzJmxqs',
    component: 'InputNumber',
  },
  {
    label: '入住栋楼数',
    field: 'rzDls',
    component: 'InputNumber',
  },
  {
    label: '入住单元数',
    field: 'rzDys',
    component: 'InputNumber',
  },
  {
    label: '长期居住户数',
    field: 'rzHs',
    component: 'InputNumber',
  },
  {
    label: '长期居住人数',
    field: 'rzRs',
    component: 'InputNumber',
  },
  {
    label: '流动人口数',
    field: 'ldrks',
    component: 'InputNumber',
  },
  {
    label: '育龄妇女数',
    field: 'ylfns',
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
    label: '少年儿童数',
    field: 'snets',
    component: 'InputNumber',
  },
  {
    label: '辖区单位数',
    field: 'xqdws',
    component: 'InputNumber',
  },
  {
    label: '其中机关单位数',
    field: 'dwJgdws',
    component: 'InputNumber',
  },
  {
    label: '其中学校数',
    field: 'dwXxs',
    component: 'InputNumber',
  },
  {
    label: '其中医院数',
    field: 'dwYys',
    component: 'InputNumber',
  },
  {
    label: '其中商业网点数',
    field: 'dwSywds',
    component: 'InputNumber',
  },
  {
    label: '工作人员数',
    field: 'gzrys',
    component: 'InputNumber',
  },
  {
    label: '其中招聘人数',
    field: 'gzrysZprs',
    component: 'InputNumber',
  },
  {
    label: '其中两委人数',
    field: 'gzrysLwrs',
    component: 'InputNumber',
  },
  {
    label: '其中交叉任职人数',
    field: 'gzrysJcrzrs',
    component: 'InputNumber',
  },
  {
    label: '人员平均年龄',
    field: 'rypjnl',
    component: 'InputNumber',
  },
  {
    label: '大专人数',
    field: 'dzrs',
    component: 'InputNumber',
  },
  {
    label: '本科人数',
    field: 'bkrs',
    component: 'InputNumber',
  },
  {
    label: '研究生人数',
    field: 'yjsrs',
    component: 'InputNumber',
  },
  {
    label: '工作师证人数',
    field: 'gzszrs',
    component: 'InputNumber',
  },
  {
    label: '室内活动场所面积',
    field: 'snhdcsmj',
    component: 'InputNumber',
  },
  {
    label: '室外活动场所面积',
    field: 'swhdcsmj',
    component: 'InputNumber',
  },
  {
    label: '志愿者人数',
    field: 'zyzrs',
    component: 'InputNumber',
  },
  {
    label: '志愿服务队数',
    field: 'zyfwds',
    component: 'InputNumber',
  },
  {
    label: '社会组织数',
    field: 'shzzs',
    component: 'InputNumber',
  },
  {
    label: '文体活动项',
    field: 'wthdx',
    component: 'InputNumber',
  },
  {
    label: '专项服务',
    field: 'zxfw',
    component: 'Input',
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];

//子表列表数据
export const mzVillageInfoColumns: BasicColumn[] = [
   {
    title: '小区名称',
    align:"center",
    dataIndex: 'xqmc'
   },
   {
    title: '小区地址',
    align:"center",
    dataIndex: 'xqdz'
   },
   {
    title: '网格级别',
    align:"center",
    dataIndex: 'wgjb_dictText'
   },
   {
    title: '网格员',
    align:"center",
    dataIndex: 'wgy'
   },
   {
    title: '物业公司',
    align:"center",
    dataIndex: 'wygs'
   },
];
//子表表单数据
export const mzVillageInfoFormSchema: FormSchema[] = [
  // TODO 子表隐藏字段，目前写死为ID
  {
    label: '',
    field: 'id',
    component: 'Input',
    show: false
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
    label: '小区编码',
    field: 'xqCode',
    component: 'Input',
    dynamicDisabled:true,
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
        dictCode:"wgjb"
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
        dictCode:"tcxq"
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
        dictCode:"cdxq"
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
        dictCode:"yn"
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
        dictCode:"psgdqk"
     },
  },
];
