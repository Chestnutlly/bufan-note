import request from '@/api/request'

//获取表单列表
function getClassList(data){
  return request ({
    url: '/admin/xy/clazz/list',
    method:'get',
    data
  })
}

//获取班级详细列表
function getClassDetail(data){
  return request ({
    url: '/admin/xy/clazz/detail',
    method:'get',
    data
  })
}

//更新
function updateClassList(data){
  return request ({
    url: '/admin/xy/clazz/update',
    method:'post',
    data
  })
}
//新增
function saveClassList(data){
  return request ({
    url: '/admin/xy/clazz/save',
    method:'post',
    data
  })
}
//删除
function delClassList2(data){
  return request ({
    url: '/admin/xy/clazz/del',
    method:'get',
    data
  })
}
export default {
  getClassList,
  getClassDetail,
  updateClassList,
  saveClassList,
  delClassList2
}