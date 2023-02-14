export const state = () => ({
    inputFirstName: "",
    inputLastName: "",
    inputGender: "",
    inputIndustryExperience: "",
    inputIndustryWanted: "",
    inputSpecialization: "",
    selectCountryFrom: "",
    selectNationality: "",
    selectLangs: "",
    inputExpectedStartDate: "",
    inputDiplomas: "",
    inputHasAfricanPastExperience: "",
    inputJobName: "",
    inputDiplomas: "",
    inputContract: "",
    inputSchoolname: "",
    inputSalaries: "",
    inputWorkplaces: [],
    inputYearsOfExperience: "",
    inputFilePicture: "",
    inputFileCv: "",
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
    },
    mutateSelectCountryFrom(state, payload) {
        state.selectCountryFrom = payload
    },
    mutateSelectNationality(state, payload) {
        state.selectNationality = payload
    },
    mutateSelectLangs(state, payload) {
        state.selectLangs = payload
    },
    mutateInputExpectedStartDate(state, payload) {
        state.inputExpectedStartDate = payload
    },
    mutateInputDiplomas(state, payload) {
        state.inputDiplomas = payload
    },
    mutateInputHasAfricanPastExperience(state, payload) {
        state.inputHasAfricanPastExperience = payload
    },
    mutateInputJobName(state, payload) {
        state.inputJobName = payload
    },
    mutateInputDiplomas(state, payload) {
        state.inputDiplomas = payload
    },
    mutateInputSchoolname(state, payload) {
        state.inputSchoolname = payload
    },
    mutateInputSalaries(state, payload) {
        state.inputSalaries = payload
    },
    mutateInputContract(state, payload) {
        state.inputContract = payload
    },
    mutateInputWorkplaces(state, payload) {
        state.inputWorkplaces = payload
    },
    mutateInputYearsOfExperience(state, payload) {
        state.inputYearsOfExperience = payload
    },
    mutateInputFilePicture(state, payload) {
        state.inputFilePicture = payload
    },
    mutateInputFileCv(state, payload) {
        state.inputFileCv = payload
    },
}