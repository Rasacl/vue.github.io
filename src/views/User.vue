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
      <el-input
        v-model="input"
        placeholder="请输入内容"
        style="width: 220px"
        class="search"
      ></el-input>
      <el-button type="primary" style="height: 40px" v-if="show"
        >查询</el-button
      >
      <!-- <router-link to="/user/add"> -->
      <el-button
        type="primary"
        style="height:40px"
        class="button"
        @click="
          dialogFormVisible1 = true
          remove;
        "
        >新增</el-button
      >
      <el-dialog
        title="新增用户数据基本信息"
        :visible.sync="dialogFormVisible1"
        class="dialog1"
      >
        <el-form :model="form" class="from1">
          <el-form-item class="item1">
            <span>真实姓名（必填）</span>
            <el-input
              v-model="form.name"
              autocomplete="off"
              class="toadd1"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item class="item1">
            <span>用户名（必填）</span>
            <el-input
              v-model="form.name"
              autocomplete="off"
              class="toadd1"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item class="item1">
            <span>手机号（必填）</span>
            <el-input
              v-model="form.name"
              autocomplete="off"
              class="toadd1"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item class="item1">
            <span>邮箱（必填）</span>
            <el-input
              v-model="form.name"
              autocomplete="off"
              class="toadd1"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item class="item1">
            <span>状态</span>
            <el-select
              v-model="form.region"
              placeholder="使用中"
              class="toadd1"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="item1 select1">
            <span>归属组织</span>
            <el-select
              v-model="form.region"
              placeholder="天心水文句"
              class="toadd1"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button
            type="primary"
            @click="
              dialogFormVisible = false;
              centerDialogVisible = true
              downup
            "
            >确 定</el-button
          >
        </div>
      </el-dialog>
      <el-dialog
  title="提示"
  :visible.sync="centerDialogVisible"
  width="30%"
  center>
  <span>需要注意的是内容是默认不居中的</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
      <!-- </router-link> -->
    </div>
    <div class="lis" ref="data">
      <el-table :data="tableData" class="listall">
        <el-table-column
          align="center"
          class="first"
          prop="name"
          label="姓名"
          width="155"
        >
        </el-table-column>
        <el-table-column prop="username" label="姓名" width="155">
        </el-table-column>
        <el-table-column prop="ipone" label="手机号" width="155">
        </el-table-column>
        <el-table-column prop="email" label="邮箱" width="155">
        </el-table-column>
        <el-table-column prop="state" label="状态" width="155">
        </el-table-column>
        <el-table-column
          align="center"
          prop="time"
          label="注册时间"
          width="165"
        >
        </el-table-column>
        <el-table-column align="center" label="操作" width="165">
          <template slot-scope="scope">
            <el-button type="text" @click="dialogFormVisible = true"
              >修改</el-button
            >
            <el-dialog
              title="编辑用户的基本信息"
              :visible.sync="dialogFormVisible"
              class="dialog"
            >
              <el-form :model="form" class="from">
                <el-form-item class="item">
                  <span>真实姓名</span>
                  <el-input
                    v-model="form.name"
                    autocomplete="off"
                    class="toadd"
                  ></el-input>
                </el-form-item>
                <el-form-item class="item">
                  <span>用户名</span>
                  <el-input
                    v-model="form.name"
                    autocomplete="off"
                    class="toadd"
                  ></el-input>
                </el-form-item>
                <el-form-item class="item">
                  <span>手机号</span>
                  <el-input
                    v-model="form.name"
                    autocomplete="off"
                    class="toadd"
                  ></el-input>
                </el-form-item>
                <el-form-item class="item">
                  <span>邮箱</span>
                  <el-input
                    v-model="form.name"
                    autocomplete="off"
                    class="toadd"
                  ></el-input>
                </el-form-item>
                <el-form-item class="item">
                  <span>状态</span>
                  <el-select
                    v-model="form.region"
                    placeholder="使用中"
                    class="toadd"
                  >
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item class="item select">
                  <span>归属组织</span>
                  <el-select
                    v-model="form.region"
                    placeholder="天心水文句"
                    class="toadd"
                  >
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item class="item">
                  <span>注册时间</span>
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="item">
                  <span>最后登陆时间</span>
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false"
                  >确 定</el-button
                >
              </div>
            </el-dialog>
            <el-button type="text" size="small">恢复密码</el-button>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
              @click="dialogFormVisible = true"
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
  data() {
    return {
        down:true,
      show: true,
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogTableVisible1: false,
      dialogFormVisible1: false,
      centerDialogVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      //   formLabelWidth: "120px",
      dataHeight: "",
      input: "",
      tableData: [
        {
          time: "2016-05-02 10:15:40",
          name: "王小虎",
          username: "猫咪",
          ipone: "122344",
          email: "qwe@123",
          state: "使用中"
        },
        {
          time: "2016-05-02 10:15:40",
          name: "王小虎",
          username: "猫咪",
          ipone: "122344",
          email: "qwe@123",
          state: "使用中"
        },
        {
          time: "2016-05-02 10:15:40",
          name: "王小虎",
          username: "猫咪",
          ipone: "122344",
          email: "qwe@123",
          state: "使用中"
        },
        {
          time: "2016-05-02 10:15:40",
          name: "王小虎",
          username: "猫咪",
          ipone: "122344",
          email: "qwe@123",
          state: "使用中"
        }
      ]
    };
  },
  methods: {
    downup(){
        this.dialogTableVisible1 = false;
    },
    remove() {
      this.show = !this.show;
    },
    handleClick(row) {
      console.log(row);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    changeHeight(dataHeight) {
      this.$refs.data.style.height = dataHeight - 228 + "px";
    }
  },
  mounted() {
    this.dataHeight = `${document.documentElement.clientHeight}`;
    const that = this;
    window.onresize = () => {
      return (() => {
        window.dataHeight = document.documentElement.clientHeight;
        that.dataHeight = window.dataHeight;
      })();
    };
  },
  watch: {
    // 如果 `dataHeight ` 发生改变，这个函数就会运行
    dataHeight: function(val) {
      if (!this.timer) {
        this.dataHeight = val;
        this.changeHeight(this.dataHeight);
        console.log(val);
        this.timer = true;
        let that = this;
        setTimeout(function() {
          //频繁触发 resize 函数，会导致页面很卡
          that.timer = false;
        }, 10);
      }
    }
  }
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
.dialog /deep/ .el-dialog__header {
  padding: 20px 10px 10px;
  text-align: left;
  margin-left: 10px;
}
.dialog /deep/ .el-dialog__body {
  padding: 0 10px 10px;
}
.dialog1 /deep/ .el-dialog__body {
  padding: 0 10px 10px;
}
.inputs /deep/ .button {
  margin-left: 10px;
}
.inputs /deep/ .from1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
}
.inputs /deep/ .item1 {
  width: 326px;
  height: 60px;
  margin-right: 10px;
  text-align: left;
  margin-left: 10px;
}
.inputs /deep/ .dialog-footer {
  text-align: center;
}
.inputs /deep/ .toadd1 {
  width: 100%;
}
.item1 /deep/ .el-form-item {
  margin-bottom: 0;
}

.listall /deep/ .dialog-footer {
  text-align: center;
}
.lis /deep/ .from {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  // height: 500px;
}
.lis /deep/ .item {
  width: 326px;
  height: 60px;
  margin-right: 10px;
  text-align: left;
  margin-left: 10px;
}
.lis /deep/ .toadd {
  width: 100%;
}
.item /deep/ .el-form-item {
  margin-bottom: 0;
}
.names {
  font-size: 17px;
  margin-right: 7px;
}
.search {
  margin-right: 10px;
}
.lis {
  width: 98%;
  height: 100%;
  margin-left: 1%;
  background: #fff;
}
.lis /deep/ .first {
  background: #bfbfbf;
}
.next {
  margin-left: 6px;
}
</style>
