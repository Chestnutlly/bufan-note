<template>
    <div class="student-main">
        <!-- 头部搜索组件 -->
        <search-bar @search="handleSearch" :classList="classList" :dormList="dormList"></search-bar>

        <!-- 学生信息内容 表单 -->
        <el-card class="content" >
            <!-- 添加按钮 -->
            <el-button  type="primary" size="small" @click="goEdit()">添加</el-button>

            <!-- 信息表单 -->
            <el-row>
                <el-col :span="24">
                    <el-table class="data-table" :data="studentList" border style="width: 100%">
                        <el-table-column prop="index" show-overflow-tooltip type="index" width="50" fixed>
                        </el-table-column>
                        <!-- <el-table-column prop="id"
                            label="ID"
                            width="150"
                            show-overflow-tooltip>
                        </el-table-column> -->
                        <el-table-column
                            show-overflow-tooltip
                            fixed
                            prop="name"
                            label="姓名"
                            width="150">
                        </el-table-column>
                        <el-table-column
                            prop="sex"
                            label="性别"
                            width="120">
                        </el-table-column>
                        
                        <el-table-column
                            prop="school"
                            label="毕业院校"
                            width="200">
                        </el-table-column>
                        <el-table-column
                            prop="tel"
                            label="电话"
                            width="150">
                        </el-table-column>
                        <el-table-column
                            prop="clazzId"
                            label="班级"
                            width="120">
                        </el-table-column>
                        <el-table-column
                            show-overflow-tooltip
                            prop="dormId"
                            label="宿舍"
                            width="120">
                        </el-table-column>
                        
                        <el-table-column
                            prop="qq"
                            label="QQ/微信"
                            width="150">
                            <template slot-scope="scope">
                                {{scope.row.wx||'-'}} / {{scope.row.qq||'-'}}    
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="status"
                            label="工作"
                            width="120">
                            <template slot-scope="scope">
                                {{scope.row.status}}==>{{scope.row.job}}   
                            </template>
                        </el-table-column>
                        <el-table-column
                            fixed="right"
                            prop="right"
                            label="操作"
                            width="130">
                            <!-- 操作 -->
                            <template slot-scope="scope">
                            <el-button type="text" size="small" @click="goEdit(scope.row.id)">查看</el-button>
                            <el-button @click="goEdit(scope.row.id)" type="text" size="small">编辑</el-button>
                            <el-button  class="remove" type="text" size="small" @click="handleDelete(scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <!-- 分页 -->
                    <el-row class="pagination">
                        <el-col :span="10" :offset="14">
                        <my-pagination :page="page" @page-change="handlePageChange"></my-pagination>
                        </el-col>
                    </el-row>

                </el-col>
                <!-- <el-col :span="12"></el-col> -->
            </el-row>
                        
        </el-card>

        <!-- 弹窗组件 -->
        <student-detail ref="studentDetail" :show.sync="dialog" :classList="classList" :dormList="dormList"></student-detail>

        <!-- 删除提示框 -->
        <el-dialog title="提示!" :visible.sync="delVisible" width="300px" center>
            <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteRow">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>

import studentApi from "@/api/xy/studentApi";
import dormApi from '@/api/xy/dormApi';
import classApi from '@/api/xy/classApi';

import StudentDetail from "./coms/Detail";  //引入弹窗组件
import SearchBar from "./coms/SearchBar";    //引入搜索组件
import pageMixin from "@/mixin/pageMixin";
import MyPagination from "@/components/common/Pagination"; 
// import {CodeToText} from "element-china-area-data"
export default {
    name:'Student',
    components:{
        StudentDetail ,  //弹窗组件
        SearchBar,
        MyPagination  
    },
    mixins: [pageMixin],   //混入的方式 引入page数据 因为每一页都有分页 拿出来写省略了代码量
     data() {
        return {
            loading:false,
            dialog:false,  //默认弹窗不显示
            search:{
                username:'',
                clazz:'',
                startTime:''
            },
            //学生列表信息
            studentList:[

            ],
            classList:[],//班级信息,
            dormList:[], //宿舍信息

            radio:'1' ,//默认1
            delVisible: false,      //是否删除提示框
           
            param: null     //传到后台的对象
        }
    },
    created() {
        this.getStudentList(); 
        this.initBaseInfo();
    },
    
    methods:{
        //获取学生列表信息
        //searchForm={} es6 预定义参数 如果有参数,取参数;如果没有传参,取空.
        getStudentList(searchForm = {}){
            this.loading = true; //加载
            studentApi.getStudentList({
                //获取初始化默认的开始页信息和限制条数 自己设置
                start:this.page.start,
                limit:this.page.limit,
                //lodash方法,用于过滤符合条件的属性
                // _.pickBy({a:12,b:false},v=>v==true)  ==> {a:12}
                //... 展开运算符 es6 新属性
                //var obj = {a:xx,b:xx,c:xx} ==>  { d: xx, ...obj} ==> {d:xx,a:xx,b:xx,c:xx}
                ..._.pickBy(searchForm, v => v)
            })
            .then(res=>{
                console.log(res,'jieguo')
                this.studentList = res.data.list;
                //获取分页信息
                this.page.total = res.data.totalRow;
                this.page.pageCount = res.data.totalPage;

                this.loading = false
            })
        },
        //获取班级 宿舍信息
        initBaseInfo(){
            dormApi.getDormList()
                .then(res=>{
                    this.dormList = res.data.list
                })
            classApi.getClassList()
                .then(res=>{
                    this.classList = res.data.list
                })
        },
        
        
        //父类和子组件通信弹出编辑弹窗
        goEdit(id){
            // 弹出框之后 内容显示到dialog上
            this.dialog = true; 
            // 父类请求子类的方法
            this.$refs.studentDetail.getStudentInfo(id) 
            

        },
        //获取班级和宿舍信息
        initBaseInfo(){
        dormApi.getDormList()
            .then(res=>{
                this.dormList = res.data.list
            })
        classApi.getClassList()
            .then(res=>{
                this.classList = res.data.list
            })
    },
        
        //弹出提示是否删除弹窗
        handleDelete(row) {
            this.delVisible = true;
            this.param = row;
        },
        //确定删除
        deleteRow(){
                this.delVisible = false;
                //向后台发送删除请求
                var obj = {
                    id: this.param.id
                }
                studentApi.delStudent(obj)
                .then(res=>{
                    console.log(res);
                    if(res.code){
                        this.$message.success('删除成功');
                        //同时删除完刷新父类
                        this.getStudentList();
                    }
                })
                
            },
            //点击搜索时,子类向父类发送的请求
            handleSearch(form){
                this.getStudentList(form);
            },
            //子类向父类发送的分页请求
            handlePageChange(){
                this.getStudentList();
            }

        }
    }

    

</script>

<style lang="scss" scoped>
.search-block{
    margin-top: 20px;
    .search-input{
        width: 250px;
        margin-right: 30px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    //穿透的方法修改子类组件的样式
    ::v-deep.el-card__body{
        position: relative;
        .btn-search{
            position: absolute;
            right: 40px;
            top: 40px;
        }

    }


}
.content{
    margin-top:30px;
}
.remove{
    color: red;
}

.sex{
    margin-left: 40px;
    height: 40px;
    
}
.del-dialog-cnt{
    font-size: 16px;
    text-align: center
}

.pagination {
  margin: 30px;
}

</style>

