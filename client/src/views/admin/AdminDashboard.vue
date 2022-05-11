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
            <th>Decsison</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>hajhsaj</td>
            <td>hajhsaj</td>
            <td>hajhsaj</td>
            <td>hajhsaj</td>
            <td class="d-flex justify-conetnt-center">
              <button class="btn btn-primary text-white me-2">Accept</button>
              <button class="btn btn-primary text-white">Reject</button>
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
export default {
  name: "AdminDashboard",
  mounted() {
    //API Call
    setTimeout(() => {
      $("#DataTable").DataTable();
    });
  },
  components: {
    Footer,
  },
};
</script>
