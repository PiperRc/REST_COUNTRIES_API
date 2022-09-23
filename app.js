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

//   not working:
// 85,98,189,198


makeCards();

async function makeCards() {
    let res = await fetch('https://restcountries.com/v3.1/all');
    let data = await res.json();
    const countries = document.querySelector('.countries');

    for (i = 0; i <= 249; i++) {

        //make section and append to countries div
        const section = document.createElement('section');
        countries.append(section);

        //flag
        // make img,add flag class to it,append to section
        const img = document.createElement('img');
        img.classList.add('flag');
        section.append(img);
        img.src = data[i].flags.png;


        // make a div, add info class to it and append to section
        const info = document.createElement('div');
        info.classList.add('info');
        section.append(info);

        // create h3,p elements,respective spans and append spans

        // country_name
        const countryName = document.createElement('h3');
        countryName.classList.add('country_name');
        countryName.innerHTML =`${data[i].name.common}` ;

        // population

        const population = document.createElement('p');
        population.innerHTML = "Population:"
        population.classList.add('population');
        const populationSpan = document.createElement('span');
        population.append(populationSpan);
        populationSpan.innerHTML = data[i].population;

        // region
        const region = document.createElement('p');
        region.innerHTML = 'Region:'
        region.classList.add('region');

        const regionSpan = document.createElement('span');
        region.append(regionSpan);
        regionSpan.innerHTML = data[i].region;
        

        // capital
        
        const capital = document.createElement('p');
        capital.innerHTML = 'Capital:'
        capital.classList.add('capital');

        const capitalSpan = document.createElement('span');
        capital.append(capitalSpan);

        if(!('capital' in data[i])){
            capitalSpan.innerHTML='none'
        }
        else{
        capitalSpan.innerHTML = data[i].capital[0];
        }

        // append countryName,population,region and capital to info
        info.append(countryName, population, region, capital);
        // console.log(data[0]);  
    }

}





// fetch('https://restcountries.com/v3.1/all')
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
//     // console.log(data[41].name.common)
   
//     // console.log(data[10].flags.png);
// })

