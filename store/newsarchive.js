export const state = () => ({
    inputCategoryFilter: "",
})

export const mutations = {
    mutateInputCategoryFilter (state, payload) {
        state.inputCategoryFilter = payload
    },
}