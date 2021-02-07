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
        <el-button type="primary" style="height: 40px" @click="dialogFormVisible1 = true">新增</el-button>
      </el-form>
      <div class="uesradd">
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible1">
  <el-form :model="form1">
     <el-form-item>
        <span>名称</span>
      <el-input v-model="form1.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
        <span>地址</span>
      <el-input v-model="form1.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item class="select">
        <span>是否需要登陆</span>
      <el-select v-model="form1.region" placeholder="请选择">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="select">
        <span>是否需要token</span>
      <el-select v-model="form1.region" placeholder="请选择">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="select">
        <span>排序</span>
      <el-select v-model="form1.region" placeholder="请选择">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="time">
        <span>创建时间</span>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    </el-form-item>
    <el-form-item class="last">
      
      <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList">
   <p class="text">权限图标</p>
  <el-button size="small" type="primary" class="up">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogFormVisible1 = false">保存</el-button>
    <el-button @click="dialogFormVisible1 = false">取消</el-button>
  </div>
</el-dialog>
      </div>
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
       <div class="userserr">
 <el-dialog title="编辑权限数据数据基本信息" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item>
        <span>名称</span>
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
        <span>地址</span>
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item class="select">
        <span>是否需要登陆</span>
      <el-select v-model="form.region" placeholder="请选择">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="select">
        <span>是否需要token</span>
      <el-select v-model="form.region" placeholder="请选择">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="select">
        <span>排序</span>
      <el-select v-model="form.region" placeholder="请选择">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="time">
        <span>创建时间</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    </el-form-item>
    <el-form-item class="last">
      
      <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList">
   <p class="text">权限图标</p>
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogFormVisible = false">保存</el-button>
    <el-button @click="dialogFormVisible = false">取 消</el-button>
  </div>
</el-dialog>
      </div>
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
          pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
           
          value1:'',
          value2:'',
           fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
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
        form1: {
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
         dialogTableVisible1: false,
        dialogFormVisible1: false,
        }
       },
   methods:{
         changeHeight(authheight) {
      this.$refs.auth.style.height = authheight - 228 + "px";
     },
     deleteRow(index, rows) {
      rows.splice(index, 1);
   },
   handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
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
.userserr /deep/ .el-dialog__body{
    padding: 0 20px;
}
.userserr /deep/ .el-form{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.userserr /deep/ .el-form-item{
    width: 48%;
    margin-right: 10px;
    margin-bottom: 0;
}
.userserr .select /deep/ .el-form-item__content{
    display: flex;
    flex-wrap: wrap;
}
.userserr .select /deep/ .el-select {
    width: 100%;
}
.userserr .time /deep/ .el-form-item__content{
    display: flex;
    flex-wrap: wrap;
    line-height: 35px;
}
.userserr .time /deep/ .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 100%;
}
.userserr /deep/ .el-input__inner{
    height: 35px;
}
.userserr .dialog-footer{
    margin-top: 40px;
    text-align: center;
}
.list /deep/ .last{
   width: 100%;
    background: #eaeaea;
    margin-top: 10px;
    padding: 10px 15px;
}
.list /deep/ .text{
   text-align: left;
   height: 30px;
}
.uesradd /deep/ .el-dialog__body{
    padding: 0 20px;
}
.uesradd /deep/ .el-form{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.uesradd /deep/ .el-form-item{
    width: 48%;
    margin-right: 10px;
    margin-bottom: 0;
}
.uesradd .select /deep/ .el-form-item__content{
    display: flex;
    flex-wrap: wrap;
}
.uesradd .select /deep/ .el-select {
    width: 100%;
}
.uesradd /deep/ .el-form-item__content{
    display: flex;
    flex-wrap: wrap;
    line-height: 35px;
    width: 100%;
}
.uesradd .time /deep/ .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 100%;
}
.uesradd /deep/ .el-input__inner{
    height: 35px;
}
.uesradd .dialog-footer{
    margin-top: 40px;
    text-align: center;
}
.inputs /deep/ .last{
   width: 100%;
    background: #eaeaea;
    margin-top: 10px;
    padding: 10px 15px;
}
.inputs /deep/ .text{
   text-align: left;
   height: 30px;
}
.inputs /deep/ .up{
  margin: 0;
}
</style>