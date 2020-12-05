console.log("In calc")
//first operand and digit collector
var reg1=''
//result and second operand
var reg2=''
//Operation
var ops=''
//current display
disp0=''
//history
disp1=''

 

document.getElementById("btn0").addEventListener('click',function(e){
    console.log("0")
    reg1 = reg1+'0'
    disp0 +='0'
    updateCalc(disp0)
    console.log(reg1)
})

document.getElementById("btn1").addEventListener('click',function(e){
    console.log("1")
     reg1=reg1+'1'
     disp0 +='1'
     updateCalc(disp0)
})

document.getElementById("btn2").addEventListener('click',function(e){
    console.log("2")
     reg1=reg1+'2'
     disp0 +='2'
     updateCalc(disp0)
})

document.getElementById("btn3").addEventListener('click',function(e){
    console.log("3")
    reg1=reg1+'3'
    disp0 +='3'
    updateCalc(disp0)
})

document.getElementById("btn4").addEventListener('click',function(e){
    console.log("4")
    reg1=reg1+'4'
    disp0 +='4'
    updateCalc(disp0)
})

document.getElementById("btn5").addEventListener('click',function(e){
    console.log("5")
    reg1=reg1+5
    disp0 +='5'
    updateCalc(disp0)
})

document.getElementById("btn6").addEventListener('click',function(e){
    console.log("6")
    reg1=reg1+6
    disp0 +='6'
    updateCalc(disp0)
})

document.getElementById("btn7").addEventListener('click',function(e){
    console.log("7")
    reg1=reg1+7
    disp0 +='7'
    updateCalc(disp0)
})

document.getElementById("btn8").addEventListener('click',function(e){
    console.log('8')
    reg1=reg1+8
    disp0 +='8'
    updateCalc(disp0)
})

document.getElementById("btn9").addEventListener('click',function(e){
    console.log("9")
    reg1=reg1+9
    disp0 +='9'
    updateCalc(disp0)
})

document.getElementById("btndot").addEventListener('click',function(e){
    console.log(".")
    if(reg1.indexOf('.')=== -1){
     reg1=reg1+'.'
     disp0 +='.'
    }
    updateCalc(disp0)
})

document.getElementById("btnadd").addEventListener('click',function(e){
    console.log("+")
    //handle multiple pressing of same operator
    if( ops != '+'){
      ops='+'
      disp0 +='+'
      console.log ("+:ops:"+ops+"disp0:"+disp0)
      updateCalc(disp0)
      compute()
    }
})

document.getElementById("btnsub").addEventListener('click',function(e){
    console.log("-")
   //handle multiple pressing of same operator
    if( ops != '-'){
      ops='-'
      disp0 +='-'
      console.log ("+:ops:"+ops+"disp0:"+disp0)
      updateCalc(disp0)
      compute()
    }
})

document.getElementById("btnmul").addEventListener('click',function(e){
    console.log("*")
    //handle multiple pressing of same operator
    if( ops != '*'){
      ops='*'
      disp0 +='*'
      console.log ("+:ops:"+ops+"disp0:"+disp0)
      updateCalc(disp0)
      compute()
    }
})

document.getElementById("btndiv").addEventListener('click',function(e){
    console.log("/")
    //handle multiple pressing of same operator
    if( ops != '/'){
      ops='/'
      disp0 +='/'
      console.log ("+:ops:"+ops+"disp0:"+disp0)
      updateCalc(disp0)
      compute()
    }
})

document.getElementById("btneql").addEventListener('click',function(e){
    console.log("=")
    compute()

    
})
document.getElementById("btnac").addEventListener('click', function(e){
    console.log("AC")
    resetCalc()
})

// reset calc

resetCalc = function(){
    reg1=''
    reg2=''
    disp0=''
    ops=''
    updateCalc(disp0)
    updateOldDisplay(reg2)

}

// window.onload = resetCalc()

// C clear single
document.getElementById("btnc").addEventListener('click', function(e){
   reg1= reg1.substr(0, reg1.length-1)
   updateCalc(reg1)
})

//update display
updateCalc=function(c){

document.getElementById("textarea").textContent=c
}

//update old display
updateOldDisplay=function(c){
    document.getElementById("oldtext").textContent=c
}

//compute function 

compute=function(){

// case: reg1 reg2 are empty : return no action

if ((reg1.length == 0) && (reg2.length == 0)){
    console.log ("reg1=reg2=0:"+ reg1 + reg2 )
    //disp0 +=''
    // updateCalc('0')
    return
}

// reg1 empty reg2 filled : display 2nd operand and return

if( (reg1.length == 0) && (reg2.length !=0) ){
     console.log ("reg1=0 reg2!=0:"+ reg1 + reg2 )
   // disp0 +=reg2
   // updateCalc(disp0)
    updateOldDisplay(disp0)
    return
}

// reg1 filled reg2 empty : single operand entry case 
// wait for 2nd operand to get filled

if( (reg1.length != 0) && (reg2.length == 0)) {
    console.log ("reg1!=0 reg2=0:"+ reg1 + reg2 )
     reg2=reg1
     reg1=''
     //disp0 +=reg2
     updateCalc(disp0)
     return

}

// reg1 and reg2 filled : compute reg2 = reg1 ops reg2 

if( (reg1.length != 0) && (reg2.length !=0)) {
  console.log ("reg1 !=0 reg2 !=0:"+ reg1 + reg2 )
  switch (ops) {
      case '+': 
        reg2=parseFloat(reg2) + parseFloat(reg1)
        break

      case '-': 
      reg2=parseFloat(reg2) - parseFloat(reg1)
      break

      case '*': 
      reg2=parseFloat(reg2) * parseFloat(reg1)
      break

      case '/': 
      if (parseFloat(reg1) != 0){
            reg2= parseFloat(reg2)/parseFloat(reg1)
       }else{
           reg2='Error'
       }
     break
     
     default:
      return
    }

    disp0 =reg2
    reg1=''
    ops=''
    updateCalc(disp0)
    updateOldDisplay(reg2)
    console.log("disp0:" + disp0 +"reg1:"+reg1 + "reg2:"+reg2)
}

}


