$(document).ready(function () {
    function Func(){
        function Func1() {
        $('.boll').css({ "bottom": "570px ", "transition": "1s" ,"padding":"0 0"})
        $('.block').css({ "transition": "1s", "left": "500px ", "top":"300px" ,"opacity":"0"})
         $('.block2').css({ "transition": "3s", "right": "750px ","top":"250px","opacity":"1"})
     
    }
    setTimeout(Func1, 1000)
    function Func2(){
        $('.boll').css({ "bottom": "539px ", "transition": ".5s" , "padding":"0 41px"}) 
        $('.block').css({ "transition": ".5s", "left": "1000px ","top":"200px","opacity":"0"})
        
    }
    Func1()
    setTimeout(Func2, 2000)
    function Func3(){
        $('.boll').css({ "bottom": "570px ", "transition": "1s" , "padding":"0 0" })
        $('.block2').css({ "transition": "1s", "right": "950px ","top":"300px","opacity":"0"})
        $('.block').css({ "transition": "1s", "left": "700px ","top":"250px","opacity":"1"})
        
    }
    setTimeout(Func3, 3000)
    function Func4(){
        $('.boll').css({ "bottom": "539px ", "transition": "0.5s"  , "padding":"0 41px"})
        $('.block2').css({ "transition": ".5s", "right": "500px ","top":"200px","opacity":"0"})
        $('.block').css({ "transition": ".5s", "left": "700px ","top":"250px","opacity":"1"})
        
    }
    setTimeout(Func4, 4000) 
    }
   Func()
setInterval(Func, 5000)

})