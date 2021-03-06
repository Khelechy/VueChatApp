import Vue from "vue"
import Router from "vue-router"

const LandingPage = () => import("../components/Home/LandingPage.vue")
const Login = () => import("../components/Auth/Login.vue")
const QrLogin = () => import("../components/Auth/QrCodeLogin")
const Register = () => import("../components/Auth/Register.vue")
const WebRtcComponent = () => import("../components/MessageBox/RealTime/WebRTCPeerConnection.vue")
const PaymentMethods = () => import("../components/SetUp/PaymentMethods/PaymentMethods.vue")
Vue.use(Router)
const routes = new Router({
    routes: [
        {
            path: "/",
            name: "login-page",
            component: Login
        },
        {
            path: "/qr-login",
            name: "qr-login-page",
            component: QrLogin
        },
        {
            path: "/register",
            name: "register",
            component: Register
        },


        {
            path: "/web-rtc",
            name: "web-rtc",
            component: WebRtcComponent
        },

        {
            path: "/home",
            name: "home",
            component: LandingPage,
            children: [
                {
                    path: "/contact-information",
                    name: "contact-information",
                    component: () => import("../components/SetUp/ContactInfomation/ContactInformationCreate.vue")

                },
                {
                    path: "/payment-methods-list",
                    name: "payment-methods-list",
                    component: PaymentMethods,
                },
                {
                    path: "/country_list",
                    name: "country_list",
                    component: () => import("../components/SetUp/CountriesStatesZones/CountryList")

                },

                {
                    path: "/state-list",
                    name: "state-list",
                    component: () => import("../components/SetUp/CountriesStatesZones/States/StateList")

                },
                {
                    path: "/zone-list",
                    name: "zone-list",
                    component: () => import("../components/SetUp/CountriesStatesZones/Zones/ZoneList")

                },
                //Orders routes
                {
                    path: "/order-list",
                    name: "order-list",
                    component: () => import("../components/Orders/OrderList/OrderItemList")
                },
                {
                    path: "/order-statuses",
                    name: "order-statuses",
                    component: () => import("../components/Orders/OrderStatuses/OrderStatusList")
                }, 
                {
                    path: "/order-statistics",
                    name: "order-statistics",
                    component: () => import("../components/Orders/Statistics/StatisticItemList")
                },

                {
                    path: "/payment-transaction",
                    name: "payment-transaction",
                    component: ()=>import("../components/Orders/PaymentTransaction/PaymentTransactionList")
                        
                },

                //Catalog Routes
                {
                    path: "/product-list",
                    name: "product-list",
                    component: () => import("../components/Products/ProductList")
                },

                {
                    path: "/category-list",
                    name: "category-list",
                    component: () => import("../components/Products/Categories/CategoryList")
                },
                {
                    path: "/review-list",
                    name: "review-list",
                    component: () => import("../components/Products/Reviews/ReviewList")
                },


                //Users routes
                {
                    path: "/user-list",
                    name: "user-list",
                    component: () => import("../components/Users/UserList")
                },
                {
                    path: "/user-create",
                    name: "user-create",
                    component: () => import("../components/Users/UserCreate")
                },
                {
                    path: "/permission-list",
                    name: "permission-list",
                    component: () => import("../components/Users/Permissions/PermissionList")

                },
                {
                    path: "/role-list",
                    name: "role-list",
                    component: () => import("../components/Users/Roles/RoleList")
                },
            ]
        },
        { path: '*', redirect: '/home' }
    ],
    mode: "history"
})
export default routes
