import axios from "axios";

export default {
  // Gets all books
  getVendors: function() {
    return axios.get("/api/vendors");
  },
  getZipCode: function() {
    return axios.get("/api/vendors/service");
  },
  getService: function() {
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

  createVendor: function(newVendorInfo, authUserId) {
    console.log("createvendor", newVendorInfo, authUserId);
    newVendorInfo.authUserId = authUserId;
    return axios.post("/api/signup", newVendorInfo, authUserId);
  },
  //=============================================================================//

  moverOrder: function(orderInfo) {
    console.log("createvendor", orderInfo);
    return axios.post("/api/mover/submitorder", orderInfo);
  }
};
