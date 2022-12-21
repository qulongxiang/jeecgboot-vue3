<template>
  <a-spin :spinning="confirmLoading">
    <a-form ref="formRef" class="antd-modal-form" :labelCol="labelCol" :wrapperCol="wrapperCol">
      <a-row>
        <a-col :span="12">
          <a-form-item label="所属社区" v-bind="validateInfos.mzCommunityId">
	          <j-dict-select-tag v-model:value="formData.mzCommunityId" dictCode="mz_community_info,sqmc,id" placeholder="请选择所属社区" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="小区编码" v-bind="validateInfos.xqCode">
            <a-input v-model:value="formData.xqCode" placeholder="请输入小区编码" disabled></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="小区名称" v-bind="validateInfos.xqmc">
            <a-input v-model:value="formData.xqmc" placeholder="请输入小区名称" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="成立日期" v-bind="validateInfos.clrq">
		        <a-date-picker placeholder="请选择成立日期" v-model:value="formData.clrq" value-format="YYYY-MM-DD"  style="width: 100%" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="小区地址" v-bind="validateInfos.xqdz">
            <a-input v-model:value="formData.xqdz" placeholder="请输入小区地址" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="占地面积" v-bind="validateInfos.zdmj">
	          <a-input-number v-model:value="formData.zdmj" placeholder="请输入占地面积" style="width: 100%" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="建筑面积" v-bind="validateInfos.jzmj">
	          <a-input-number v-model:value="formData.jzmj" placeholder="请输入建筑面积" style="width: 100%" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="容积率" v-bind="validateInfos.rjl">
	          <a-input-number v-model:value="formData.rjl" placeholder="请输入容积率" style="width: 100%" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="总户数" v-bind="validateInfos.zhs">
	          <a-input-number v-model:value="formData.zhs" placeholder="请输入总户数" style="width: 100%" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="住宅楼数" v-bind="validateInfos.zzls">
	          <a-input-number v-model:value="formData.zzls" placeholder="请输入住宅楼数" style="width: 100%" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="单元数" v-bind="validateInfos.dys">
	          <a-input-number v-model:value="formData.dys" placeholder="请输入单元数" style="width: 100%" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="居住户数" v-bind="validateInfos.jzhs">
	          <a-input-number v-model:value="formData.jzhs" placeholder="请输入居住户数" style="width: 100%" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="居住人数" v-bind="validateInfos.jzrs">
	          <a-input-number v-model:value="formData.jzrs" placeholder="请输入居住人数" style="width: 100%" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="入住率" v-bind="validateInfos.rzl">
	          <a-input-number v-model:value="formData.rzl" placeholder="请输入入住率" style="width: 100%" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="网格级别" v-bind="validateInfos.wgjb">
	          <j-dict-select-tag v-model:value="formData.wgjb" dictCode="wgjb" placeholder="请选择网格级别" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="网格员" v-bind="validateInfos.wgy">
            <a-input v-model:value="formData.wgy" placeholder="请输入网格员" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="流动人口数" v-bind="validateInfos.ldrks">
	          <a-input-number v-model:value="formData.ldrks" placeholder="请输入流动人口数" style="width: 100%" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="育龄妇女人数" v-bind="validateInfos.ylfnrs">
	          <a-input-number v-model:value="formData.ylfnrs" placeholder="请输入育龄妇女人数" style="width: 100%" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="低保户数" v-bind="validateInfos.dbhs">
	          <a-input-number v-model:value="formData.dbhs" placeholder="请输入低保户数" style="width: 100%" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="60岁以上人数" v-bind="validateInfos.lrs">
	          <a-input-number v-model:value="formData.lrs" placeholder="请输入60岁以上人数" style="width: 100%" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="伤残军人数" v-bind="validateInfos.scjrs">
	          <a-input-number v-model:value="formData.scjrs" placeholder="请输入伤残军人数" style="width: 100%" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="残疾人数" v-bind="validateInfos.cjrs">
	          <a-input-number v-model:value="formData.cjrs" placeholder="请输入残疾人数" style="width: 100%" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="少年儿童人数" v-bind="validateInfos.snetrs">
	          <a-input-number v-model:value="formData.snetrs" placeholder="请输入少年儿童人数" style="width: 100%" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="广场数" v-bind="validateInfos.gcs">
	          <a-input-number v-model:value="formData.gcs" placeholder="请输入广场数" style="width: 100%" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="广场面积" v-bind="validateInfos.gcmj">
	          <a-input-number v-model:value="formData.gcmj" placeholder="请输入广场面积" style="width: 100%" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="停车位数" v-bind="validateInfos.tcws">
	          <a-input-number v-model:value="formData.tcws" placeholder="请输入停车位数" style="width: 100%" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="停车需求" v-bind="validateInfos.tcxq">
	          <j-dict-select-tag v-model:value="formData.tcxq" dictCode="tcxq" placeholder="请选择停车需求" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="充电桩数" v-bind="validateInfos.cdzs">
	          <a-input-number v-model:value="formData.cdzs" placeholder="请输入充电桩数" style="width: 100%" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="充电桩需求" v-bind="validateInfos.cdzxq">
	          <j-dict-select-tag v-model:value="formData.cdzxq" dictCode="cdxq" placeholder="请选择充电桩需求" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="物业公司" v-bind="validateInfos.wygs">
            <a-input v-model:value="formData.wygs" placeholder="请输入物业公司" :disabled="disabled"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="是否垃圾分类" v-bind="validateInfos.sfljfl">
	          <j-dict-select-tag v-model:value="formData.sfljfl" dictCode="yn" placeholder="请选择是否垃圾分类" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="每天清运次数" v-bind="validateInfos.mtqycs">
	          <a-input-number v-model:value="formData.mtqycs" placeholder="请输入每天清运次数" style="width: 100%" :disabled="disabled"/>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="排水管道情况" v-bind="validateInfos.psgdqk">
	          <j-dict-select-tag v-model:value="formData.psgdqk" dictCode="psgdqk" placeholder="请选择排水管道情况" :disabled="disabled"/>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-spin>
</template>

<script lang="ts" setup>
  import { ref, reactive, defineExpose, nextTick, defineProps, computed, onMounted } from 'vue';
  import { defHttp } from '/@/utils/http/axios';
  import { useMessage } from '/@/hooks/web/useMessage';
  import JDictSelectTag from '/@/components/Form/src/jeecg/components/JDictSelectTag.vue';
  import { getValueType } from '/@/utils';
  import { saveOrUpdate } from '../MzVillageInfoAll.api';
  import { Form } from 'ant-design-vue';
  
  const props = defineProps({
    formDisabled: { type: Boolean, default: false },
    formData: { type: Object, default: ()=>{} },
    formBpm: { type: Boolean, default: true }
  });
  const formRef = ref();
  const useForm = Form.useForm;
  const emit = defineEmits(['register', 'ok']);
  const formData = reactive<Record<string, any>>({
    id: '',
    mzCommunityId: '',   
    xqCode: '',   
    xqmc: '',   
    clrq: '',   
    xqdz: '',   
    zdmj: undefined,
    jzmj: undefined,
    rjl: undefined,
    zhs: undefined,
    zzls: undefined,
    dys: undefined,
    jzhs: undefined,
    jzrs: undefined,
    rzl: undefined,
    wgjb: '',   
    wgy: '',   
    ldrks: undefined,
    ylfnrs: undefined,
    dbhs: undefined,
    lrs: undefined,
    scjrs: undefined,
    cjrs: undefined,
    snetrs: undefined,
    gcs: undefined,
    gcmj: undefined,
    tcws: undefined,
    tcxq: '',   
    cdzs: undefined,
    cdzxq: '',   
    wygs: '',   
    sfljfl: '',   
    mtqycs: undefined,
    psgdqk: '',   
  });
  const { createMessage } = useMessage();
  const labelCol = ref<any>({ xs: { span: 24 }, sm: { span: 5 } });
  const wrapperCol = ref<any>({ xs: { span: 24 }, sm: { span: 16 } });
  const confirmLoading = ref<boolean>(false);
  //表单验证
  const validatorRules = {
    mzCommunityId: [{ required: true, message: '请输入所属社区!'},],
    xqmc: [{ required: true, message: '请输入小区名称!'},],
    xqdz: [{ required: true, message: '请输入小区地址!'},],
  };
  const { resetFields, validate, validateInfos } = useForm(formData, validatorRules, { immediate: true });

  // 表单禁用
  const disabled = computed(()=>{
    if(props.formBpm === true){
      if(props.formData.disabled === false){
        return false;
      }else{
        return true;
      }
    }
    return props.formDisabled;
  });

  
  /**
   * 新增
   */
  function add() {
    edit({});
  }

  /**
   * 编辑
   */
  function edit(record) {
    nextTick(() => {
      resetFields();
      //赋值
      Object.assign(formData, record);
    });
  }

  /**
   * 提交数据
   */
  async function submitForm() {
    // 触发表单验证
    await validate();
    confirmLoading.value = true;
    const isUpdate = ref<boolean>(false);
    //时间格式化
    let model = formData;
    if (model.id) {
      isUpdate.value = true;
    }
    //循环数据
    for (let data in model) {
      //如果该数据是数组并且是字符串类型
      if (model[data] instanceof Array) {
        let valueType = getValueType(formRef.value.getProps, data);
        //如果是字符串类型的需要变成以逗号分割的字符串
        if (valueType === 'string') {
          model[data] = model[data].join(',');
        }
      }
    }
    await saveOrUpdate(model, isUpdate.value)
      .then((res) => {
        if (res.success) {
          createMessage.success(res.message);
          emit('ok');
        } else {
          createMessage.warning(res.message);
        }
      })
      .finally(() => {
        confirmLoading.value = false;
      });
  }


  defineExpose({
    add,
    edit,
    submitForm,
  });
</script>

<style lang="less" scoped>
  .antd-modal-form {
    min-height: 500px !important;
    overflow-y: auto;
    padding: 24px 24px 24px 24px;
  }
</style>
