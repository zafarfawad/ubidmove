import axios from "axios";

export default {
  // Gets all books
  getVendors: function() {
    return axios.get("/api/vendors");
  },
  // Gets the book with the given id
  getVendor: function(id) {
    return axios.get("/api/vendors/" + id);
  },
  // Deletes the book with the given id
  deleteVendor: function(id) {
    return axios.delete("/api/vendors/" + id);
  },
  // Saves a book to the database
  saveVendor: function(updateVendorInfo) {
    return axios.post("/api/vendors", updateVendorInfo);
  },

  createVendor: function(newVendorInfo,authUserId) {
    console.log('createvendor',newVendorInfo, authUserId);
    newVendorInfo.authUserId = authUserId;
    return axios.post("/api/signup", newVendorInfo,authUserId);
  },

  // getNyData: function(start, end, topic) {
  //   const myBegin = "&begin_date=" + start;
  //   const myEnd = "&end_date=" + end;
  //   const myQuery = "&q=" + topic;
  //   const URL = BASEURL + APIKEY + myQuery + myBegin + myEnd;
  //   console.log(URL);
  //   return axios.get(URL);
  // }
};
