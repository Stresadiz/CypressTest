const obtainWeather = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({tmp: 28,condition: 'sunny', city: 'Madrid'});
        }, 2000);
    })
};

async function seeReport() {
    const weather = await obtainWeather();

    console.log("tmp: " + weather.tmp + "\ncondition: " + weather.condition + "\ncity: " + weather.city);
    
}

seeReport();