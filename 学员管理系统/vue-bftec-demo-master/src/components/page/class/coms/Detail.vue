<template>
    <div class="class-detail-main">
        <el-dialog :title="titleCom" :visible.sync="show" width="70%" :before-close="handleClose">
            <el-form label-width="100px" :rules="rules" :model="form" v-loading="loading">
                <el-card class="form-card" shadow="never">
                    <div slot="header">
                        <span>班级信息</span>
                    </div>

                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-form-item label="班级名称" prop="className" style="margin-top:20px;">
                                <el-input class="name-input" v-model="form.className" clearable></el-input>
                            </el-form-item>
                        </el-col>

                        <el-col :span="10">
                            <el-form-item label="类型" style="margin-top:20px;">
                                <el-select v-model="form.type" placeholder>
                                    <el-option 
                                    v-for="item in sexOption"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"></el-option>
                                    <!-- <el-option label="UI设计班" value="UI"></el-option> -->
                                </el-select>
                            </el-form-item>
                        </el-col>

                        <el-col :span="8">
                            <el-form-item label="开班时间" style="margin-top:20px;">
                                <el-date-picker
                                value-format="yyyy-MM-dd"
                                v-model="form.startTime"
                                type="date"
                                placeholder="选择日期"
                                ></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="结束时间" style="margin-top:20px;">
                                <el-date-picker
                                value-format="yyyy-MM-dd"
                                v-model="form.endTime"
                                type="date"
                                placeholder="选择日期"
                                ></el-date-picker>
                            </el-form-item>
                        </el-col>

                        <el-col :span="8">
                            <el-form-item label="班级描述" style="margin-top:20px;">
                                <el-input type="textarea" v-model="form.desc" class="desc"></el-input>
                            </el-form-item>
                        </el-col>

                    </el-row>
                </el-card>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button  @click="cancelSubmit">取 消</el-button>
                <el-button type="primary" @click="submit">确 定</el-button>
            </span>

        </el-dialog>

    </div>
</template>


<script>
import classApi from '@/api/xy/classApi'
import { resetData, resetForm, handlePostObjArr } from "@/util/index";

export default {
    name:'ClassDetail',
    props:{
        show:Boolean,
        classList: Array,  //父类传入数组
        // dormList:Array,
    },
    data() {
        return {
            title:'hha',  //是编辑还是查看
            //加载
            loading: false,
            form:{
                className: '',
                type: '0',
                desc: ''

            }, 
            //验证信息 跟着文档做
            rules: {
                className: [
                { required: true, message: "请输入班级名称", trigger: this.trigger },
                { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: this.trigger }
                ],
                type: [{ required: true, message: "请选择班级类型", trigger: this.trigger }],
                
            },
            //选择班级类型
            sexOption: [
                {
                    label: "Web前端",
                    value: "0"
                },
                {
                    label: "UI设计",
                    value: "1"
                }
            ],
            
        }
    },
    //对data中的数据不能直接修改 要通过计算属性
    computed:{
        titleCom() {
            return this.title;
        }
    },
    methods: {
        //关闭弹窗
        handleClose() {
            this.$emit("update:show", false);
            //重置表单
            resetForm(this);
        },
        //通过id获取详情
        getClassInfo(id){
            if(id){
                this.loading = true;
                this.title = "编辑";
                this.form.id = id;
                classApi.getClassDetail({
                    id
                }).then(res=>{
                    this.form = res.data;
                    console.log(this.form);
                    this.loading = false;
                });
            }else{
                this.title = "新增";
            }
        },
        //取消
        cancelSubmit(){
            this.$confirm("尚未保存,是否继续?","提示",{
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type:"waring"
            }).then(()=>{
                this.handleClose();
            });
        },
        //点击确定保存
        submit(){
            var api ="";
            //如果有id 则为修改
            if(this.form.id){
                api = classApi.updateClassList;
                console.log('haha===========');
            }else{
                api = classApi.saveClassList;
            }
            console.log(this.form)
            api({
                xyClassInfo:this.form,
            }).then(res=>{
                //如果成功,则提示
                if(res.code == true){
                    this.$message({
                        type:"success",
                        message:"保存成功"
                    });
                    //关闭弹窗
                    this.handleClose();
                    //刷新父类
                    this.$parent.getClassList();
                }else{
                    this.$message.error('保存失败');
                }

            })
        }

    },
}
</script>

<style lang="scss" scoped>
.desc{
    width: 800px;
}
</style>

