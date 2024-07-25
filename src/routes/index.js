import Home from '@/pages/home/home.jsx';
import NonAuthedLayout from "@/layouts/non-authed-layout.jsx";
import SignIn from "@/pages/authentication/sign-in.jsx";
import Dashboard from "@/pages/admin/dashboard/dashboard.jsx";
import SignUp from "@/pages/authentication/sign-up.jsx";
import HouseDetail from "@/pages/home/house-detail.jsx";
import Profile from "@/pages/home/profile/profile.jsx";

const publicRoutes = [
    { path: '/', component: Home, layout: NonAuthedLayout },
    { path: '/sign-in', component: SignIn, layout: NonAuthedLayout },
    { path: '/sign-up', component: SignUp, layout: NonAuthedLayout },
    { path: '/house-detail', component: HouseDetail, layout: NonAuthedLayout, withId: true },
    { path: '/profile', component: Profile, layout: NonAuthedLayout },
];

const privateRoutes = [
    { path: '/dashboard', component: Dashboard, layout: NonAuthedLayout },
    // { path: '/dashboard/tag', component: TagTable, layout: MasterLayout },
    // { path: '/dashboard/film', component: FilmTable, layout: MasterLayout },
];

export { publicRoutes, privateRoutes };