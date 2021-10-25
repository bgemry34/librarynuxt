<template>
  <div>
      <b-modal id="upsert-book-modal" hide-footer>
            <template #modal-title>
                <span v-if="isEdit">Edit</span>
                <span v-else>Add</span> Book
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
                    debounce="100"
                >
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
export default {
    props:['book', 'onSubmit', 'isEdit']
}
</script>

<style>

</style>