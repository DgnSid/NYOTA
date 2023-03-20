export default function ({ $axios, redirect }) {
    $axios.onError(error => {
      console.log('errrrro', error.response)
      if(error.response.status === 401 && error.response.data.message === "JWT Token not found") {
        redirect('/error-401')
      }

      if(error.response.status === 403) {
        redirect('/error-403')
      }
    })
  }