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
            <div>
              <button class="btn btn-outline-secondary me-2" @click="logout()">
                Log Out
              </button>
            </div>
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
    <h1 class="text-center text-primary manager-page-container fw-700">
      Manager Page
    </h1>
    <div class="container my-5">
      <table class="table table-hover table-bordered" id="DataTable">
        <thead>
          <tr>
            <th>Reservation ID</th>
            <th>User Name</th>
            <th>Number of people</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Cost</th>
            <th>Accepted</th>
            <th>Decision</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="reservation in reservations" :key="reservation.id">
            <td>{{ reservation.id }}</td>
            <td>{{ reservation.User.name }}</td>
            <td>{{ reservation.numberofpeople }}</td>
            <td>{{ reservation.startDate }}</td>
            <td>{{ reservation.endDate }}</td>
            <td>{{ reservation.cost }}</td>
            <td>{{ reservation.accepted }}</td>
            <td class="text-center d-flex">
              <button class="btn btn-primary text-white me-2" @click="acceptReservation(reservation.id)">Accept</button>
              <button class="btn btn-primary text-white" @click="rejectReservation(reservation.id)">Reject</button>
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
import ManagerService from "@/services/ManagerService.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import Footer from "@/components/Footer";
import AccountService from "@/services/AccountService";
export default {
  name: "DetailedManagerPage",
  data: () => ({
    reservations: [],
    acceptForm:{
      reservationId: ''
    },
    rejectForm:{
      reservationId: ''
    }
  }),
  components: {
    Footer,
  },
  methods:{
    acceptReservation(id) {
      const self = this
      this.acceptForm.reservationId = id
      ManagerService.acceptReservation(this.acceptForm)
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
    rejectReservation(id) {
      const self = this
      this.rejectForm.reservationId = id
      ManagerService.acceptReservation(this.rejectForm)
          .then(function () {
            self.showLoader = false;
            console.log("Rejected Request")
          })
          .catch(function () {
            self.showLoader = false;
          });
      window.location.reload();
    },
    logout() {
      const self = this
      AccountService.logoutUser()
          .then(function () {
            self.$store.dispatch("resetState");
            console.log("User logged Out!");
            self.$router.push("/homepage");
          })
          .catch((error) => {
            self.errorMessage = error.message;
            console.log("There was an error!", error);
          });
    },
  },
  mounted() {
    //API Call
    setTimeout(() => {
      $("#DataTable").DataTable();
    });
    const self = this
    ManagerService.getUnprocessedReservationsPerPlace(this.$route.params.id)
        .then(function (res) {
          self.showLoader = false;
          console.log(res.data);
          //console.log(res.data.Category.description)
          self.reservations = res.data || [];
          console.log(self.reservations)
        })
        .catch(function () {
          self.showLoader = false;
        });
  },
};
</script>
