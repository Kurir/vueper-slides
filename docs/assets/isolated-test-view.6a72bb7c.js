import{r as s,o,c as n,a as u,t as p,b as d,w as c,F as g,d as m,e as v,_ as y,V as h,f as k}from"./index.11cc49aa.js";function f(e,a,w,$,A,P){const l=s("vueper-slide"),i=s("vueper-slides");return o(),n("div",null,[u("p",null,"autoplaying: "+p(e.internalAutoPlaying),1),d(i,{class:"no-shadow",autoplay:"",onAutoplayPause:a[0]||(a[0]=t=>e.internalAutoPlaying=!1),onAutoplayResume:a[1]||(a[1]=t=>e.internalAutoPlaying=!0)},{default:c(()=>[(o(!0),n(g,null,m(e.slides,(t,r)=>(o(),v(l,{key:r,image:t.image,title:t.title,content:t.content},null,8,["image","title","content"]))),128))]),_:1})])}const b={components:{VueperSlides:h,VueperSlide:k},data:()=>({internalAutoPlaying:!0,slides:[{title:"El Teide Volcano, Spain",content:"Photo by Max Rive",image:"/vueperslides/images/el-teide-volcano-spain.jpg",link:"https://www.maxrivephotography.com/index/C0000rU1RKCHdqwI/G0000X57AtIzuRX0/I0000Gvr9HqdtyXk"},{title:"Chernobyl, Ukraine",content:"Photo by Jesse Moran",image:"/vueperslides/images/chernobyl-ukraine.jpg",link:"https://www.flickr.com/photos/jessemoran"},{title:"Crater Lake, Oregon, USA",content:"Photo by Jesse Moran",image:"/vueperslides/images/crater-lake-oregon-usa.jpg",link:"https://flic.kr/p/2cxrCmp"}],breakpoints:{1200:{slideRatio:1/5,touchable:!0},1100:{slideRatio:1/4,touchable:!0},900:{slideRatio:1/3,touchable:!1},600:{slideRatio:1/2,arrows:!1,bulletsOutside:!0,touchable:!1}}}),methods:{log(...e){console.log(...e)},getImage:e=>`/vueperslides//images/${e}`}};var C=y(b,[["render",f]]);export{C as default};
