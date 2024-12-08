const canvas = document.querySelector("canvas")
const ctx=canvas.getContext("2d")

const animation_intro = document.getElementById("#animation_intro")
const main = document.querySelector("main")

setTimeout(()=>{
  animation_intro.style.display="none"
},1000)


//Feramentas
const button = [...document.querySelectorAll("button")]
const lapis = document.querySelector("button#lapis")
const lixeira = document.querySelector("button#lixeira")
const paleta = document.querySelector("button#paleta>input[type=color]")


//subFerramentas
const editor_lapis=document.querySelector(".editor")
const lapis_largura =document.querySelector("#largura")
const lapis_expresura=document
.querySelector("#expresura")

const editor_cofing = document.querySelector("#cofing")
const btn_sistema=document.querySelector("#sistema")
const btn_ativo=document.querySelector(".btn_ativar")

var cor = "black"
var verification = false
var cont = 1

const desenho=(px,py)=>{
  ctx.beginPath()
  ctx.fillStyle=cor
  ctx.arc(px - canvas.offsetLeft,py - canvas.offsetTop,lapis_largura.value,(Math.PI/180)*0,(Math.PI/180)*360,false)
  ctx.fill()
  ctx.closePath()
}

paleta.addEventListener('change',(evt)=>{
  cor=evt.target.value
})

lapis.addEventListener('click',()=>{
  cont++
  if(cont%2==0){
    editor_lapis.style.display="flex"
    canvas.addEventListener('touchstart',()=>{
      verification=true
    })

    canvas.addEventListener('mousedown',(evt)=>{
      verification=true
    })
    canvas.addEventListener('mousemove',(evt)=>{
      if(verification)desenho(evt.clientX,evt.clientY)
    })
    canvas.addEventListener('mouseup',()=>{
      verification=false
      if(verification==false)desenho()
    })
  }else{
    editor_lapis.style.display="none"
  }
})


//interatividade com as ferramentas/buttoes

btn_ativo.addEventListener('click',()=>{
  editor_lapis.style.display="none"
  editor_cofing.style.display="none"
})

let cont_sistema=1

btn_sistema.addEventListener('click',()=>{
  ++cont_sistema
  if(cont_sistema%2==0)editor_cofing.style.display="flex"
  else{
    editor_cofing.style.display="none"
  }
})
lixeira.addEventListener('click',()=>{
  ctx.clearRect(0,0,400,600)
})

canvas.addEventListener('touchmove',(evt)=>{
  let x = evt.touches[0].clientX
  let y = evt.touches[0].clientY
  if(verification)desenho(x,y)
})