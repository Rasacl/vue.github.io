<template>
  <div>
    <div class="back">
      <el-breadcrumb separator="/" class="backto">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">系统管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="inputs">
        <p class="names">用户名</p>
        <el-input v-model="input" placeholder="请输入内容" style="width:220px" class="search"></el-input>
         <el-button type="primary" style="height:40px">查询</el-button>
         <router-link to="/user/add">
          <el-button type="primary" style="height:40px" class="button" @click="open">新增</el-button>
         </router-link>
    </div>
    <div class="lis" ref="data">
         <el-table
      :data="tableData"
      style="width: 99%" class="listall">
      <el-table-column align="center" class="first"
        prop="name"
        label="姓名"
        width="155">
      </el-table-column>
      <el-table-column
        prop="username"
        label="姓名"
        width="155">
      </el-table-column>
      <el-table-column
        prop="ipone"
        label="手机号"
        width="155">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="155">
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态"
        width="155">
      </el-table-column>
      <el-table-column
        align="center"
        prop="time"
        label="注册时间"
        width="165">
      </el-table-column>
      <el-table-column
        align="center"
        label="操作"
        width="165">
         <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
        <el-button type="text" size="small">恢复密码</el-button>
         <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">删除</el-button>
      </template>
      </el-table-column>
    </el-table>
    <div class="next">
        <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
    data() {
    return {
           dataHeight:'',
           input: '',
          tableData: [{
            time: '2016-05-02 10:15:40',
            name: '王小虎',
            username:'猫咪',
            ipone:'122344',
            email:'qwe@123',
            state:'使用中',
          }, {
            time: '2016-05-02 10:15:40',
            name: '王小虎',
            username:'猫咪',
            ipone:'122344',
            email:'qwe@123',
            state:'使用中',
          }, {
             time: '2016-05-02 10:15:40',
            name: '王小虎',
            username:'猫咪',
            ipone:'122344',
            email:'qwe@123',
            state:'使用中',
          }, {
              time: '2016-05-02 10:15:40',
            name: '王小虎',
            username:'猫咪',
            ipone:'122344',
            email:'qwe@123',
            state:'使用中',
          }]
    }
  },
  methods: {
      handleClick(row) {
        console.log(row);
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
       changeHeight(dataHeight){
              this.$refs.data.style.height = (dataHeight - 228) + 'px';
         },
         open() {
        const h = this.$createElement;
        this.$msgbox({
          title: '消息',
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          showCancelButton: true,
          cancelButtonText: '取消',
          confirmButtonText: '确定',
          
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      }
    },
     mounted(){
       this.dataHeight = `${document.documentElement.clientHeight}`;
       const that = this;
       window.onresize = () => {
           return(() => {
               window.dataHeight = document.documentElement.clientHeight;
               that.dataHeight = window.dataHeight;
           })()
       }
    },
    watch: {
      // 如果 `dataHeight ` 发生改变，这个函数就会运行 
      dataHeight :function(val) {
        if(!this.timer) {
          this.dataHeight = val
          this.changeHeight(this.dataHeight)
          console.log(val)
          this.timer = true
          let that = this
          setTimeout(function (){//频繁触发 resize 函数，会导致页面很卡
            that.timer = false
          },10)
        }
      }
  }
};
</script>

<style lang="less" scoped>
 .back{
     width: 100%;
     height: 48px;
    background: #fff;
    margin-bottom: 10px;
 }
 .back /deep/ .backto{
    margin-left: 25px;
    line-height: 48px;
 }
 .inputs{
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
 .inputs /deep/ .button{
     margin-left: 10px;
 }
 .names{
     font-size: 17px;
     margin-right: 7px;
 }
 .search{
     margin-right: 10px;
 }
 .lis{
     width: 98%;
     height: 100%;
     margin-left: 1%;
     background: #fff;
     }
 .lis /deep/ .first{
        background: #bfbfbf;          
     }
 .next{
     margin-left: 6px;
 }

</style>
