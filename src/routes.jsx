import Home from './assets/home.svg';
import About from './assets/employee.svg'
import Service from './assets/mind-system.svg'
import Contact from './assets/contact.svg'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import web from './assets/location.svg';
import brain from './assets/brain.svg';
import ui from './assets/ui.svg';
import ux from './assets/user.svg';
import dm from './assets/analytics.svg';
import linkedin from './assets/linkedin.svg';
import twitter from './assets/twitter.svg';
import insta from './assets/insta.svg';
import fb from './assets/fb.svg';

const routes=[
    {
        name:'Home',
        path:'/home',
        icon:Home           
    },
    {
        name:'About',
        path:'/about',
        icon:About                 
    },
    {
        name:'Services',
        path:'/services',
        icon:Service               
    },
    {
        name:'Contact',
        path:'/contact',
        icon:Contact                 
    }
]

export const  carousels=[ {
        src:img1,
        id:'slide1'
    },
    {
        src:img2,
        id:'slide2'
    }
];
export const card =[
    {
        title:'web Development',
        src:web,
        description:'“Website without visitors is like a ship lost in the horizon.”' ,
        btn_type:'btn-success'  
    },
    {
        title:'Skill Development',
        src:brain,
        description:"“Schooling doesn't assure employment but skill does.” ...",
        btn_type:'btn-primary'   
    },
    {
        title:'UI Designing',
        src:ui,
        description:'“Everything is designed. Few things are designed well.”' ,
        btn_type:''  
    },
    {
        title:'UX Designing',
        src:ux,
        description:'“Design is not just what it looks like and feels like. Design is how it works.”' ,
        btn_type:'btn-accent'   
    },
    {
        title:'Digital Marketing    ',
        src:dm,
        description:'“Good marketing makes the company look smart. Great marketing makes the customer feel smart.”',
        btn_type:''    
    },
]
export const socialIcons=[
    {
        svg:twitter,
        link:'https://mobile.twitter.com/unijac_tech'
    },
    {
        svg:insta,
        link:'https://www.instagram.com/unijac_technologies/?__coig_restricted=1'
    },
    {
        svg:fb,
        link:'https://m.facebook.com/UnijacTechnologies'
    },
    {
        svg: linkedin,
        link:'https://www.linkedin.com/in/unijac-technologies-95516a25b'
    }
]
export default routes;