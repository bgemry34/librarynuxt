<template>
  <div>
      <h1>Book management</h1>
      <div class="container">
          <div class="col-xs-12">
              <div class="row">
                  <div class="col-md-6">
                      <input type="text" name="" id="" class="form-control" placeholder="Search..." >
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
                    <th scope="col">Name</th>
                    <th scope="col">Author</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Date Created</th>
                    <th scope="col" class="text-center"><div class="ml-1">Actions</div></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td class="text-center">
                        <div>
                            <ul>
                            <!-- edit -->
                            <li class="d-inline">
                                <b-icon class="pointer" icon="pencil-square" variant="success" scale="2" aria-hidden="true"></b-icon>
                            </li>
                            <!-- delete -->
                            <li class="d-inline mx-4">
                                <b-icon class="pointer" icon="trash" variant="danger" scale="2" aria-hidden="true"></b-icon>
                            </li>
                        </ul>
                        </div>
                    </td>
                </tr>
                <tr>
                <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
        
        <b-modal id="bv-modal-example" hide-footer>
            <template #modal-title>
                Add Book
            </template>
            <b-form-group
            label="Title"
            label-for="name-input"
            invalid-feedback="Name is required"
            :state="nameState"
            >
            <b-form-input
                id="name-input"
                v-model="name"
                :state="nameState"
                required
            ></b-form-input>
            </b-form-group>

            <b-form-group
            label="Label"
            label-for="name-input"
            invalid-feedback="Name is required"
            :state="nameState"
            >
            <b-form-input
                id="name-input"
                v-model="name"
                :state="nameState"
                required
            ></b-form-input>
            </b-form-group>
            
            <b-form-group
            label="Genre"
            label-for="name-input"
            invalid-feedback="Name is required"
            :state="nameState"
            >
            <b-form-input
                id="name-input"
                v-model="name"
                :state="nameState"
                required
            ></b-form-input>
            </b-form-group>
            <input type="submit" value="Submit" class="btn btn-primary form-control" />
        </b-modal>
  </div>
</template>

<script>
export default {
    layout: 'sidebar',
}
</script>

<style>
    .pointer{
        cursor: pointer;
    }
</style>