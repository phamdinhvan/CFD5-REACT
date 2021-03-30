import MainLayout from "./layout/MainLayout";
import CoinIntro from "./pages/CoinIntro";
import Collaborate from "./pages/Collaborate";
import CourseDetail from "./pages/CourseDetail";
import Courses from "./pages/Courses";
import Email from "./pages/Email";
import Error from "./pages/Error";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Pay from "./pages/Pay";
import Profile from "./pages/Profile";
import Info from "./pages/Profile/components/Info";
import MyCoin from "./pages/Profile/components/MyCoin";
import MyCourse from "./pages/Profile/components/MyCourse";
import Payment from "./pages/Profile/components/Payment";
import Project from "./pages/Profile/components/Project";
import Projects from "./pages/Projects";
import Register from "./pages/Register";
import Team from "./pages/Team";

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
                component : Profile,
                auth: true,
                routers: [
                    {
                        path: '/course',
                        component: MyCourse,
                    },
                    {
                        path: '/project',
                        component: Project
                    },
                    {
                        path: '/hisotry-payment', 
                        component: Payment
                    },
                    {
                        path: '/coin',
                        component: MyCoin
                    },
                    {
                        path: '/',
                        component: Info,
                        exact: true
                    }
                ]
            },
            {
                path : "/project",
                component : Projects
            },
            {
                path : "/register/:slug",
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
                path : "/coursedetail/:slug",
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