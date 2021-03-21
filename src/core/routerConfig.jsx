import MainLayout from "../layout/MainLayout";
import CoinIntro from "../pages/CoinIntro";
import Collaborate from "../pages/Collaborate";
import CourseDetail from "../pages/CourseDetail";
import Courses from "../pages/Courses";
import Email from "../pages/Email";
import Error from "../pages/Error";
import FAQ from "../pages/FAQ";
import Home from "../pages/home";
import Pay from "../pages/Pay";
import Profile from "../pages/profile";
import Projects from "../pages/Projects";
import Register from "../pages/Register";
import Team from "../pages/team";

const routers = [
    {
        path : "/email" ,
        exact : true,
        component : Email
    },
    {
        path : "/",
        component : MainLayout,
        routers : [
            {
                path : "/contact",
                component : Collaborate
            },
            {
                path : "/course",
                component : Courses
            },
            {
                path : "/profile",
                component : Profile
            },
            {
                path : "/project",
                component : Projects
            },
            {
                path : "/register",
                component : Register
            },
            {
                path : "/team",
                component : Team
            },
            {
                path : "/pay",
                component : Pay
            },
            {
                path : "/faq",
                component : FAQ
            },
            {
                path : "/coin",
                component : CoinIntro
            },
            {
                path : "/coursedetail",
                component : CourseDetail
            },
            {
                path : "/",
                component : Home,
                exact : true
            },
            {
                component : Error
            }

        ],
    }
];

export default routers
    