<template>
   <div class="container-fluid">
    <div class="row min-vh-100 flex-column flex-md-row">
        <aside class="col-12 col-md-2 p-0 bg-dark flex-shrink-1">
            <nav class="navbar navbar-expand navbar-dark bg-dark flex-md-column flex-row align-items-start py-2">
                <div class="collapse navbar-collapse ">
                    <ul class="flex-md-column flex-row navbar-nav w-100 justify-content-between">
                        <li class="nav-item nav-title mb-4">
                            <a class="nav-link pl-0 text-nowrap" href="#">
                                <h2>Library</h2>
                                <small>System</small>
                            </a>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link pl-0" :to="'/BookManagement'"><span class="d-none d-md-inline">Book Management</span></nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link pl-0" :to="'/BorrowBooks'"><span class="d-none d-md-inline">Borrow Books</span></nuxt-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link pl-0" href="#"><i class="fa fa-heart codeply fa-fw"></i> <span class="d-none d-md-inline">User management</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link pl-0" href="#"><i class="fa fa-star codeply fa-fw"></i> <span class="d-none d-md-inline">Link</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link pl-0" href="#"><i class="fa fa-star fa-fw"></i> <span class="d-none d-md-inline">Link</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link pl-0" href="#"><i class="fa fa-star fa-fw"></i> <span class="d-none d-md-inline">Hello</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
        <main class="col bg-faded py-3 flex-grow-1">
            <Nuxt />
        </main>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style>
</style>