import axios from 'axios';

export default {
  getData: function() {
    return axios.get('/api')
  }, 
  handleRegistration: function(profileData) {
    return axios.post('/api/newregistration', profileData)
  }
}