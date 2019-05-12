import request from '@/api/request'

//获取宿舍列表
function getNewsList(data){
  // console.log(data,'chaxun')
  return request ({
    url: '/admin/xy/news/list',
    method:'get',
    data
  })
}

//获取新闻详细列表
function getNewsDetail(data){
    return request ({
      url: '/admin/xy/news/detail',
      method:'get',
      data
    })
  }

  //新添加
  function save(data){
    return request ({
      url: '/admin/xy/news/save',
      method:'post',
      data
    })
  }

//更新
function update(data){
    return request ({
      url: '/admin/xy/news/update',
      method:'post',
      data
    })
  }

//删除
function getDelete(data){
    return request ({
      url: '/admin/xy/news/del',
      method:'get',
      data
    })
  }
export default {
    getNewsList,
    getNewsDetail,
    save,
    update,
    getDelete
  }