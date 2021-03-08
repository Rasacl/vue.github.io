<template>
  <div class="header">
    <h1 class="title">
      <i class="el-icon-office-building
"></i>
      普洱水情测报系统
    </h1>

   <div class="bool">
      <el-menu
      :default-active="activeIndex8"
      class="el-menu-demo list"
      mode="horizontal"
      @select="handleSelect"
      background-color="#1890ff"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" class="item">系统总概</el-menu-item>
      <el-menu-item index="2" class="item">数据查询</el-menu-item>
      <el-menu-item index="3" class="item">数据维护</el-menu-item>
      <el-menu-item index="4" class="item">统计报表</el-menu-item>
      <el-menu-item index="5" class="item">视频检测</el-menu-item>
      <el-menu-item index="6" class="item">预警管理</el-menu-item>
      <el-menu-item index="7" class="item">基础信息</el-menu-item>
      <el-menu-item index="8" class="item">系统管理</el-menu-item>
    </el-menu>
    <div class="right">
      <span class="manager">管理员</span>
      <p class="translate">LUXISZR</p>
      <i class="el-icon-arrow-down icon"></i>
    </div>
   </div>

  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '1',
      activeIndex8: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  height: 80px;
  line-height: 80px;
  margin: 0;
  justify-content: space-between;
}
.title {
  color: #fff;
}
.bool{
  display: flex;
}
.list {
  // box-sizing: border-box;
  // height: 80px;
  margin-left: 189px;
}
.list /deep/ .item {
  // width: 150px;
  height: 80px;
  // width: 12%;
  font-size: 16px;
  line-height: 80px;
  text-align: center;
  padding: 0 10px;
}
.right {
  // position: relative;
  // right: -26px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.manager{
   display: block;
    margin-left: 16px;
    margin-right: 8px;
    text-align: center;
    font-size: 12px;
    height:  50px;
    line-height: 50px;
    width: 50px;
    border: 1px solid #fff;
    border-radius: 50%;

}
.translate{
   font-size: 18px;
}
.icon{
  margin-left: 5px;
}
</style>
