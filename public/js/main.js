const cityName = document.getElementById('cityName')
const submitBtn = document.getElementById('submitBtn')

const city_name = document.getElementById('city_name')

const temp_real_val = document.getElementById('temp_real_val')
const temp_status = document.getElementById('temp_status')

const dataHide = document.querySelector('.middle-layer')

const getinfo = async (event) => {
    event.preventDefault()
    let cityVal = cityName.value
    if (cityVal === "") {
        city_name.innerText = `plz enter valid city name before search`
        dataHide.classList.add('data-hide')
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=22b4f2d401106e2637b022d2826122cb`
            const response = await fetch(url)
            const data = await response.json()
            const arrData = [data]

            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`
            temp_real_val.innerText = arrData[0].main.temp 

            const tempMood = arrData[0].weather[0].main
            // condition to check sunny or cloudy or rainy
            if (tempMood == "clear") {
                temp_status.innerHTML =
                    '<i class="fas fa-sun" style="color:#eccc68;"></i>'
            }
            else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                    '<i class="fas fa-cloud" style="color:#f1f2f6;"></i>'
            }
            else if (tempMood == "Rain") {
                temp_status.innerHTML =
                    '<i class="fas fa-cloud-rain" style="color:#a4b0be;"></i>'
            }
            else if (tempMood == "Haze") {
                temp_status.innerHTML =
                    '<i class="fas fa-smog" style="color:#1e272e;"></i>'
            }
            else {
                temp_status.innerHTML =
                    '<i class="fas fa-sun" style="color:#eccc68;"></i>'
            }
            dataHide.classList.remove('data-hide')

        } catch {
            city_name.innerText = `plz enter valid city name properly`
            dataHide.classList.add('data-hide')

        }
    }
}
submitBtn.addEventListener('click', getinfo)

