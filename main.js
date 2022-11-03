const form = document.querySelector('form'),
      inputs_dom = document.querySelectorAll('input, select'),
      inputs = [],
      regex = {
        name: /^[A-Za-z]{3,31}[\s][A-Za-z]{3,31}$/,
        age: /^[0-9]{1,2}$/,
        email: /^[A-Za-z._-]{3,24}[@]{1}[A-Za-z.]{3,21}$/,
        phone: /^[0-9]{9}$/,
        isbn: /^[0-9]{13}$/,
      };

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    inputs_dom.forEach((input)=>inputs.push(input.value));
    if(validate(inputs)) console.log('Poprawnie');
});

inputs.forEach((input)=>{
    input.addEventListener('invalid', function(e){
        e.preventDefault();
        if (!e.target.validity.valid){
            input.classList.add('shake');
            setTimeout(() => {
                input.classList.remove('shake');
            }, 1250);
        }
    });
});

function validate(inputs){
    if(inputs === null) return false;
    if(!inputs[0].match(regex.name)) return false;
    if(inputs[1] !== null && !inputs[1].match(regex.age)) return false;
    if(!inputs[2].match(regex.email)) return false;
    if(inputs[4] !== 'm' || inputs[4] !== 'f') return false;
    if(!inputs[5].match(regex.phone)) return false;

    const [imie, nazwisko] = inputs[0].split(' ');
    console.log(imie, nazwisko);
}