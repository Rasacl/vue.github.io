<template>
  <div id="app">
     <el-container>
      <el-header style="80px">
        <Header/>
      </el-header>
      <el-container>
        <el-aside width="20%">
          <Side/>
        </el-aside>
        <el-main width="80%">
          <Main/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import { component } from 'vue/types/umd';
import Header from './components/Header'
import Side from './components/Side'
import Main from './components/Main'
export default {
  name: "App",
  components:{
       Header,
       Side,
       Main
  }
};
</script>
<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
    .el-header{
    background: #1890ff;
    height: 80px!important;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    
    
  }
  
  .el-main {
   padding: 0;
    color: #333;


  }
</style>