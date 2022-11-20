let hpoint=document.getElementById("homepoint")
let gpoint=document.getElementById("guestpoint")
let hcount=0
let gcount=0
let h=hpoint.innerText
let g=gpoint.innerText
// function changecolor(h,g){
//     if (g< h) {
//         let h= '<p style="color:green;">' + h+ '</p>'
//     }else if (g>= h) {
//         let g= '<p style="color:green;">' + g + '</p>'
//     }
// }
function homeincby1(){
    hcount+=1
    hpoint.innerText=hcount
}
function homeincby2(){
    hcount+=2
    hpoint.innerText=hcount
}
function homeincby3(){
    hcount+=3
    hpoint.innerText=hcount
}
function homeincby4(){
    hcount-=1
    hpoint.innerText=hcount
}
function guestincby1(){
    gcount+=1
    gpoint.innerText=gcount
}
function guestincby2(){
    gcount+=2
    gpoint.innerText=gcount
}
function guestincby3(){
    gcount+=3
    gpoint.innerText=gcount
}
function guestincby4(){
    gcount-=1
    gpoint.innerText=gcount
}
function resetgame(){
    hpoint.innerText=0
    gpoint.innerText=0
}
