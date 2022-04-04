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
//fetch params
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        'X-RapidAPI-Key': '5e519ad7camsh9d194aefdd5d6e5p1bd575jsncd523e2ed36e'
    }
};
//input listeners
//(event 2/3)
locationSubmit.addEventListener('click',()=>{
   
    
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${locationQuery.value}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
})
})