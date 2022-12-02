export const state = () => ({
  isOpen: false
})

export const mutations = {
  toggleBurger(state) {
    state.isOpen = !state.isOpen
  },
  closeBurger(state) {
    state.isOpen = false
  }
}
