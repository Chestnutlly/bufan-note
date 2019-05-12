<template>
    <div class="news-main">
        <div class="news">新闻管理</div>

        <!-- 列表 -->
        <el-card class="content" style="margin-top:30px;">
            <!-- 添加按钮 -->
            <el-button  type="primary" size="small" @click="goEdit()">添加</el-button>
            
            <!-- 列表信息内容展示 -->
            <el-row style="margin-top:30px;">
                <el-col :span="24">
                    <el-table class="data-table" :data="comNewsList" border style="width: 100%">
                        <el-table-column prop="index" type="index" width="100" fixed="">
                        </el-table-column> 
                        <el-table-column prop="id"
                            label="ID"
                            width="150"
                            show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                            prop="cover"
                            label="封面"
                            width="180">
                            <template slot-scope="scope">
                                <div class="pic">
                                    <el-image fit="content" :src="scope.row.cover" class="pics">
                                    </el-image>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="title"
                            label="标题"
                            width="200">
                        </el-table-column>
                        <el-table-column
                            prop="author"
                            label="作者"
                            width="120">
                        </el-table-column>
                        <el-table-column
                            prop="desc"
                            label="描述"
                            width="300">
                        </el-table-column>
                        
                        <!-- 操作 -->
                        <el-table-column
                            prop="right"
                            label="操作"
                            width="160"
                            fixed="right">
                            <template slot-scope="scope">
                            <el-button type="text" size="small" @click="goEdit(scope.row.id)">编辑</el-button>
                            <el-button  class="remove" type="text" size="small" @click="handleDelete(scope.row)">删除</el-button>
                            </template>
                        </el-table-column>

                    </el-table>

                    <!-- 分页 -->
                    <el-row class="pagination">
                        <el-col :span="10" :offset="12">
                            <my-pagination :page="page" @page-change="handlePageChange"></my-pagination>
                        </el-col>
                    </el-row>
                </el-col>

            </el-row>
        </el-card>

        <!-- 弹窗组件 -->
        <news-dialog :show.sync="dialog" ref="newsDialog"></news-dialog>
        <!-- 删除提示框 -->
        <el-dialog title="提示!" :visible.sync="delVisible" width="300px" center>
            <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delVisible = false">取 消</el-button>
                <el-button  @click="deleteRow">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import url from "@/api/url";
import newsApi from '@/api/xy/newsApi'
import NewsDialog from "./coms/Dialog.vue";
import pageMixin from "@/mixin/pageMixin";
import MyPagination from "@/components/common/Pagination";
export default {
    name:'News',
    components:{
        NewsDialog,
        MyPagination

    },
    mixins: [pageMixin],
    data() {
        return {
            newsList:[],     //新闻列表
            loading:false,
            dialog:false,
            delVisible:false,      //删除提示弹窗
            param:null,
        }
     },       
    created() {
        
        this.getNewsList();
    },
    //计算属性 用来展示
    computed:{
        //用来展示图片
        comNewsList(){
            //用来盛放处理后的
            var newList = [];
            //遍历每一项 并返回
            this.newsList.map(item=>{
                item.cover = url.upload + item.cover;
                newList.push(item);
            })
            return newList;

        }

    },
    methods: {
        //获取新闻列表
        getNewsList(){
            
            this.loading = true;   //加载
            newsApi.getNewsList({
                start:this.page.start,
                limit:this.page.limit,

            })
            .then(res=>{
                this.newsList = res.data.list;
                //获取分页信息
                this.page.total = res.data.totalRow;
                this.page.pageCount = res.data.totalPage;
                this.loading = false;
                console.log(this.newsList);
            })

        },
        //点击弹出弹窗,通过id
        goEdit(id){
            this.dialog = true;
            this.$refs.newsDialog.getNewsInfo(id);

        },
        //点击删除时弹出弹窗
        handleDelete(row){
            this.delVisible = true;
            this.param= row;
        },
        //点击删除提示框里的确定时
        deleteRow(){
            this.delVisible = false;
            //向后台发送删除请求
            var obj = {
                id:this.param.id
            }
            newsApi.getDelete(obj)
            .then(res=>{
                if(res.code){
                    this.$message.success('删除成功!');
                    //同时刷新父类
                    this.getNewsList();
                }else{
                    this.$message.success('删除失败!');
                }
            })

        },
        handlePageChange(){
            this.getNewsList();
        }
    },
            
        
    
}
</script>

<style lang="scss" scoped>

.pic{
    width: 300px;
    height: 150px;
    // background-color: yellow;
    .pics{
        width: 100%;
        height: 100%;
    }
}

</style>

