<template>
  <div>
      <h1>Book management</h1>
      <div class="container">
          <div class="col-xs-12">
              <div class="row">
                  <div class="col-md-6">
                      <input type="text" id="" class="form-control" placeholder="Search..." >
                  </div>
                  <div class="col-md-6">
                      <button class="btn btn-success ml-auto d-block"  id="show-btn" @click="$bvModal.show('bv-modal-example')" >Add books</button>
                  </div>
              </div>
          </div>
      </div>

      <table class="table">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Date Created</th>
                    <th scope="col" class="text-center"><div class="ml-1">Actions</div></th>
                </tr>
            </thead>
            <tbody>
                
                <tr v-for="book in allBooks" :key="book.id">
                    <td>{{book.title}}</td>
                    <td>{{book.author}}</td>
                    <td>{{book.genre}} </td>
                    <td>{{formatDate(book.dateCreated)}} </td>
                    <td class="text-center">
                        <div>
                            <ul class="row">
                            <!-- edit -->
                            <li class="mx-3">
                                <b-icon class="pointer" scale="1.5" icon="pencil-square" variant="success" aria-hidden="true"></b-icon>
                            </li>
                            <!-- delete -->
                            <li class="mx-3">
                                <b-icon class="pointer" scale="1.5" icon="trash" variant="danger" aria-hidden="true"></b-icon>
                            </li>
                        </ul>
                        </div>
                    </td>
                </tr>
                
            </tbody>
        </table>
        
        <b-modal id="bv-modal-example" hide-footer>
            <template #modal-title>
                Add Book
            </template>
            <form action="" v-on:submit="onSubmit" >
                <b-form-group
                    label="Title"
                    label-for="title-input"
                    invalid-feedback="Title is required"
                >
                <b-form-input
                    id="title-input"
                    type="text" 
                    required
                    v-model.lazy="book.title"
                    debounce="100"
                    placeholder="Enter title..."
                ></b-form-input>
                </b-form-group>

                <b-form-group
                    label="Author"
                    label-for="author-input"
                    invalid-feedback="Name is required"
                >
                <b-form-input
                    id="author-input"
                    type="text" 
                    required
                    v-model="book.author"
                    debounce="100"
                    placeholder="Enter author..."
                ></b-form-input>
                </b-form-group>
                
                <b-form-group
                    label="Genre"
                    label-for="genre-input"
                    invalid-feedback="Name is required"
                >
                <b-form-input 
                id="genre-input"
                v-model="book.genre" 
                type="text" 
                required
                placeholder="Enter genre..."
                debounce="100">
                 </b-form-input>
                </b-form-group>
                <input 
                    type="submit" 
                    value="Submit" 
                    class="btn btn-primary form-control"
                />
            </form>
        </b-modal>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {formatDate} from './../../../helper/Tools'
export default {
    layout: 'sidebar',
    data(){
        return {
            book:{
                title:'', 
                genre:'', 
                author:''
            }
        }
    },
    methods:{
        ...mapActions(['fetchBooks', 'addBook']),
        formatDate,
        onSubmit(e){
            e.preventDefault();
            this.addBook(this.book);
        }
    },
    computed:mapGetters(['allBooks']),
    created(){
        this.fetchBooks();
        console.log(this.book);
    }
}
</script>

<style scoped>
    .pointer{
        cursor: pointer;
    }
    ul{
        list-style-type:none;
    }
</style>