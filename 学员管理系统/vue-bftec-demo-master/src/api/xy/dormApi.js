import request from '@/api/request'

//获取宿舍列表
function getDormList(data){
  // console.log(data,'chaxun')
  return request ({
    url: '/admin/xy/dorm/list',
    method:'get',
    data
  })
}
//获取宿舍详细列表
function getDormDetail(data){
  return request ({
    url: '/admin/xy/dorm/detail',
    method:'get',
    data
  })
}

//更新
function updateDormList(data){
  return request ({
    url: '/admin/xy/dorm/update',
    method:'post',
    data
  })
}
//新增
function saveDormList(data){
  return request ({
    url: '/admin/xy/dorm/save',
    method:'post',
    data
  })
}
//删除
function delDormList(data){
  return request ({
    url: '/admin/xy/dorm/del',
    method:'get',
    data
  })
}

export default {
  getDormList,
  getDormDetail,
  updateDormList,
  saveDormList,
  delDormList
}