<template>
  <div>
      <h1>Book management</h1>
      <div class="container">
          <div class="col-xs-12">
              <div class="row">
                  <div class="col-md-6">
                      <input type="text" name="" id="" class="form-control w-50" placeholder="Search..." >
                  </div>
                  <div class="col-md-6">
                      <button class="btn btn-success ml-auto d-block">Add books</button>
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
                                <b-icon icon="pencil-square" variant="success" scale="2" aria-hidden="true"></b-icon>
                            </li>
                            <!-- delete -->
                            <li class="d-inline mx-4">
                                <b-icon icon="trash" variant="danger" scale="2" aria-hidden="true"></b-icon>
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
  </div>
</template>

<script>
export default {
    layout: 'sidebar',
}
</script>

<style>

</style>