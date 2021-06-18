<template>
  <div class="home">
    <div class="home__container container">
      <h2>Home</h2>
      <div class="home__content">
        <div class="home__list">
          <div class="home__item" v-for="item in paginatedData" :key="`item+${item.id}`">
            <div class="home__img-wrap">
              <img :src="item.images.fixed_height.url" alt="1" class="home__image"/>
            </div>
          </div>
        </div>
        <button
            :disabled="pageNumber === 0"
            @click="prevPage">
          Prev
        </button>
        <button type="button"> {{ pageNumber }}</button>
        <button
            :disabled="pageNumber >= pageCount -1"
            @click="nextPage">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      gifs: [],
      size: 12,
      pageNumber: 0,
      totalCount: 0
    }
  },
  async created() {
    const res = await this.$store.dispatch('fetchGifs');
    this.gifs = res.data;
    console.log('fetchGifs:', this.gifs)
    console.log('total count:', res.pagination.total_count)
    this.totalCount = res.pagination.total_count;
  },

  methods: {
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    }
  },
  computed: {
    pageCount() {
      let l = this.gifs.length,
          s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size,
          end = start + this.size;
      return this.gifs.slice(start, end);
    },
  }

}
</script>

<style lang="scss">
.home {
  color: white;
  margin-top: 20px;

  &__conteiner {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__content {
    margin-top: 20px;
    width: 100%;
    min-height: 500px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }

  &__item {
    max-width: 312px;
    width: 24%;
    display: flex;
    flex-basis: 24%;
    margin-bottom: 24px;
    cursor: pointer;
    position: relative;
  }

  &__img-wrap {
    width: 100%;
    @include padding-hack(100%, cover);
  }

  button {
    width: 100px;
    height: 40px;
    background-color: #E70BDA;
    color: white;
  }

  button:hover {
    cursor: pointer;
  }

  button:hover:disabled {
    cursor: not-allowed;
  }

  .pagination-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
  }

  .pagination {
    display: inline-block;
    padding-left: 0;
    border-radius: 4px;
  }
}

</style>
