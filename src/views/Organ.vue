<template>
  <div>
    <div class="back">
      <el-breadcrumb separator="/" class="backto">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">系统管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>组织管理</el-breadcrumb-item>
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
        <el-form-item label="名称" v-if="show">
          <el-select v-model="form.region" placeholder="请输入">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="信用代码">
          <el-select v-model="form.region" placeholder="请输入">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-button type="primary" style="height: 40px" @click="remove;dialogFormVisible1 = true">新增</el-button>
      </el-form>
    </div>
    <div class="add">
    <el-dialog title="新增组织数据基本信息" :visible.sync="dialogFormVisible1">
     <el-form :model="form1">
    <el-form-item>
        <span>名称（必填）</span>
      <el-input v-model="form1.name" autocomplete="off" placeholder="请输入"></el-input>
    </el-form-item>
    <el-form-item>
        <span>地址（必填）</span>
      <el-input v-model="form1.name" autocomplete="off" placeholder="请输入"></el-input>
    </el-form-item>
    <el-form-item>
        <span>电话（必填）</span>
      <el-input v-model="form1.name" autocomplete="off" placeholder="请输入"></el-input>
    </el-form-item>
    <el-form-item>
        <span>信用代码（必填）</span>
      <el-input v-model="form1.name" autocomplete="off" placeholder="请输入"></el-input>
    </el-form-item>

    <el-form-item>
     <span>所属组织单位</span>
      <el-select v-model="form1.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
        <span>同级排序</span>
      <el-input v-model="form1.name" autocomplete="off" placeholder="请输入"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogFormVisible1 = false">保存</el-button>
    <el-button @click="dialogFormVisible1 = false">取消</el-button>
  </div>
</el-dialog>
    </div>
    <div class="list" ref="org">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="组织排序" align="center">
        </el-table-column>
        <el-table-column prop="name" label="姓名" align="center">
        </el-table-column>
        <el-table-column prop="address" label="地址" align="center" width="300">
        </el-table-column>
        <el-table-column prop="ipohe" label="电话" align="center">
        </el-table-column>
        <el-table-column prop="do" label="统一社会信用代码" align="center">
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
        <div class="next">
        <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
      </div>
    </div>
    <div class="oppen">
         <el-dialog :visible.sync="dialogFormVisible">
     <div class="rub">
          <div class="left">
          <span class="title">组织关系</span>
          <el-tree :data="data" :props="defaultProps"></el-tree>
        
      </div>
     </div>
      <div class="right">
          <span class="title">基本组织数据基本信息</span>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item>
              <span>名称</span>
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item>
              <span>地址</span>
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item>
              <span>电话</span>
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item>
              <span>信用代码</span>
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item>
              <span>同级排序</span>
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
        </el-form>
         <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogFormVisible = false">确定</el-button>
    <el-button @click="dialogFormVisible = false">取消</el-button>
  </div>
      </div>
      </el-dialog>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
        show:true,
      formInline: {
        user: "",
        region: "",
      },
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogTableVisible1: false,
      dialogFormVisible1: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
       form1: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      tableData: [
        {
          date: "01",
          name: "长沙水文事业部",
          address: "上海市普陀区金沙江路 1518 弄",
          ipohe: 123345435,
          do: "16734349",
        },
        {
          date: "02",
          name: "长沙水文事业部",
          address: "上海市普陀区金沙江路 1518 弄",
          ipohe: 123345435,
          do: "16734349",
        },
        {
          date: "03",
          name: "长沙水文事业部",
          address: "上海市普陀区金沙江路 1518 弄",
          ipohe: 123345435,
          do: "16734349",
        },
        {
          date: "04",
          name: "长沙水文事业部",
          address: "上海市普陀区金沙江路 1518 弄",
          ipohe: 123345435,
          do: "16734349",
        },
      ],
      orgheight: "",
      data: [
        {
          label: "昆明维越",
          children: [
            {
              label: "云南省",
              children: [
                { label: "昆明市水文局" },
                { label: "昆明市水文局" },
                { label: "昆明市水文局" },
                { label: "昆明市水文局" },
              ],
            },
          ],
        },
        {
          label: "湖南省",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1",
                },
              ],
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "江西省",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
      remove(){
            this.show = false;
      },
    //   noremovw(){
    //         this.show = true;
    //   },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    changeHeight(orgheight) {
      this.$refs.org.style.height = orgheight - 228 + "px";
    },
  },
  mounted() {
    this.orgheight = `${document.documentElement.clientHeight}`;
    const that = this;
    window.onresize = () => {
      return (() => {
        window.orgheight = document.documentElement.clientHeight;
        that.orgheight = window.orgheight;
      })();
    };
  },
  watch: {
    // 如果 `orgheight ` 发生改变，这个函数就会运行
    orgheight: function (val) {
      if (!this.timer) {
        this.orgheight = val;
        this.changeHeight(this.orgheight);
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
};
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
.oppen .rub{
   width: 30%;
    float: left;

}

.oppen /deep/ .el-dialog {
    width: 80%;
    height: 78%;
}
.oppen /deep/ .el-dialog__header{
    padding: 0;
}
.oppen /deep/ .el-dialog__body{
    padding: 0;
}
.oppen .left{
    padding-top: 15px;
    padding-left: 10px;
    margin-right: 15px;
}
.oppen .left .title{
    font-size: 17px;
    font-weight: 700;
}
.oppen .right{
    width: 70%;
    float: right;
    padding-top: 15px;
    // padding-right: 10px;
}
.oppen .right .title{
    font-size: 17px;
    font-weight: 700;
}
.oppen .left /deep/ .el-tree{
    margin-top: 10px;
    // border: 1px solid #eaeaea;
}
.oppen .left /deep/ .el-form{
    padding-top: 15px;
}
.oppen .right /deep/ .demo-form-inline{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-right: 10px;
}
.oppen .right /deep/ .el-form-item{
    margin-bottom: 0;
}
.oppen .right /deep/ .el-form-item__content{
     width: 380px;
}
.right .dialog-footer{
    margin-top: 50px;
    width: 100%;
    text-align: center;
}
.add /deep/ .el-dialog__body{
    padding:0 20px;
}
.add /deep/ .el-form{
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    justify-content: space-between;
}
.add /deep/.el-form-item{
    margin-bottom: 0;
    width: 48%;

}
.add /deep/ .el-select{
    width: 100%;
}
.add .dialog-footer{
    margin-top: 40px;
    text-align: center;
}
</style>