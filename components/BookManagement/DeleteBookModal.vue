<template>
  <div>
      <b-modal id="delete-book-modal" centered hide-footer size="sm" title="Confirm">
          <div class="text-center mt-5 mb-5">
              <b-icon class="mt-3 mb-4" icon="x-circle" scale="10" variant="danger"></b-icon>
          </div>
          <div>
            <p class="text-center pt-2">Are you sure you want to delete?</p>
          </div>
          
          <div class="d-flex flex-row-reverse">
            <button class="btn btn-primary btn-sm" @click="cancelDelete">Cancel</button>
            <button class="btn btn-link mr-2" @click="onDelete"  >Yes</button>
          </div>
      </b-modal>
  </div>
</template>

<script>
export default {
  props:['onDelete'],
  methods:{
    cancelDelete(){
      this.$bvModal.hide('delete-book-modal');
    },

  }
}
</script>

<style>

</style>