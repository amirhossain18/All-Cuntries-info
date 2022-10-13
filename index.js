 const lodeData = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data=>getcountry (data))
 }
  // console.log(Object.values(country.languages)[0])
const getcountry = countrys =>{
    
    const Countrylist=document.getElementById('country-list')
    for (const country of countrys){
    
     const newDiv=document.createElement('div')
     newDiv.classList.add('new-style')
     newDiv.innerHTML = `
     <img src=${country.flags.png} alt="">
       <h4>Country Name: ${country.name.common}</h4>
     <h6>capita: ${country.capital}</h6>
     <button onclick="moreData('${country.cca2}')">Details </button>
     
     `
     Countrylist.appendChild(newDiv);
    }
   
}

const moreData=(code)=>{

    const url= `https://restcountries.com/v3.1/alpha/${code}`
   fetch(url)
   .then(res=> res.json())
   .then(data=>  displayall(data[0]))
} 
const languageContainer=document.getElementById('language')
const displayall = languages => {

console.log()
  const newdiv1= document.createElement('div')
  languageContainer.innerText='';
  newdiv1.innerHTML = `
<h4>Language: ${Object.values(languages.languages)[0]}</h4>
  `
  languageContainer.appendChild(newdiv1)

}
lodeData ();
