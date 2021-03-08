<template>
  <div class="Mian" ref="het">
    <div class="mainone">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hetHeight: ""
    };
  },
  methods: {
    changeHeight(hetHeight) {
      this.$refs.het.style.height = hetHeight - 80 + "px";
    }
  },
  mounted() {
    this.hetHeight = `${document.documentElement.clientHeight}`;
    const that = this;
    window.onresize = () => {
      return (() => {
        window.hetHeight = document.documentElement.clientHeight;
        that.hetHeight = window.hetHeight;
      })();
    };
  },
  watch: {
    // 如果 `hetHeight ` 发生改变，这个函数就会运行
    hetHeight: function(val) {
      if (!this.timer) {
        this.hetHeight = val;
        this.changeHeight(this.hetHeight);
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
.Mian {
  height: 100%;
  //  background: #f7f7ff;
}
.mainone {
  width: 100%;
  height: 100%;
  background: #f7f7f7;
}
</style>
