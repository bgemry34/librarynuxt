<template>
  <div class="login-bg">
      <b-container>
            <div class="row justify-content-center align-items-center" style="height:100vh">
                <div class="col-xs-8 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h1 class="text-center mb-4">LOGIN</h1>
                            <form action="" autocomplete="off">
                                <div class="form-group">
                                    <b-form-select v-model="usertype" :options="usertypes"></b-form-select>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="username" placeholder="Username...">
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" name="password" placeholder="Password...">
                                </div>
                                <nuxt-link :to="'/dashboard'">
                                <button type="button" id="sendlogin" class="btn btn-primary form-control mt-2">LOGIN</button>
                                </nuxt-link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            usertype:'',
            usertypes:[
                { value: '', text: 'Please select an usertype' },
                { value: 'Student', text: 'Admin' },
                { value: 'Admin', text: 'Student' }
            ]
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