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
hrs[0].innerHTML=time.getHours()
minutes[0].innerHTML=time.getMinutes()
date[0].innerHTML=time.getDate()
year[0].innerHTML=time.getFullYear()
day[0].innerHTML=days[time.getDay()]
month[0].innerHTML=months[time.getMonth()]
sec[0].innerHTML=time.getSeconds()
ampm[0].innerHTML=time.getHours()>12?"PM":"AM"    
},1000)
