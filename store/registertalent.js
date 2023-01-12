export const state = () => ({
    inputFirstName: "",
    inputLastName: "",
    inputGender: "",
    inputIndustryExperience: "",
    inputIndustryWanted: "",
    inputSpecialization: "",
    inputWorkWhereWanted: [],    
})

export const mutations = {
    mutateInputLastName (state, payload) {
        state.inputLastName = payload
    },
    mutateInputFirstName (state, payload) {
        state.inputFirstName = payload
    },
    mutateInputGender (state, payload) {
        state.inputGender = payload
    },
    mutateInputIndustryExperience (state, payload) {
        state.inputIndustryExperience = payload
    },
    mutateInputIndustryWanted (state, payload) {
        state.inputIndustryWanted = payload
    },
    mutateInputSpecialization (state, payload) {
        state.inputSpecialization = payload
    },
    mutateInputWorkWhereWanted (state, payload) {
        state.inputWorkWhereWanted = payload
    }
}