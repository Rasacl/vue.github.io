<template>
<div>
   <div class="back">
      <el-breadcrumb separator="/" class="backto">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">系统管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
   <div class="inputs">
      <el-form :model="form" class="select">
        <el-form-item label="应用程序">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户名">
          <el-select v-model="form.region" placeholder="请输入">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-button type="primary" style="height: 40px">查询</el-button>
        <el-button type="primary" style="height: 40px">添加用户</el-button>
      </el-form>
  </div>
  <div class="list" ref="auth">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="icon" label="图标" align="center">
        </el-table-column>
        <el-table-column prop="name" label="名称" align="center">
        </el-table-column>
        <el-table-column prop="lis" label="排序" align="center">
        </el-table-column>
        <el-table-column prop="adress" label="地址" align="center">
        </el-table-column>
        <el-table-column prop="up" label="是否需要登陆" align="center">
        </el-table-column>
        <el-table-column prop="token" label="是否需要token" align="center">
        </el-table-column>
        <el-table-column prop="time" label="创建时间" align="center">
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
        authheight:'',
         tableData: [
        {
          icon:"enen",
          name: "首页",
          lis:1,
          adress:"/User",
          up:"是",
          token:"是",
          time:"2020-10-30",
        },
        {
           icon:"enen",
          name: "首页",
          lis:1,
          adress:"/User",
          up:"是",
          token:"是",
          time:"2020-10-30",
        },
        {
           icon:"enen",
          name: "首页",
          lis:1,
          adress:"/User",
          up:"是",
          token:"是",
          time:"2020-10-30",
        },
        {
          icon:"enen",
          name: "首页",
          lis:1,
          adress:"/User",
          up:"是",
          token:"是",
          time:"2020-10-30",
        },
      ],
       dialogTableVisible: false,
        dialogFormVisible: false,
        }
       },
   methods:{
         changeHeight(authheight) {
      this.$refs.auth.style.height = authheight - 228 + "px";
     },
     deleteRow(index, rows) {
      rows.splice(index, 1);
   }
   },
    mounted() {
    this.authheight = `${document.documentElement.clientHeight}`;
    const that = this;
    window.onresize = () => {
      return (() => {
        window.authheight = document.documentElement.clientHeight;
        that.authheight = window.authheight;
      })();
    };
  },
  watch: {
    // 如果 `authheight ` 发生改变，这个函数就会运行
    authheight: function (val) {
      if (!this.timer) {
        this.authheight = val;
        this.changeHeight(this.authheight);
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