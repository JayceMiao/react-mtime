import {
    Home,
    Find,
    Buyticket,
    Mine,
    Shopping,
    Login
} from "pages"

export const TabBarRoute = [
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        text:"首页"
    },
    {
        path:"/find",
        component:Find,
        meta:{
            flag:true
        },
        text:"发现"
    },
    {
        path:"/buyticket",
        component:Buyticket,
        meta:{
            flag:true
        },
        text:"购票"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            requiredAuth:true
        },
        text:"我的"
    },
    {
        path:"/shopping",
        component:Shopping,
        meta:{
            flag:true
        },
        text:"商城"
    },
    
];

export const NoTabBarRoute = [
    {
        path:"/login",
        component:Login,
        meta:{}
    },
];

export const RouteConfig = TabBarRoute.concat(NoTabBarRoute);