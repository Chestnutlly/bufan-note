<template>
    <div class="pagination-main">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page.start"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="page.limit"   
            layout="total, sizes, prev, pager, next, jumper"
            :total="page.total">
      </el-pagination>

    </div>
</template>

<script>
export default {
    name:'Pagination',
    props:{
        page:Object   //父类传进来的page
    },
    data() {
        return {
            
        }
    },
    methods:{
        //每页有多少条数据
        handleSizeChange(v){
            this.page.size = v;   //size就是limit
            //向父类发送请求
            this.$emit('page-change');
        },
        
        //第几页的数据
        handleCurrentChange(v){
            this.page.start = v;
            this.$emit('page-change')
        }

    }
}
</script>
