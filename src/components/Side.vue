<template>
  <div class="allseclect" ref="qwcontent">
    <div class="top">
      <p class="manger">
      系统管理
    </p>
          <i class="el-icon-refresh-left"></i>
    </div>
    <ul class="seclect">
      <li>
        <router-link to="/user" class="link">
          <i
            class="el-icon-office-building"></i>
            <span>用户管理</span>
        </router-link>
      </li>
      <li>
        <router-link to="/organ" class="link">
          <i
            class="el-icon-office-building"></i>
            <span>组织管理</span>
        </router-link>
      </li>
      <li>
        <router-link to="/lication" class="link">
          <i
            class="el-icon-office-building"></i>
            <span>应用程序管理</span>
        </router-link>
      </li>
      <li>
        <router-link to="/program" class="link">
          <i
            class="el-icon-office-building"></i>
            <span>应用程序用户管理</span>
        </router-link>
      </li>
      <li>
        <router-link to="/authouity" class="link">
          <i
            class="el-icon-office-building"></i>
            <span>权限管理</span>
        </router-link>
      </li>
      <li>
        <router-link to="/users" class="link">
          <i
            class="el-icon-office-building"></i>
            <span>用户管理</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
data() {
    return{
        fullHeight: '',//fullHeight: document.documentElement.clientHeight  屏幕高度 默认值
        }
    },
 
methods: {
        changeFixed(fullHeight){                        //动态修改样式
            this.$refs.qwcontent.style.height =(fullHeight - 80)+'px';
        }
    },
 
mounted() {
      this.fullHeight= `${document.documentElement.clientHeight}`;//默认值
      const that = this
      window.onresize = () => {
        return (() => {
          window.fullHeight = document.documentElement.clientHeight
          that.fullHeight = window.fullHeight
        })()
      }
    },
 
watch: {
      // 如果 `fullHeight ` 发生改变，这个函数就会运行 
      fullHeight :function(val) {
        if(!this.timer) {
          this.fullHeight = val
          this.changeFixed(this.fullHeight)
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
  .allseclect{
     width: 100%;
    height: 100%;
    background:#fff;

    

  }
  .top{
    width: 100%;
    padding: 10px 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    font-size: 20px;
    cursor: pointer;
}
.seclect{
  width: 100%;
}
.seclect li{
  width: 100%;
  display: block;
  line-height: 50px;
  text-align: left;
  font-size: 16px;
  
}
.seclect li i{
   color: #000;
}
.seclect li span{
  color: #000;
}
.seclect li /deep/ .link{
   padding-left: 10px;
}
.seclect li /deep/ .link:active{
  background: #eeeeee;
}
</style>
