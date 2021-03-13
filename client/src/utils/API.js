import axios from 'axios';

export default {
  handleRegistration: function(profileData) {
    return axios.post('/api/users/newregistration', profileData)
  },
  createNewEvent: function(eventData) {
    return axios.post('/api/users/newevent', eventData)
  } 
}