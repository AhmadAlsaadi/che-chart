var department="ENCH"
var program="Chemical Enegineering Curriculum Flow Chart"
const curr=[
 
    {name:"semester1", courses:[
        {name:["","Semester I"]},
        {name:allcourses.ENIE.ENIE100,pre:[allcourses.ENCH.ENCH110]},
        {name:allcourses.EDAR.EDAR101,pre:[]},
        {name:allcourses.SCMT.SCMT211,pre:[allcourses.SCMT.SCMT101]},
        {name:allcourses.SCPH.SCPH211,pre:[allcourses.SCPH.SCPH101,allcourses.SCMT.SCMT101]},
        {name:allcourses.SCPH.SCPH214,pre:[allcourses.SCPH.SCPH101]},
        {name:allcourses.SCCH.SCCH211,pre:[allcourses.SCCH.SCCH101]},
       
    ]},
    {name:"semester2", courses:[
        {name:["","Semester II"]},
        {name:allcourses.ENIE.ENIE255,pre:[allcourses.SCMT.SCMT101]},
        {name:allcourses.SCMT.SCMT212,pre:[allcourses.SCMT.SCMT101]},
        {name:allcourses.ENCI.ENCI101,pre:[allcourses.SCPH.SCPH214]},
        {name:allcourses.ENME.ENME102
            ,pre:[allcourses.ENCH.ENCH110]},
        {name:allcourses.ENCH.ENCH110,pre:[allcourses.SCCH.SCCH211]},
        {name:allcourses.ENEE.ENEE101,pre:[allcourses.SCMT.SCMT101]},
        {name:allcourses.ENIE.ENIE202,pre:[allcourses.ENIE.ENIE100]},
    ]},
    {name:"semester3", courses:[
        {name:["","Semester III"]},
        {name:allcourses.ENCH.ENCH201,pre:[allcourses.SCCH.SCCH101]},
        {name:allcourses.SCCH.SCCH213,pre:[allcourses.SCCH.SCCH101]},
        {name:allcourses.SCMT.SCMT221,pre:[allcourses.SCMT.SCMT211]},
        {name:allcourses.SCMT.SCMT222,pre:[allcourses.SCMT.SCMT211]},
        {name:allcourses.EDAR.EDAR202,pre:[allcourses.EDAR.EDAR101]},
        
    ]},
    {name:"semester4", courses:[
        {name:["","Semester IV"]},
        {name:allcourses.ENCH.ENCH204,pre:[allcourses.ENCH.ENCH201,allcourses.SCMT.SCMT222]},
        {name:allcourses.ENCH.ENCH202,pre:[allcourses.ENCH.ENCH201]},
        {name:allcourses.ENME.ENME203,pre:[allcourses.ENCI.ENCI101]},
        {name:allcourses.SCMT.SCMT223,pre:[allcourses.SCMT.SCMT211,allcourses.SCMT.SCMT212]},
        {name:allcourses.ENIE.ENIE231,pre:[allcourses.SCMT.SCMT211]},
        {name:allcourses.ISLM.ISLM201,pre:[]},
        {name:allcourses.ENIE.ENIE203,pre:[allcourses.ENIE.ENIE100]},
    ]},
    {name:"semester5", courses:[
        {name:["","Semester V"]},
        {name:allcourses.ENCH.ENCH302,pre:[allcourses.ENCH.ENCH202]},
        {name:allcourses.ENCH.ENCH305,pre:[allcourses.ENCH.ENCH204]},
        {name:allcourses.ENCH.ENCH306,pre:[allcourses.ENCH.ENCH204,allcourses.ENCH.ENCH305]},
        {name:allcourses.ENCH.ENCH341,pre:[allcourses.ENCH.ENCH201,allcourses.ENCH.ENCH306]},
        {name:allcourses.ISLM.ISLM202,pre:[allcourses.ISLM.ISLM201]},
        {name:allcourses.SCCH.SCCH215,pre:[allcourses.SCCH.SCCH213]},
    ]},
    {name:"semester6",courses:[
        {name:["","Semester VI"]},
        {name:allcourses.ENCH.ENCH350, pre:[allcourses.ENCH.ENCH201,allcourses.SCMT.SCMT222]},
        {name:allcourses.ENCH.ENCH330, pre:[allcourses.ENCH.ENCH302,allcourses.ENCH.ENCH306]},
        {name:allcourses.ENCH.ENCH342, pre:[allcourses.ENCH.ENCH341]},
        {name:allcourses.ENCH.ENCH325, pre:[allcourses.ENCH.ENCH201]},
        {name:allcourses.ENCH.ENCH320,pre:[allcourses.ENEE.ENEE101,allcourses.SCMT.SCMT222]},
        {name:allcourses.ENEE.ENEE305, pre:[allcourses.SCPH.SCPH211]},
        {name:allcourses.XXXX.XXXXI,pre:[]}
    ]},
    
    {name:"semester7", courses:[
        {name:["","Summer"]},
        {name:allcourses.ENCH.ENCH390,pre:[]},
    ]},
    
    {name:"semester7", courses:[
        {name:["","Semester VII"]},
        {name:allcourses.ENCH.ENCH421,pre:[allcourses.ENCH.ENCH350,allcourses.ENCH.ENCH330]},
        {name:allcourses.ENCH.ENCH420, pre:[allcourses.ENCH.ENCH330,allcourses.ENCH.ENCH325]},
        {name:allcourses.ENCH.ENCH499,pre:[]},
        {name:allcourses.ENCH.ENCHX,pre:[]},
        {name:allcourses.ISLM.ISLM303, pre:[allcourses.ISLM.ISLM202]},
        {name:allcourses.ENCH.ENCH390,pre:[]}
    ]},
    {name:"semester8",courses:[
        {name:["","Semester VIII"]},
        {name:allcourses.ENCH.ENCH422,pre:[allcourses.ENCH.ENCH330,allcourses.ENCH.ENCH420]},
        {name:allcourses.ENCH.ENCH426,pre:[allcourses.ENCH.ENCH420]},
        {name:allcourses.ENCH.ENCHXX,pre:[]},
        {name:allcourses.ENCH.ENCHXXX,pre:[]},
        {name:allcourses.XXXX.XXXXII,pre:[]}
        ]},
   
]