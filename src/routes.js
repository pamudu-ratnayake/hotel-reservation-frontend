import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
// import Register from "views/examples/Register.js";
// import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import ReserveTaxi from "./views/examples/TaxiReservation/ReserveTaxi.js"
import TrackTaxi from './views/examples/TaxiReservation/TaxiTracking'
import MyTaxiReservations from './views/examples/TaxiReservation/MyTaxiReservations.js'
import UpdateTaxiReservation from './views/examples/TaxiReservation/UpdateReservation.js'
import AddTravelerDetails from "views/AddTravelerDetails";
import UpdateTravelerDetails from "views/UpdateTravelerDetails";
import ViewReservation from "views/ViewReservation";
import TravelerList from "views/TravelerList";
import Login from "views/examples/auth/Login";
import Register from "views/examples/auth/Register";
// import Register from "views/examples/Register.js";
// import Login from "views/examples/Login.js";
import AddReservationInformation from "views/reservationInformation/AddReservationInformation";
import DisplayReservations from "views/reservationInformation/DisplayReservations";
import ViewDisplayReservations from "views/reservationInformation/ViewReservationInformation";
import UpdateReservationInformation from "views/reservationInformation/UpdateReservationInformation";
import HotelDashboard from "views/HotelDashboard";
import Payment from "./views/examples/Payment/Payment.js"

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/viewreservation/:_id",
    name: "View Reservation",
    icon: "ni ni-key-25 text-info",
    component: ViewReservation,
    layout: "/admin",
  },
  {
    path: "/updatetraveler/:_id",
    name: "Update Taveler Details",
    icon: "ni ni-key-25 text-info",
    component: UpdateTravelerDetails,
    layout: "/admin",
  },
  {
    path: "/addreservationinformation",
    name: "AddReservationInformation",
    icon: "ni ni-planet text-blue",
    component: AddReservationInformation,
    layout: "/admin",
  },
  {
    path: "/displayreservation",
    name: "DisplayReservations",
    icon: "ni ni-pin-3 text-orange",
    component: DisplayReservations,
    layout: "/admin",
  },
  {
    path: "/viewreservation/:_id",
    name: "ViewDisplayReservations",
    icon: "ni ni-single-02 text-yellow",
    component: ViewDisplayReservations,
    layout: "/admin",
  },
  {
    path: "/updatereservation/:_id",
    name: "UpdateReservationInformation",
    icon: "ni ni-bullet-list-67 text-red",
    component: UpdateReservationInformation,
    layout: "/admin",
  },
  {
    path: "/addtaxi",
    name: "Reserve Taxi",
    icon: "ni ni-bullet-list-67 text-red",
    component: ReserveTaxi,
    layout: "/admin",
  },
  {
    path: "/taxitracking",
    name: "Track Taxi",
    icon: "ni ni-bullet-list-67 text-red",
    component: TrackTaxi,
    layout: "/admin",
  },
  {
    path: "/mytaxireservations",
    name: "My Taxi Reservations",
    icon: "ni ni-bullet-list-67 text-red",
    component: MyTaxiReservations,
    layout: "/admin",
  },
  {
    path: "/updatetaxireservation",
    name: "Update Taxi Reservation",
    icon: "ni ni-bullet-list-67 text-red",
    component: UpdateTaxiReservation,
    layout: "/admin",
  },
  {
		path: "/hotel-index",
		name: "Dashboard",
		icon: "ni ni-tv-2 text-primary",
		component: HotelDashboard,
		layout: "/hotel",
	},
  {
    path: "/payment",
    name: "Payment",
    icon: "ni ni-bullet-list-67 text-red",
    component: Payment,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-key-25 text-info",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/addtraveler",
    name: "Add Taveler Details",
    icon: "ni ni-single-02 text-yellow",
    component: AddTravelerDetails,
    layout: "/admin",
  },
   
  {
    path: "/travelerlist",
    name: "Taveler List",
    icon: "ni ni-key-25 text-info",
    component: TravelerList,
    layout: "/admin",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];
export default routes;
