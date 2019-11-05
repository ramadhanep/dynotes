import Vue from 'vue'
import Router from 'vue-router'

import SplashScreen from '@/components/SplashScreen'

import Login from '@/components/Auth/Login'

import Home from '@/components/Pages/Home'

import Layouts from '@/components/Pages/Layouts/Layouts'

import NotesList from '@/components/Pages/Notes/List'
import NoteDetail from '@/components/Pages/Notes/Detail'

import AccountInfo from '@/components/Pages/Account/Info'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: "/",
            name: "SplashScreen",
            component: SplashScreen
        },
        {
            path: "/login",
            name: "Login",
            component: Login
        },

        {
            path: "/",
            component: Layouts,
            children: [
                {
                    path: "/home",
                    name: "Home",
                    component: Home
                },
                {
                    path: "/notes",
                    name: "NotesList",
                    component: NotesList
                },
                {
                    path: "/note/:id",
                    name: "NoteDetail",
                    component: NoteDetail
                },
                {
                    path: "/accoutInfo",
                    name: "Account",
                    component: AccountInfo
                },
            ]
        }
    ]
})