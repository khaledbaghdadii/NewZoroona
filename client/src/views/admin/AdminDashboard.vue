<template>
  <div>
    <div class="position-fixed top-0 w-100 navbar-container py-2">
      <nav class="navbar navbar-expand-md bg-dark navbar-light">
        <div class="container">
          <div class="navbar-brand d-flex">
            <img
              src="@/assets/images/zoroona-icon.png"
              alt="Zoroona Logo"
              class="me-2"
            />
            <div id="LogoName">ZOROONA</div>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between"
            id="collapsibleNavbar"
          ></div>
        </div>
      </nav>
    </div>
    <div class="container my-5">
      <h1 class="text-center text-primary manager-page-container fw-700">
        Admin Page
      </h1>
      <table class="table table-hover table-bordered" id="DataTable">
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Manager ID</th>
            <th>Request Type</th>
            <th>Processed</th>
            <th>Decision </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="request in requests" :key="request.id">
            <td>{{ request.id }}</td>
            <td>{{ request.User==null?"":request.User.name }}</td>
            <td>{{ request.RequestType.description }}</td>
            <td>{{ request.processed }}</td>
            <td class="text-center d-flex">
              <button class="btn btn-primary text-white me-2" @click="acceptRequest(request.id)">Accept</button>
              <button class="btn btn-primary text-white" @click="rejectRequest(request.id)">Reject</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Footer class="text-white mt-5"></Footer>
  </div>
</template>
<script>
//Bootstrap and jQuery libraries
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import Footer from "@/components/Footer";
import AdminService from "@/services/AdminService";
export default {
  name: "AdminDashboard",
  data: () => ({
    requests: [],
    acceptForm:{
      requestId: ''
    },
    rejectForm:{
      requestId: ''
    }
  }),
  methods:{
    acceptRequest(id) {
      const self = this
      this.acceptForm.requestId = id
      AdminService.acceptRequest(this.acceptForm)
          .then(function () {
            self.showLoader = false;
            console.log("Accepted Request")
          })
          .catch(function (e) {
            console.log(e.messageerror)
            self.showLoader = false;
          });
      window.location.reload();
    },
    rejectRequest(id) {
      const self = this
      this.rejectForm.requestId = id
      AdminService.acceptRequest(this.rejectForm)
          .then(function () {
            self.showLoader = false;
            console.log("Rejected Request")
          })
          .catch(function () {
            self.showLoader = false;
          });
      window.location.reload();
    },
  },
  mounted() {
    //API Call
    setTimeout(() => {
      $("#DataTable").DataTable();
    });
    const self = this
    AdminService.getRequests()
        .then(function (res) {
          self.showLoader = false;
          console.log(res.data);
          //console.log(res.data.Category.description)
          self.requests = res.data || [];
          console.log(self.requests)
        })
        .catch(function () {
          self.showLoader = false;
        });
  },
  components: {
    Footer,
  },
};
</script>
