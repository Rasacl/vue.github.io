<template>
<div>
   <div class="back">
      <el-breadcrumb separator="/" class="backto">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">系统管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>角色管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
   <div class="inputs">
      <el-form :model="form" class="select">
        <el-form-item label="应用程序">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-button type="primary" style="height: 40px" @click="dialogTableVisible1 = true">新增</el-button>
      </el-form>
  </div>
  <div class="list" ref="users">
     <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="名称" align="center">
        </el-table-column>
        <el-table-column prop="token" label="权限集合" align="left" width="600">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
               <el-button
            type="text"
             @click="dialogFormVisible = true"
              >修改</el-button
            >
            <el-button type="text" 
             @click.native.prevent="deleteRow(scope.$index, tableData)"
              size="small"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="next">
        <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
      </div>
  </div>
</div>
</template>


<script>
export default {
    data(){
       return{
      
            form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
         usersheight:'',
         tableData: [
        {
          name: "超级管理员",
          token:"首页-数据查询-数据维护-统计报表-视频监视-基础信息-系统管理",
        },
        {
          name: "执行人员",
          token:"首页-数据查询-数据维护-统计报表",
        },
       {
          name: "行政管理人员",
          token:"首页-数据查询-数据维护-统计报表-视频监视-基础信息"
          },
      ],
       dialogTableVisible: false,
        dialogFormVisible: false,
       }
    },
    methods:{
           changeHeight(usersheight) {
      this.$refs.users.style.height = usersheight - 228 + "px";
     },
     deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    },
   mounted() {
    this.usersheight = `${document.documentElement.clientHeight}`;
    const that = this;
    window.onresize = () => {
      return (() => {
        window.usersheight = document.documentElement.clientHeight;
        that.usersheight = window.usersheight;
      })();
    };
  },
  watch: {
    // 如果 `usersheight ` 发生改变，这个函数就会运行
    usersheight: function (val) {
      if (!this.timer) {
        this.usersheight = val;
        this.changeHeight(this.usersheight);
        console.log(val);
        this.timer = true;
        let that = this;
        setTimeout(function () {
          //频繁触发 resize 函数，会导致页面很卡
          that.timer = false;
        }, 10);
      }
    },
  },
}
</script>


<style lang="less" scoped>
.back {
  width: 100%;
  height: 48px;
  background: #fff;
  margin-bottom: 10px;
}
.back /deep/ .backto {
  margin-left: 25px;
  line-height: 48px;
}
.inputs {
  width: 98%;
  background: #fff;
  display: flex;
  margin-left: 1%;
  height: 80px;
  align-items: center;
  padding-left: 10px;
  box-sizing: border-box;
  margin-bottom: 10px;
}
.inputs /deep/ .el-form {
  display: flex;
  width: 100%;
  line-height: 80px;
}
.inputs /deep/ .el-form-item__label {
  text-align: left;
  padding: 0 10px;
}
.inputs /deep/ .el-form-item {
  display: flex;
  margin-bottom: 0;
}
.inputs /deep/ .el-form-item {
  margin-left: 0;
}
.inputs /deep/ .el-button {
  margin-left: 15px;
}
.list {
  height: 100%;
  margin: 0 1%;
  background: #fff;
}

</style>