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
import star1 from './assets/star.svg';
import college1 from './assets/college1.jpg'
import anjac from './assets/anjaccollege.png'
import qesmark from './assets/mark.svg'
import exc from './assets/exclamation.svg'
import webdevolop from './assets/webdevelopment.png'
import skilldevolop from './assets/skilldevelopment.png'
import ui_ux from './assets/ui_ux.png'
import logodesign from './assets/logodesign.png'
import digitalmarketting from './assets/digitalmarketting.png'



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
        link:'https://www.instagram.com/unijac_technologies'
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
export const aboutcard=[
{
    h1:'VISION',
    p:'To build working culture among students to make them asentrepreneurs.',
    icon:star1
},
{
    h1:'MISSION',
    p:'Offering help to students to learn the cutting-edge-technology.',
    icon:star1
}
]

export const section3=[
    {
        src:anjac,
        h1:'WHO WE ARE',
        p:'With the support of ANJAC Principal and faculty members, this UNIJAC Technologies is a platform by students.',
        icon:qesmark
    },
    {
        src:college1,
        h1:'WHAT WE DOES',
        p:'We accelerate your business growth and make you to stand unique in this digital era. We help you to develop yourself through our skill development trainings.',
        icon:exc
    }]

export const service=[
    {
        img1:webdevolop,
        head1:'Web Development',
        para1:'Improve your website accessibility and attract lifetime clients to your business.Due to its ease of access,communication-incredible time saving,and efficiency,modern consumers now prefer going on the internet to fulfill any and all of the purchase need.',
        img2:skilldevolop,
        head2:'Skill Development',
        para2:'Skill development is the most efficient strategy for continually upskilling technology teams. It is an organization ability to use technology skills (both hard skills and leadership skills) as a competitive advantage and driver of business outcomes.',
    },
    {
        img1:ui_ux,
        head1:'UI Designing',
        para1:"User-focused,customer-centric creating experiences that deliver tangible business results, as a leading UI & Expressience design agency helps brands navigate any and all facets of today's, and tomorrow's",
        img2:ui_ux,
        head2:'UX Designing',
        para2:'We aim to provide positive experiences the keep users loyal to product or brand. UX allows you to define customer journeys on your website that are most conductive to business success.',
    },
    {
        img1:logodesign,
        head1:'Logo Designing',
        para1:"Every company has a unique logo that defines the entire brand or company name as well as their history. The logo evokes emotions and sensations relatedto your brand and helps build recall to ultimately grow your customer here.",
        img2:digitalmarketting,
        head2:'Digital Marketing',
        para2:'Digital marketing is one of the fasted-growing fields in the internet marketing business. Using digital marketing the right way, you can reach on enormous audience in a way that is both cost-effective and measurable.',
    },
]



export default routes;