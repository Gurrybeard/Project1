//load dom content (event 1/3)
document.addEventListener('DOMContentLoaded',()=>{
    //confirmation
console.log('dom content loaded');
//dom elements 
//var names correspond to dom element ids
const location = document.getElementById('location');
const cf = document.getElementById('cf');
const conditionImg = document.getElementById('conditionImg');
const temp = document.getElementById('temp');
const condition = document.getElementById('condition');
const locationQuery = document.getElementById('locationQuery');
const locationSubmit = document.getElementById('locationSubmit');
let cftog = true;
//fetch params
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        'X-RapidAPI-Key': '5e519ad7camsh9d194aefdd5d6e5p1bd575jsncd523e2ed36e'
    }
};
//repeatable fetch +dom update function with query param
function fetchq(q){
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${q}`, options)
    .then(response => response.json())
    .then((data)=> {
        console.log(data)
        //update the dom content
        location.innerHTML=data.location.name;
        conditionImg.src='https:'+data.current.condition.icon;
        temp.innerHTML=data.current.temp_f + "F°"
        cf.innerHTML="F°"
        cftog = true;
        condition.innerHTML=data.current.condition.text
        // f/c tog event
        //(event 3/3)
        //used .onclick instead of addeventlistner(click) because it only needs one event
        cf.onclick= function(){
            if(cftog){
                cftog =false;
                cf.innerHTML="C°"
                temp.innerHTML=data.current.temp_c + "C°"
            }
            else if(!cftog){
                cftog=true;
                cf.innerHTML="F°"
                temp.innerHTML=data.current.temp_f + "F°"
            }
        }
        //(event 4and5/3)
        //changes the location to lat and lon values on hover and leave
        location.addEventListener('mouseenter',()=>{
            location.innerHTML = `lat:${data.location.lat} Lon:${data.location.lon}`
        })
        location.addEventListener('mouseleave',()=>{
            location.innerHTML = location.innerHTML=data.location.name;
            location.style
        })

    })
    .catch(err => console.error(err));
}
//load new york as default location
fetchq('new york')
//input listeners
//(event 2/3)
locationSubmit.addEventListener('click',()=>{
   //api get request on a click
    fetchq(locationQuery.value)
})

})
