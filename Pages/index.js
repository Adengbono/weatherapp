import React from 'react'

const Login = React.lazy(() => import('./LogIn'))
const SignUp = React.lazy(() => import('./SignUp'))
const Post = React.lazy(() => import('./Post'))
const bouUp = React.lazy(() => import('./bouUp'))


const Pages = {
    Login,
    SignUp,
    Post,
    bouUp
   
    
}

export default Pages;
