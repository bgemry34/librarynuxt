<template>
  <div>
      <h1>Book Management</h1>
      <div class="container mb-2">
          <div class="col-xs-12">
              <div class="row">
                  <div class="col-md-6">
                      <input type="text" id="" class="form-control" placeholder="Search..." >
                  </div>
                  <div class="col-md-6">
                      <button class="btn btn-success ml-auto d-block"  id="show-btn" @click="$bvModal.show('upsert-book-modal'); clearBookInputs();" >Add books</button>
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
                
                <tr v-for="_book in allBooks" :key="_book.id">
                    <td>{{_book.title}}</td>
                    <td>{{_book.author}}</td>
                    <td>{{_book.genre}} </td>
                    <td>{{formatDate(_book.dateCreated)}} </td>
                    <td class="text-center">
                        <div>
                            <div class="col-md-12">
                                <div class="row">
                                    <!-- edit -->
                                    <div class="col-md-6">
                                        <b-icon class="pointer" 
                                        scale="1.5" 
                                        icon="pencil-square" 
                                        variant="success" 
                                        aria-hidden="true"
                                        @click="showUpdateModal(_book)"
                                        >
                                        </b-icon>
                                    </div>
                                    <!-- delete -->
                                    <div class="col-md-6">
                                        <b-icon 
                                        class="pointer" 
                                        scale="1.5" 
                                        icon="trash" 
                                        variant="danger" 
                                        @click="showDeleteConfirmationModal(_book)"
                                        aria-hidden="true">
                                        </b-icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                
            </tbody>
        </table>
        
        <UpsertBookModal 
        :book="book" 
        :onSubmit="onSubmit" 
        :isEdit="isEdit" 
        />
        <DeleteBookModal 
        :book="book" 
        :onDelete="onDelete"
        />
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {formatDate} from './../../helper/Tools'
import UpsertBookModal from '../../components/BookManagement/UpsertBookModal.vue'
import DeleteBookModal from '../../components/BookManagement/DeleteBookModal.vue'
export default {
    layout: 'sidebar',
    components:{
        UpsertBookModal,
        DeleteBookModal
    },
    data(){
        return {
            book:{
                id:'',
                title:'', 
                genre:'',
                author:''
            },
            isEdit:false
        }
    },
    methods:{
        ...mapActions(['fetchBooks', 'addBook', 'editBook', 'deleteBook']),
        formatDate,
        clearBookInputs(){
            this.isEdit = false;
                this.book = {
                id:'',
                title:'', 
                genre:'',
                author:''
            }
            
        },
        async onSubmit(e){
            e.preventDefault();

            if(!this.isEdit)
            this.clearBookInputs();

            const res = !this.isEdit ? await this.addBook(this.book) : await this.editBook(this.book);
            if(res)
            {
                let content = this.isEdit ? `Success Editing Book!` 
                : `Success Adding Book!`;
                this.$bvModal.hide('upsert-book-modal');
                this.$bvToast.toast(content, {
                    title: `Status`,
                    solid: true,
                    variant:'success'
                });
            }
        },
        async onDelete(e){
            e.preventDefault();
            if(this.deleteBook(this.book));{
                this.$bvToast.toast('Success Deleting Book!', {
                    title: `Status`,
                    solid: true,
                    variant:'success'
                });
            }
            this.$bvModal.hide('delete-book-modal');
        },
        showUpdateModal(book){
            this.isEdit = true;
            this.book = book;
            this.$bvModal.show('upsert-book-modal');
        },
        showDeleteConfirmationModal(book){
            this.book = book;
            this.$bvModal.show('delete-book-modal')
        }
    },
    computed:mapGetters(['allBooks']),
    created(){
        this.fetchBooks();
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