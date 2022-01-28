const submitBtn = document.getElementById('submitBtn'); // submit button wali jhg
const cityName = document.getElementById('cityName');   // jaha city ka naam daalna h 
const city_name = document.getElementById('city_name'); // get output wali jgh
const temp_real = document.getElementById('temp_real');
const temp_status = document.getElementById('temp_status');
const day = document.getElementById('day');
const date = document.getElementById('date');
const month = document.getElementById('today_month');


const data_hide = document.querySelector('.middle_layer');  	// data hide krne ke lie
// async mtlb wait krna h 
const getInfo = async(event) => {
    event.preventDefault();

    let cityVal = cityName.value;
    if(cityVal === ''){     // if user has written nothing 
        city_name.innerText = `Plz write the name before search`;
        data_hide.classList.add('data_hide');
    }else{
        try{
            // API &unit=metric taaki celcius m data mile
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ceb2b0191f6b89a9a324cd63edcfe09f`;
            const fetchData = await fetch(url);
            const data = await fetchData.json() // data ko json ke form m kr dega;
            // console.log(data);
            const arrData = [data]; // data ko arr m kr dia
            // console.log(arrData);

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;  //city ka naam or us country ka naam
            temp_real.innerText = arrData[0].main.temp;  // Temperture aa jaega
            
            // Condition to check Sunny or cloudy
            const tempMood = arrData[0].weather[0].main;    // cloudy, sun etc h ya nii wo dekhega
            if(tempMood === 'Clear'){
                temp_status.innerHTML = `<i class="fas fa-sun" style='color': #eccc68></i>`;
            }
            else if(tempMood === 'Clouds'){
                temp_status.innerHTML = `<i class="fad fa-clouds" style='color': #f1f2f6></i>`;
            }
            else if(tempMood === 'Rain'){
                temp_status.innerHTML = `<i class="fas fa-cloud-rain" style='color: #a4b0be'></i>`;
            }
            else{
                temp_status.innerHTML = `<i class="fas fa-sun" style='color': #eccc68></i>`;
            }

            data_hide.classList.remove('data_hide');

        }catch{
            city_name.innerText = `Plz enter the city name properly`;
            data_hide.classList.add('data_hide');
            
            
        }
        
    }
    
    
}

submitBtn.addEventListener('click', getInfo)



// Day
const currentDay = () => {
const day = new Array(6);
    day[0] = 'Sunday';
    day[1] = 'Monday';
    day[2] = 'Tuesday';
    day[3] = 'Wednesday';
    day[4] = 'Thusday';
    day[5] = 'Friday';
    day[6] = 'Saturday';
    const date = new Date();
    const todayDay = day[date.getDay()];
    return todayDay;
    }
    
    day.innerText = currentDay();

// Date
date.innerText = new Date().getDate();

// Month
const currentMonth = () => {
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date();
    const todayMonth = month[date.getMonth()];
    return todayMonth;
}

month.innerText = currentMonth();

