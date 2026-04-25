document.addEventListener('DOMContentLoaded', () => {
    const TEXT = document.getElementById('text');
    const BUT = document.getElementById('but');
    
    const validation = document.getElementById('validation');
    const operator = document.getElementById('operator');
    const locat = document.getElementById('location');
    const nameCountry = document.getElementById('countryName');

    BUT.addEventListener('click', async () => {
        let number = TEXT.value;
        if (number === '') {
            validation.innerHTML = `Введите номер телефона`;
            
        } else {
        const options = {
            method: 'GET'
         };
        try {
        let url = `https://cors-anywhere.herokuapp.com/https://num.voxlink.ru/get/?num=${number}`;
        let result = await fetch(url, options);
        let data = await result.json();
        let location = data.operator;
        let carrier = data.region;
        let old_oper = data.old_operator;
        let ful_num = data.full_num;
        
        operator.innerHTML = carrier;
        locat.innerHTML = location;
        validation.innerHTML = ful_num;
        if (!old_oper) {
            nameCountry.innerHTML = '-';
        } else {
            nameCountry.innerHTML = old_oper;
        }

    } catch (error) {
        console.log(error);
        }
        }
    });
});