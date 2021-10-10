<template>
  <div class="login-bg">
      <b-container>
            <div class="row justify-content-center align-items-center" style="height:100vh">
                <div class="col-xs-8 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h1 class="text-center mb-4">LOGIN</h1>
                            <form v-on:submit="onSubmit" action="" autocomplete="off">
                                <div class="form-group">
                                    <b-form-select v-model="usertype" :options="usertypes"></b-form-select>
                                </div>
                                <div class="form-group">
                                    <input type="text" v-model="username" class="form-control" name="username" placeholder="Username...">
                                </div>
                                <div class="form-group">
                                    <input type="password" v-model="password" class="form-control" name="password" placeholder="Password...">
                                </div>
                                <button type="submit" id="sendlogin" class="btn btn-primary form-control mt-2">
                                    LOGIN
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
import {loginUser} from './../api/users.js'

export default {
    data(){
        return{
            usertype:'',
            usertypes:[
                { value: '', text: 'Please select an usertype' },
                { value: 'admin', text: 'Admin' },
                { value: 'student', text: 'Student' }
            ],
            username:'',
            password:''
        }
    },
    methods:{
        async onSubmit(e){
            e.preventDefault();
            const {usertype, username, password} = this;
            let login = {
                usertype,
                username,
                password
            };

            const res = await loginUser(login);

            console.log(login, res);
        }
    }
}
</script>

<style>
    .login-bg{
        background-color: rgba(0, 0, 0, 0.7);
    }   
    .login-bg::before{
        content: "";
        position: absolute;
        top: 0; 
        left: 0;
        width: 100%; 
        height: 100%;  
        opacity: .8; 
        z-index: -1;
        background: url('~/assets/images/loginbg.jpg') no-repeat center;
    }
</style>