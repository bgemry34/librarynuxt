<template>
  <div>
    <h1>Borrow Book</h1>
    <div class="col-xs-12 mt-4">
      <div class="row">
        <div class="col-md-6 col-xs-12">
          <input
            type="text"
            name=""
            class="form-control"
            placeholder="Search Book..."
          />
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
                <tr v-for="_book in books" :key="_book.id">
                  <td>{{ _book.title }}</td>
                  <td :class="isAvailable(_book.status)">{{ _book.status }}</td>
                  <td>
                    <template v-if="_book.status == 'available'">
                      <button
                      @click="addToBorrowed(_book)"
                      class="btn btn-success rounded-circle px-2"
                      >
                        <b-icon
                          icon="plus"
                          class="color-white"
                          aria-hidden="true"
                          scale="1.25"
                        ></b-icon>
                      </button>
                    </template>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-md-6 col-xs-12">
          <select class="form-control" aria-label="Default select example">
            <option value="">Choose Borrower</option>
            <option v-for="_user in allUsers" :key="_user.id" :value="_user.id">
              {{ _user.name }}
            </option>
          </select>
          <h3 class="mt-2">Borrowed Books:</h3>
          <div class="borrowed-books-container">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="_book in borrowedBooks" :key="_book.id">
                  <td>{{ _book.title }}</td>
                  <td>
                    <button 
                    @click="removeFromBorrow(_book)"
                    class="btn btn-danger btn-sm">
                      <b-icon
                        icon="trash"
                        class="color-white"
                        aria-hidden="true"
                        scale="1"
                      ></b-icon>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="btn-container mt-2 d-flex flex-column">
            <button class="btn btn-secondary mb-1">Clear Borrowed Books</button>
            <button class="btn btn-success">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  layout: "sidebar",
  data() {
    return {
      books: [],
      borrowedBooks: [],
    };
  },
  methods: {
    ...mapActions(["fetchBooks", "fetchUsers"]),
    isAvailable: (status) => (status == "available" ? "available" : "borrowed"),
    addToBorrowed(book) {
        this.borrowedBooks = [...this.borrowedBooks, book];
        this.books = this.books.filter((_book) => _book.id != book.id);
    },
    removeFromBorrow(book){
        this.books = [book, ...this.books];
        this.borrowedBooks = this.borrowedBooks.filter((_book) => _book.id != book.id);
    }
  },
  computed: mapGetters(["allBooks", "allUsers"]),
  async created() {
    await this.fetchBooks();
    this.fetchUsers();

    this.books = this.allBooks;
  },
};
</script>

<style scoped>
.book-container {
  width: 100%;
  height: 75vh;
  margin-top: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  overflow-y: auto;
}

.borrowed-books-container {
  width: 100%;
  height: 55vh;
  margin-top: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  overflow-y: auto;
}

.available {
  color: rgb(46, 204, 113);
  font-weight: bold;
  text-transform: capitalize;
}

.borrowed {
  color: #e74c3c;
  font-weight: bold;
  text-transform: capitalize;
}
</style>1