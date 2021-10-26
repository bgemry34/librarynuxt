<template>
  <div>
    <h1>Borrow Book</h1>
    <div class="col-xs-12 mt-4">
        <div class="row">
            <div class="col-md-6 col-xs-12">
                <input type="text" name="" class="form-control" placeholder="Search Book...">
                <div class="book-container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Status</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="_book in allBooks" :key="_book.id">
                                    <td>{{_book.title}}</td>
                                    <td>{{_book.status}}</td>
                                    <td><button class="btn btn-success">+</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-md-6 col-xs-12">
                <select class="form-control" aria-label="Default select example">
                        <option value="">Choose Borrower</option>
                        <option  v-for="_user in allUsers" :key="_user.id" :value="_user.id">{{_user.name}}</option>
                </select>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    layout: 'sidebar',
     methods:{
        ...mapActions(['fetchBooks', 'fetchUsers'])
     },
     computed:mapGetters(['allBooks', 'allUsers']),
     async created(){
         this.fetchBooks();
         await this.fetchUsers();
     }
}
</script>

<style scoped>
    .book-container{
        width: 100%;
        height: 80vh;
        margin-top: 10px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        overflow-y: auto;
    }
</style>1