function buttonClicker(){
    
    let randomCat = document.getElementById('random');
    fetch('https://cataas.com/cat').then(res=> res.blob()).then(res => {
        console.log(res)
        randomCat.src = URL.createObjectURL(res);

        setTimeout($("#random").attr('alt', 'Gato Aleatorio'), 3000);
        $(randomCat).show();
        let btn1 = document.getElementById('btn1');
    
        function btnDisable(){
            btn1.classList.add('btn-disable');
        };
        function btnEnable(){
            btn1.classList.remove('btn-disable')
        }
        btnDisable();
        if (btn1.classList != 'btn-disable'){
            btnDisable();
        }else{
            setTimeout(btnEnable, 10000);
        }
    })
      

};

function buttonClicker2(){
   
    let cuteCat = document.getElementById('cute');
    
    
    fetch('https://cataas.com/cat/cute').then(res=> res.blob()).then(res => {
        console.log(res)
        cuteCat.src = URL.createObjectURL(res);
        
        setTimeout($("#cute").attr('alt', 'Gato lindo'), 3000);
        
        let btn1 = document.getElementById('btn2');
        $(cuteCat).show();
        function btnDisable(){
            btn1.classList.add('btn-disable');
        };
        function btnEnable(){
            btn1.classList.remove('btn-disable')
            
        }
        btnDisable();
        if (btn1.classList != 'btn-disable'){
            btnDisable();
        }else{
            setTimeout(btnEnable, 13000);
        }
    })
      

}