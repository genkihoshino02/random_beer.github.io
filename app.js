document.addEventListener('DOMContentLoaded',()=>{
    const beerName=document.querySelector('.beerInfo');
    const boozeDescription=document.querySelector(".description");
    const startBtn=document.querySelector(".startButton");

    function start(e){
    fetch('https://api.punkapi.com/v2/beers/random')
        .then(response => response.json())
        .then(data=>{
           
             e.preventDefault();
            const name=data[0].name;
            const {volume}=data[0];
            const volumeValue=volume.value;
            const volumeUnit=volume.unit;
            const description=data[0].description;
            

            beerName.innerHTML=name+" "+ '<br>' +volumeValue+volumeUnit;
            boozeDescription.innerHTML=description;

  
            
            
           
        })
    }
         startBtn.addEventListener("click",start);
})