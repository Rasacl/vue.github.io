<template>
<div>
    <div class="back">
      <el-breadcrumb separator="/" class="backto">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">系统管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>应用程序管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="input">
<el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="名称" v-if="hide">
    <el-input v-model="formInline.user" placeholder="请输入"></el-input>
  </el-form-item>
  <el-form-item class="button">
    <el-button type="primary" v-if="hide">查询</el-button>
    <el-button type="primary" @click="dialogFormVisible1 = true;rehide">新增</el-button>
  </el-form-item>
</el-form>
<div class="add">
    <el-dialog title="编辑应用程序数据基本信息" :visible.sync="dialogFormVisible1">
     <el-form :model="form1">
    <el-form-item>
        <span>名称（必填）</span>
      <el-input v-model="form1.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
        <span>角色数（必填）</span>
      <el-input v-model="form1.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
        <span>权限数（必填）</span>
      <el-input v-model="form1.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item class="select">
        <span>状态（必填）</span>
      <el-select v-model="form1.region" placeholder="请选择">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
        <span>负责人（必填）</span>
      <el-input v-model="form1.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
        <span>负责人联系方式（必填）</span>
      <el-input v-model="form1.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item class="time">
        <span>开始时间</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    </el-form-item>
    <el-form-item class="time">
        <span>上线时间</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    </el-form-item>
    <el-form-item class="time">
        <span>到期时间</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="未到期">
    </el-date-picker>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible1 = false">确 定</el-button>
  </div>
</el-dialog>
</div>
    </div>
    <div class="list" ref="lica">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="名称" align="center">
        </el-table-column>
        <el-table-column prop="date" label="角色" align="center">
        </el-table-column>
        <el-table-column prop="auth" label="权限数" align="center">
        </el-table-column>
        <el-table-column prop="user" label="用户数" align="center">
        </el-table-column>
        <el-table-column prop="now" label="状态" align="center">
        </el-table-column>
        <el-table-column prop="people" label="负责人" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="dialogFormVisible = true"
              >修改</el-button
            >
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="erroc">
 <el-dialog title="编辑应用程序数据基本信息" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item>
        <span>名称</span>
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
        <span>角色数</span>
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
        <span>权限数</span>
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
        <span>用户数-实时自定更新</span>
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item class="select">
        <span>状态</span>
      <el-select v-model="form.region" placeholder="请选择">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
        <span>负责人</span>
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
        <span>负责人联系方式</span>
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item class="time">
        <span>开始时间</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    </el-form-item>
    <el-form-item class="time">
        <span>上线时间</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    </el-form-item>
    <el-form-item class="time">
        <span>到期时间</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="未到期">
    </el-date-picker>
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
            formInline: {
          user: '',
          region: ''
        },
        tableData: [
        {
          name: "河长制",
          date: 4,
          auth:10,
          user: 123345435,
          now:"已上线",
          people:"欧阳",
        },
        {
          name: "河长制",
          date: 5,
          auth:10,
          user: 123345435,
          now:"已上线",
          people:"欧阳",
        },
        {
          name: "河长制",
          date: 1,
          auth:10,
          user: 123345435,
          now:"已上线",
          people:"欧阳",
        },
        {
          name: "河长制",
          date: 2,
          auth:10,
          user: 123345435,
          now:"已上线",
          people:"欧阳",
        },
      ],
      licaheight:'',
       dialogTableVisible: false,
        dialogFormVisible: false,
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
        value1: '',
        value2: '',
         dialogTableVisible1: false,
        dialogFormVisible1: false,
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
        hide:true,
        }

    },
    methods:{
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    rehide(){
        this.hide = !this.hide;
    },
    changeHeight(licaheight) {
      this.$refs.lica.style.height = licaheight - 228 + "px";
    },
    },
     mounted() {
    this.licaheight = `${document.documentElement.clientHeight}`;
    const that = this;
    window.onresize = () => {
      return (() => {
        window.licaheight = document.documentElement.clientHeight;
        that.licaheight = window.licaheight;
      })();
    };
  },
  watch: {
    // 如果 `licaheight ` 发生改变，这个函数就会运行
    licaheight: function (val) {
      if (!this.timer) {
        this.licaheight = val;
        this.changeHeight(this.licaheight);
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
.input {
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
.input /deep/ .el-form {
  display: flex;
  width: 100%;
  line-height: 80px;
}
.input /deep/ .el-form-item{
    margin-bottom: 0;
}
.input /deep/ .el-input{
    line-height: 80px;
}
.input .button /deep/ .el-form-item__content{
    margin-top: 20px;
}
.list {
  height: 100%;
  margin: 0 1%;
  background: #fff;
}
.erroc /deep/ .el-dialog__body{
    padding: 0 20px;
}
.erroc /deep/ .el-form{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.erroc /deep/ .el-form-item{
    width: 48%;
    margin-right: 10px;
    margin-bottom: 0;
}
.erroc .select /deep/ .el-form-item__content{
    display: flex;
    flex-wrap: wrap;
}
.erroc .select /deep/ .el-select {
    width: 100%;
}
.erroc .time /deep/ .el-form-item__content{
    display: flex;
    flex-wrap: wrap;
    line-height: 35px;
}
.erroc .time /deep/ .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 100%;
}
.erroc /deep/ .el-input__inner{
    height: 35px;
}
.erroc .dialog-footer{
    margin-top: 40px;
    text-align: center;
}
.add /deep/ .el-input {
    line-height: 35px;
}
.add /deep/ .el-dialog__body{
    padding: 0 20px;
}
.add /deep/ .el-form{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.add /deep/ .el-form-item{
    width: 48%;
    margin-right: 10px;
    margin-bottom: 0;
}
.add .select /deep/ .el-form-item__content{
    display: flex;
    flex-wrap: wrap;
}
.add .select /deep/ .el-select {
    width: 100%;
}
.add .time /deep/ .el-form-item__content{
    display: flex;
    flex-wrap: wrap;
    line-height: 35px;
}
.add .time /deep/ .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 100%;
}
.add /deep/ .el-input__inner{
    height: 35px;
}
.add .dialog-footer{
    margin-top: 40px;
    text-align: center;
}
</style>