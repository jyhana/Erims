<template>
  <div :style="bgImg" style="background-attachment: fixed;background-repeat:no-repeat;background-size: 100%;width: 100%; overflow: hidden;">
    <div style=" width: 400px;height:300px;margin: 100px auto; background: rgba(218,216,216,0.8);border-radius:10%;box-shadow: 5px 5px 10px #2c3e50;">
      <div style="color:  #34495e;font-size: 30px;text-align: center;padding: 30px">欢迎登录</div>
      <div style="width: 300px;margin-left: 50px">
        <el-form ref="form" :model="form" size="normal" :rules="rules">
          <el-form-item prop="username">
            <el-input style="box-shadow: 5px 5px 10px  #2c3e50 ;" prefix-icon="el-icon-user-solid" v-model="form.username">
            </el-input>
          </el-form-item>
          <!-- <el-form-item prop="nickName">
                <el-input prefix-icon="el-icon-phone" v-model="form.nickName"></el-input>
              </el-form-item> -->
          <el-form-item prop="password">
            <el-input style="box-shadow: 5px 5px 10px  #2c3e50 ;" prefix-icon="el-icon-lock" v-model="form.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="margin-left: 0px;box-shadow: 5px 5px 10px #2c3e50 ;" @click="submitForm">登录</el-button>
            <!-- <el-button type="primary" style="margin-left: 50px;box-shadow: 5px 5px 10px  #2c3e50;"
                @click="this.$router.push('/register')">注 册
            </el-button> -->
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>s
<script>
// import request from "../utils/request";
const url = require("../assets/login-form-bg.png");
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: 'jyhana',
        password: '123456',
      },
      hyform: {},
      drinkform: {},
      dbform: {},
      riceform: {},
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      },
      bgImg: {
        backgroundImage: "url(" + url + ")"
      },
    }
  },
  methods: {
    submitForm() {
      console.log(this.$data.form.username);
      console.log(this.$data.form.password);
      let _this = this;

      this.$axios({
        method: 'post',
        url: "http://localhost:8080/login",
        data: _this.$data.form
      }).then(res => {
        console.log(this);
        // console.log(res)
        // console.log(res.data.success)
        // console.log(res.data.data.user_id)
        if (res.data.success == "true") {
          _this.$router.push("/onemap")
        }
      }).catch(error => {
        this.$message({
          message: '你有点问题',
          type: 'warning'
        });
      })
    },
    // login(key, value) {
    //   this.$refs['form'].validate((valid) => {
    //     if (valid) {
    //       request.post("/login", this.form).then(res => {
    //         if (res.code === '0') {
    //           this.$message({
    //             type: "success",
    //             message: "登录成功"
    //           })
    //           sessionStorage.setItem("username", JSON.stringify(res.data.username))//缓存用户信息
    //           sessionStorage.setItem("phone", JSON.stringify(res.data.nickName))//缓存用户信息
    //           sessionStorage.setItem("user", JSON.stringify(res.data))//取到登录信息
    //           sessionStorage.setItem("hymenu", JSON.stringify(this.hyform))
    //           sessionStorage.setItem("drinkmenu", JSON.stringify(this.drinkform))
    //           sessionStorage.setItem("dbmenu", JSON.stringify(this.dbform))
    //           sessionStorage.setItem("rice", JSON.stringify(this.riceform))
    //           this.$router.push("/onemap")//登录成功之后进行页面的跳转，跳转到主页
    //           // this.$router.push("/layout/menu")
    //         } else {
    //           this.$message({
    //             type: "error",
    //             message: res.msg
    //           })
    //         }
    //       })
    //     }
    //   })
    // },
  }
}
</script>

<style scoped>
.viewdiv {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
/* .viewdiv div{
  width: 50%;
  height: 100%;
} */
.left{
  float: left;
}
.right{
  float: right;
}
</style>
