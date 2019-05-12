<template>
    <div class="student-search-mian">
        <el-card shadow="never">
            <div slot="header">
                <span>搜索条件</span>
            </div>
            <el-row class="search-row" :gutter="30">
                <!-- <el-col :span="4">
                    <el-input v-model="form.name" placeholder="姓名,支持模糊查询"></el-input>
                </el-col> -->
                <el-col :span="4">
                    <el-select clearable  v-model="form.className" placeholder="选择班级">
                        <el-option v-for="item in classList"
                            :key="item.id"
                            :label="item.className"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="4">
                    <el-select clearable  v-model="form.type" placeholder="班级类型">
                        <el-option v-for="item in dormList"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="12">
                    <!-- 设置date 类型  后台方便解析 -->
                    <el-date-picker value-format="yyyy-MM-dd" v-model="form.startTime" type="date" placeholder="入学开始范围">
                    </el-date-picker>-
                    <el-date-picker value-format="yyyy-MM-dd" v-model="form.endTime" type="date" placeholder="入学截止范围">
                    </el-date-picker>
                </el-col>
            </el-row>
            <el-row class="search-btns-row" :gutter="30">
                
                <el-col :span="4" :offset="20">
                    <el-button-group>
                        <el-button type="primary" size="small" @click="search">查询</el-button>
                        <el-button size="small" @click="resetSearch">重置</el-button>

                    </el-button-group>
                </el-col>
                
            </el-row>
        </el-card>
    </div>
</template>

<script>

import classApi from '@/api/xy/classApi'
import {resetData} from '@/util/index'

export default {
    name:'ClassSearch',
    props:{
        classList:Array,
        dormList:Array
    },
    data() {
        return {
            form:{
                className: '',
                type: '0',
                desc: ''
            }
            
        }
    },
    created(){

    },
    methods:{
        //点击查询
        search(){
            this.$emit('search',this.form)
        },
        //点击重置
        resetSearch(){
            resetData(this,'form')
            this.$emit('search');
        }
    }
}
</script>

<style lang="scss" scoped>
.student-search-mian{
    margin-top: 20px;    
}

</style>