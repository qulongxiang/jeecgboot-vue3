import {defHttp} from '/@/utils/http/axios';
import { useMessage } from "/@/hooks/web/useMessage";

const { createConfirm } = useMessage();

enum Api {
  list = '/shequ/mzCommunityInfo/list',
  save='/shequ/mzCommunityInfo/add',
  edit='/shequ/mzCommunityInfo/edit',
  deleteOne = '/shequ/mzCommunityInfo/delete',
  deleteBatch = '/shequ/mzCommunityInfo/deleteBatch',
  importExcel = '/shequ/mzCommunityInfo/importExcel',
  exportXls = '/shequ/mzCommunityInfo/exportXls',
  mzVillageInfoList = '/shequ/mzCommunityInfo/listMzVillageInfoByMainId',
  mzVillageInfoSave='/shequ/mzCommunityInfo/addMzVillageInfo',
  mzVillageInfoEdit='/shequ/mzCommunityInfo/editMzVillageInfo',
  mzVillageInfoDelete = '/shequ/mzCommunityInfo/deleteMzVillageInfo',
  mzVillageInfoDeleteBatch = '/shequ/mzCommunityInfo/deleteBatchMzVillageInfo',
}
/**
 * 导出api
 * @param params
 */
export const getExportUrl = Api.exportXls;

/**
 * 导入api
 */
export const getImportUrl = Api.importExcel;
/**
 * 列表接口
 * @param params
 */
export const list = (params) =>
  defHttp.get({url: Api.list, params});

/**
 * 删除单个
 */
export const deleteOne = (params,handleSuccess) => {
  return defHttp.delete({url: Api.deleteOne, params}, {joinParamsToUrl: true}).then(() => {
    handleSuccess();
  });
}
/**
 * 批量删除
 * @param params
 */
export const batchDelete = (params, handleSuccess) => {
  createConfirm({
    iconType: 'warning',
    title: '确认删除',
    content: '是否删除选中数据',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      return defHttp.delete({url: Api.deleteBatch, data: params}, {joinParamsToUrl: true}).then(() => {
        handleSuccess();
      });
    }
  });
}
/**
 * 保存或者更新
 * @param params
 */
export const saveOrUpdate = (params, isUpdate) => {
  let url = isUpdate ? Api.edit : Api.save;
  return defHttp.post({url: url, params});
}
/**
 * 列表接口
 * @param params
 */
export const mzVillageInfoList = (params) => {
  if(params['mzCommunityId']){
    return defHttp.get({url: Api.mzVillageInfoList, params});
  }
  return Promise.resolve({});
}


/**
 * 删除单个
 */
export const mzVillageInfoDelete = (params,handleSuccess) => {
  return defHttp.delete({url: Api.mzVillageInfoDelete, params}, {joinParamsToUrl: true}).then(() => {
    handleSuccess();
  });
}
/**
 * 批量删除
 * @param params
 */
export const mzVillageInfoDeleteBatch = (params, handleSuccess) => {
  createConfirm({
    iconType: 'warning',
    title: '确认删除',
    content: '是否删除选中数据',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      return defHttp.delete({url: Api.mzVillageInfoDeleteBatch, data: params}, {joinParamsToUrl: true}).then(() => {
        handleSuccess();
      });
    }
  });
}
/**
 * 保存或者更新
 * @param params
 */
export const  mzVillageInfoSaveOrUpdate = (params, isUpdate) => {
  let url = isUpdate ? Api.mzVillageInfoEdit : Api.mzVillageInfoSave;
  return defHttp.post({url: url, params});
}
/**
 * 导入
 */
export const mzVillageInfoImportUrl = '/shequ/mzCommunityInfo/importMzVillageInfo'

/**
 * 导出
 */
export const mzVillageInfoExportXlsUrl = '/shequ/mzCommunityInfo/exportMzVillageInfo'
