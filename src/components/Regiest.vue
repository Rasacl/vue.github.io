<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-header">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="login-form">
        <el-form
          ref="loginRef"
          :model="Regiest"
          :rules="loginRules"
          label-width="80px"
          class="login-model"
        >
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="Regiest.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码  " prop="password">
            <el-input v-model="Regiest.password" type="password"></el-input>
          </el-form-item>
          <el-form-item label="公司名称" prop="companyName">
            <el-input v-model="Regiest.companyName"></el-input>
          </el-form-item>
          <el-form-item label="地址" prop="departmentName">
            <el-input v-model="Regiest.departmentName"></el-input>
          </el-form-item>
          <el-form-item label="编号" prop="id">
            <el-input v-model="Regiest.id"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="Regiest.phone"></el-input>
          </el-form-item>
          <el-form-item class="btns">
            <el-button type="primary" @click="login">注册</el-button>
            <el-button type="info" @click="resetFrom">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
// import {post,get} from '../assets/axios'
export default {
  data() {
    return {
      Regiest: {
        userName: "",
        password: "",
        companyName: "",
        departmentName: "",
        id: null,
        phone: ""
      },
      loginRules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        companyName: [
          { required: true, message: "请输入公司名称", trigger: "blur" }
        ],
        departmentName: [{ required: true, message: "请输入地址", trigger: "blur" }],
        id: [{ required: true, message: "请输入编号", trigger: "blur" }],
        phone: [{ required: true, message: "请输入电话号码", trigger: "blur" }]
      }
    };
  },
  methods: {
    resetFrom() {
      this.$refs.loginRef.resetFields();
      this.$router.push('/login')
    },
    login() {
      this.$refs.loginRef.validate(valid => {
        if (valid) {
          // JSON.parse
          // FormData
          this.$http
            .post("/system/register", JSON.stringify(this.Regiest), {
              headers: {
                "Content-Type": "application/json;charset=UTF-8"
              }
            })
            .then(res => {
              const ret = res.data;
              console.log(ret);
              if (ret.code == 200) {
                this.$message({
                  message: "注册成功！！！",
                  type: "success"
                })
                this.$router.push('/login')
                this.$refs.loginRef.resetFields();
              }else{
                this.$message.error('注册失败！！');
              }
            }).catch(err => {
              return err
            })
          // post("/system/register",this.Regiest,true).then(res => {
          //   console.log(res)
          // }).catch((err)=>{

          // })
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.login-container {
  background: #2b4b6b;
  height: 100%;
  .login-box {
    width: 450px;
    height: 67%;
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
    .login-model {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;
      .btns {
        text-align: center;
      }
    }
  }
}
</style>
