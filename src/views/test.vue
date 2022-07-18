<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" class="loginform">
      <h3 class="logintitle">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入用户名" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: 'jyhana',
        password: '123456',
      },
      rules: {
        username: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    submitForm(form) {
      console.log(this.$data.form.username);
      console.log(this.$data.form.password);
      let _this = this;
      this.$axios({
        method: 'post',
        url: "http://localhost:8080/l",
        data: _this.$data.form
        // data: this.$data.form
      }).then(res => {
        console.log(res)
        console.log(res.data.success)
        console.log(res.data.data.user_id)
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
  }
}
</script>

<style scoped>
.loginform {
  width: 21.875rem;
  margin: 9.375rem auto;
  border: 1px solid #DCDFE6;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 30px #DCDFE6;
}

.logintitle {
  text-align: center;
}
</style>
