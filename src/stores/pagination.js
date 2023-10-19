import { defineStore } from 'pinia'

export const usePaginationStore = defineStore({
  id: 'pagination',
  state: () => ({
    page: 1,
    limit: 20,
    total: 0,
  }),
  getters: {
    offset() {
      return (this.page - 1) * this.limit
    },
    totalPages() {
      return Math.ceil(this.total / this.limit)
    },
  },
  actions: {
    setPage(page) {
      this.page = page
    },
    setLimit(limit) {
      this.limit = limit
    },
    setTotal(total) {
      this.total = total
    },
  },
})