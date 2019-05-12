import request from '@/api/request'

//执行登录
function getStudentList(data){
  return request ({
    url: '/admin/xy/student/list',
    method:'get',
    data
  })
}

//执行更新
function getUpDate(obj){
  console.log(obj,'update~~')
  return request ({
    url: '/admin/xy/student/update',
    method:'post',
    data:{
      xyUser:obj,
    }
  })

}

//执行保存
function getSave(obj){
  console.log(obj)
  return request ({
    url: '/admin/xy/student/save',
    method:'post',
    data:{
      xyUser:obj,
    }
  })

}

//执行删除
function getDelete(id){
  console.log(id)
  return request ({
    url: '/admin/xy/student/del?id='+id,
    method:'get',
    // data:{
    //   xyApi:id,
    // }
  })

}


export default {
  getStudentList,
  getUpDate,
  getDelete,
  getSave
}