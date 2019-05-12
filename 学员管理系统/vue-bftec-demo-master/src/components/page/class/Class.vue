<template>
    <div class="class-main">
        <!-- 头部搜索组件 -->
        <search-bar @search="handleSearch" :classList="classList"></search-bar>

        <div class="class">班级信息</div>
        <!-- 学生信息内容 表单 -->
        <el-card class="content" style="margin-top:30px;">
            <!-- 添加按钮 -->
            <el-button  type="primary" size="small" @click="goEdit()">添加</el-button>

            <!-- 信息表单 -->
            <el-row>
                <el-col :span="24">
                    <el-table class="data-table" :data="classList" border style="width: 100%">
                        <el-table-column prop="index" type="index" width="100">
                        </el-table-column>
                        <el-table-column prop="id"
                            label="ID"
                            width="180"
                            show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                            prop="className"
                            label="班级"
                            width="120">
                        </el-table-column>
                        <el-table-column
                            prop="type"
                            label="班级类型"
                            width="120">
                        </el-table-column>
                        <el-table-column
                            prop="startTime"
                            label="开租时间"
                            width="150">
                        </el-table-column>
                        <el-table-column
                            prop="endTime"
                            label="到期时间"
                            width="150">
                        </el-table-column>
                        <el-table-column
                            prop="desc"
                            label="备注"
                            width="216">
                        </el-table-column>
                        <el-table-column
                            prop="right"
                            label="操作"
                            width="150">
                            <!-- 操作 -->
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
                <!-- <el-col :span="12"></el-col> -->
                
            </el-row>
            
        </el-card>

        <!-- 弹窗组件 -->
        <class-detail :show.sync="dialog" ref="classDetail"></class-detail>
        
        <!-- 删除提示框 -->
        <el-dialog title="提示!" :visible.sync="delVisible" width="300px" center>
            <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delVisible = false">取 消</el-button>
                <el-button  @click="deleteRow2">确 定</el-button>
            </span>
        </el-dialog>

        

    </div>
</template>

<script>

import classApi from '@/api/xy/classApi'
// import dormApi from '@/api/xy/dormApi';
import SearchBar from "./coms/SearchBar";   //引入搜索组件
import ClassDetail from "./coms/Detail"; 
import pageMixin from "@/mixin/pageMixin";
import MyPagination from "@/components/common/Pagination"; 
import lodash from "lodash"
export default {
    name:'Class',
    components:{
        SearchBar,
        ClassDetail,
        MyPagination
    },
    mixins: [pageMixin],
    data() {
        return {
            classList:[],        //班级信息列表
            loading:false,
            dialog:false,
            param:null,
            delVisible:false,  //删除提示弹窗
            dormList:[],         //宿舍信息      
        }
    },
    created() {
        this.getClassList();
        // this.initBaseInfo();
    },
    methods:{
        //获取班级列表信息
        getClassList(searchForm = {}){
            classApi.getClassList({
                start:this.page.start,
                limit:this.page.limit,
            ..._.pickBy(searchForm, v => v)   //查询
            })
            .then(res=>{
                this.classList = res.data.list
                //获取分页信息
                this.page.total = res.data.totalRow;
                this.page.pageCount = res.data.totalPage;
                console.log(res.data);
            })
        },
        
        //点击弹出弹窗,通过id
        goEdit(id){
            this.dialog = true;
            //父类请求子类获取详情的方法
            this.$refs.classDetail.getClassInfo(id);
        },
        //点击搜索时,子类向父类发送的请求
        handleSearch(form){
            this.getClassList(form);
        },
        //点击删除时弹出弹窗
        handleDelete(row){
            this.delVisible = true;
            this.param = row;
        },
        //确定删除
        deleteRow2(){
            this.delVisible = false;
            //向后台发送删除请求
            var obj = {
                id:this.param.id
            }
            classApi.delClassList2(obj)
            .then(res=>{
                console.log(res)
                if(res.code){
                    this.$message.success('删除成功');
                    //同时刷新父类
                    this.getClassList();
                }
            })
        },
        //子类向父类发送的分页请求
        handlePageChange(){
            this.getClassList();
        }


    }
}
</script>

<style lang="scss" scoped>
.class{
    font-size: 18px;
    margin-top: 30px;
}





</style>

