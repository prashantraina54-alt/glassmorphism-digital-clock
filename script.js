let hrs=document.getElementsByClassName("hrs")
let colon=document.getElementsByClassName("colon")
let minutes=document.getElementsByClassName("minutes")
let date=document.getElementsByClassName("date")
let month=document.getElementsByClassName("month")
let year=document.getElementsByClassName("year")
let day=document.getElementsByClassName("day")
let ampm=document.getElementsByClassName("ampm")
let sec=document.getElementsByClassName("sec")
let days=[
    "MON","TUE","WED","THRUS","FRI","SAT","SUN"
]
let months=[
    "JAN","FEB","MAR","APRI","MAY","JUNE","JULY","AUGUST","SEPT","OCT","NOV","DEC"
]

setInterval(()=>{
let time=new Date()
let h=time.getHours()
let m=time.getMinutes()
let s=time.getSeconds()
let d=time.getDate()
// time=String(time).padStart(2,"0")
hrs[0].innerHTML=String(h).padStart(2,"0")
minutes[0].innerHTML=String(m).padStart(2,"0")
date[0].innerHTML=String(d).padStart(2,"0")
year[0].innerHTML=time.getFullYear()
day[0].innerHTML=days[time.getDay()]
month[0].innerHTML=months[time.getMonth()]
sec[0].innerHTML=String(s).padStart(2,"0")
ampm[0].innerHTML=time.getHours()>12?"PM":"AM"    
},1000)
