<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-header">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="login-form">
        <el-form ref="loginRef" :model='loginFrom' :rules="loginRules" label-width="70px" class="login-model">
          <el-form-item label="用户名" prop="username">
            <el-input v-model='loginFrom.username'></el-input>
          </el-form-item>
          <el-form-item label="密码  " prop="password">
            <el-input v-model='loginFrom.password' type="password"></el-input>
          </el-form-item>
          <el-form-item class="btns">
             <el-button type="success" @click="push">注册</el-button>
            <el-button type="primary" @click="login">登陆</el-button>
            <el-button type="info" @click="resetFrom">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginFrom: {
        username: '',
        password: '',
        code: '',
        phone: ''
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetFrom () {
      this.$refs.loginRef.resetFields()
    },
    login () {
      this.$refs.loginRef.validate(valid => {
        if (valid) {
           this.$http.post('/system/user/login', this.loginFrom)
          .then(res => {
            const ret = res.data
            console.log(ret)
            if(ret.code == 200){
              this.$message.success('登陆成功！！');
              this.$router.push('/home')
              this.$refs.loginRef.resetFields()
            }else{
              this.$message.err('登陆失败！！！')
            }
          }).catch(err => {
            return err
          })
        } else {
          return false
        }
      })
    },
    push () {
      this.$router.push('/regiest')
    }
  }
}
</script>
<style lang="less" scoped>
.login-container {
  background: #2b4b6b;
  height: 100%;
  .login-box {
    width: 450px;
    height: 300px;
    background: #fff;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .login-header {
      width: 130px;
      height: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #eee;
      }
    }
    .login-model{
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;
      .btns{
        text-align: center;
      }
    }
  }
}
</style>
