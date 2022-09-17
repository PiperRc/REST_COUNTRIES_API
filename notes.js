{/* <section class="usa">
<img src="" alt="" class="flag">

<div class="info">
    <h2 class="country_name"></h2>
    <p class="population">Population:<span></span> </p>
    <p class="region"> Region: <span></span></p>
    <p class="capital">Capital:<span></span></p>
</div>

</section>
  */}


  
// make section and append to countries div
const countries=document.querySelector('.countries');
const section=document.createElement('section');
countries.append(section);

// make img,add flag class to it,append ot section
const img=document.createElement('img');
img.classList.add('flag');
section.append(img);

// make a div, add info class to it and append to section
const info=document.createElement('div');
info.classList.add('info');
section.append(info);

// create h3,p elements,respective spans and append spans

// country_name
const countryName=document.createElement('h3');
countryName.classList.add('country_name');

// population
const population=document.createElement('p');
population.innerHTML="Population:"
population.classList.add('population');

const populationSpan=document.createElement('span');
population.append(populationSpan);


// region
const region=document.createElement('p');
region.innerHTML='Region:'
region.classList.add('region');

const regionSpan=document.createElement('span');
region.append(regionSpan);

// capital
const capital=document.createElement('p');
capital.innerHTML='Capital:'
capital.classList.add('capital');

const capitalSpan=document.createElement('span');
capital.append(capitalSpan);

// append countryName,population,region and capital to info
info.append(countryName,population,region,capital);



fetch('https://restcountries.com/v3.1/name/peru')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        //flag
        img.src = data[0].flags.png;
        // title
        countryName.innerHTML = data[0].name.common;
        // population
        populationSpan.innerHTML = data[0].population;
        // region
        regionSpan.innerHTML = data[0].region;
        // capital
        capitalSpan.innerHTML=data[0].capital[0];
        // console.log(data[0]);
    })





fetch('https://restcountries.com/v3.1/all')
.then((res)=>{
    return res.json();
})
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
{/* <section class="usa">
<img src="" alt="" class="flag">

<div class="info">
    <h2 class="country_name"></h2>
    <p class="population">Population:<span></span> </p>
    <p class="region"> Region: <span></span></p>
    <p class="capital">Capital:<span></span></p>
</div>

</section>
  */}

  for(i=0;i<=250;i++){
  
    // make section and append to countries div
    const countries=document.querySelector('.countries');
    const section=document.createElement('section');
    countries.append(section);
    
    // make img,add flag class to it,append ot section
    const img=document.createElement('img');
    img.classList.add('flag');
    section.append(img);
    
    // make a div, add info class to it and append to section
    const info=document.createElement('div');
    info.classList.add('info');
    section.append(info);
    
    // create h3,p elements,respective spans and append spans
    
    // country_name
    const countryName=document.createElement('h3');
    countryName.classList.add('country_name');
    
    // population
    const population=document.createElement('p');
    population.innerHTML="Population:"
    population.classList.add('population');
    
    const populationSpan=document.createElement('span');
    population.append(populationSpan);
    
    
    // region
    const region=document.createElement('p');
    region.innerHTML='Region:'
    region.classList.add('region');
    
    const regionSpan=document.createElement('span');
    region.append(regionSpan);
    
    // capital
    const capital=document.createElement('p');
    capital.innerHTML='Capital:'
    capital.classList.add('capital');
    
    const capitalSpan=document.createElement('span');
    capital.append(capitalSpan);
    
    // append countryName,population,region and capital to info
    info.append(countryName,population,region,capital);
    
    
    
    fetch('https://restcountries.com/v3.1/all')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            //flag
            img.src = data[i].flags.png;
            // title
            countryName.innerHTML = data[i].name.common;
            // population
            populationSpan.innerHTML = data[i].population;
            // region
            regionSpan.innerHTML = data[i].region;
            // capital
            capitalSpan.innerHTML=data[i].capital[0];
            // console.log(data[0]);
        })
    
    
    
    }
    
    
    
    
    
    
    // fetch('https://restcountries.com/v3.1/all')
    // .then((res)=>{
    //     return res.json();
    // })
    // .then((data)=>{
    //     console.log(data);
    //     console.log(data[10].flags.png)
    // })
    
    