<template>
    <div class="dialog-main">
        <el-dialog :title="titleCom" :visible.sync="show" width="70%" :before-close="handleClose">
            <el-form label-width="100px" :rules="rules" :model="form" v-loading="loading">
                <div slot="header">
                    <span>新闻信息</span>
                </div>

                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="文章标题" prop="title" style="margin-top:20px;">
                            <el-input v-model="form.title"  clearable></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="10">
                        <el-form-item label="作者" style="margin-top:20px;">
                            <el-input v-model="form.author"  clearable></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="20">
                        <el-form-item label="文章描述" style="margin-top:20px;">
                            <el-input type="textarea" v-model="form.desc"></el-input>
                        </el-form-item>
                    </el-col>  

                    <el-col :span="8">
                        <el-form-item label="排序靠前"  style="margin-top:20px;" prop="type" cl>
                            <el-select v-model="form.hot" placeholder>
                                <el-option 
                                v-for="item in hotOption"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="15">
                        <el-form-item label="编辑方式"  style="margin-top:20px;"  prop="type">
                            <el-select v-model="form.type" placeholder>
                                <el-option 
                                v-for="item in typeOption"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="20">
                        <el-form-item label="上传封面"  style="margin-top:20px;width:1000px;">
                            <el-upload
                            class="upload-demo"
                            action="/admin/xy/upload/uploadImg"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :on-success="handleSuccess"
                            >
                            <el-image
                                fit="cover"
                                :src="img"
                                >
                            </el-image>
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                            </el-upload>
                            <!-- <img :src="img" alt> -->
                            
                        </el-form-item>
                    </el-col>


                </el-row>
            </el-form>
                <span class="text">文本内容:</span>
                <div class="markdown-wrapper">
                    <mavon-editor @change="handleMdChange" v-model="form.content1"/>
                    <!-- <mavon-editor v-model="form.content1?form.content1:'1'"></mavon-editor> -->
                </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose()">取 消</el-button>
                <el-button type="primary" @click="sub()">提 交</el-button>
            </span>
        
        
        </el-dialog>

    </div>
</template>

<script>
import url from "@/api/url";
import newsApi from '@/api/xy/newsApi'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { resetData, resetForm, handlePostObjArr } from "@/util/index";


export default {
    name:'Dialog',
    //接受父类传送过来的参数
    props:{
        show:Boolean,
        newsList: Array,  //父类传入数组

    },
    //富文本是个编辑器 mavonEditor 
    components:{
      mavonEditor 
    },
    data() {
        return {
            title:'',   //判断是新添还是编辑
            loading:false,
            img:'',
            form:{
                title:'',
                desc:'',
                author:'',
                cover:'',  //封面
                content1:'',
                content2:'',

            },
            hotOption:[
                {
                    label: "否",
                    value: "0"
                },
                {
                    label: "是",
                    value: "1"
                }
            ],
            typeOption:[
                {
                    label: "富文本",
                    value: "0"
                },
                {
                    label: "markdown",
                    value: "1"
                }
            ],
            //验证信息 跟着文档做
            rules: {
                title: [
                { required: true, message: "请输入文章名称", trigger: 'blur' },
                { min: 2, max: 5, message: "长度在 2 到 10 个字符", trigger: this.trigger }
                ],
                type: [{ required: true, message: "请选择编辑类型", trigger: 'change' }],
                
            },
            
        }
    },
    methods: {
        handleMdChange(value,render){
        // 保存解析后的html代码吧
        this.form.content2 = render;
        // console.log('value',value);
        // console.log('render',render);
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleSuccess(res, file, fileList) {
            // 绝对路径 为了显示 比如: http://59.110.138.169/media/20190508092540.jpg
            this.img = url.upload + res.url; 
            console.log(this.img); 
            this.form.cover = res.url;   // 建议用相对路径  media/20190508092540.jpg
        },
        //关闭弹窗
        handleClose() {
            this.$emit("update:show", false);
            //重置表单
            resetForm(this);
        },
        sub(){
            var api ="";
            //如果有id 则为修改
            if(this.form.id){
                api = newsApi.update;
            }else{
                api = newsApi.save;
            }
            //向后台发送数据
            api({
                xyNews:this.form
            }).then(res=>{
                //如果成功,则提示
                if(res.code == "success"){
                    this.$message({
                        type:"success",
                        message:"保存成功"
                    });
                    //关闭弹窗
                    this.handleClose();
                    //刷新父类
                    this.$parent.getNewsList();
                }else{
                    this.$message.error('保存失败');
                }

            })
        },
        //通过id获取详情
        getNewsInfo(id){
            if(id){
                this.loading = true;
                this.title = "编辑";
                this.form.id = id;
                newsApi.getNewsDetail({
                    id
                }).then(res=>{
                    if(!res.data.content1){
                        res.data.content1 = `null`
                    }
                    this.form = res.data;
                    this.loading = false;
                    this.img = url.upload + this.form.cover;
                });
            }else{
                this.title = "新增";
            }

        }
        
    },
    //对data中的数据不能直接修改 要通过计算属性
    computed:{
        titleCom() {
            return this.title;
        }
    }
}
</script>

<style lang="scss" scoped>
.markdown-wrapper{
    width: 900px;
    margin-left: 50px;
    margin-top: 30px;
}
.upload-demo ::v-deep.el-upload--text {
  width: auto;
  height: auto;
  border: none;
}
.text{
    margin-left: 30px;
}

</style>

