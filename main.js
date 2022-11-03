const form = document.querySelector('form'),
      inputs = document.querySelectorAll('input, select'),
      weight = [1,3,7,9,1,3,7,9,1,3],
      regex = {
        name: /^[A-Za-z]{3,31}[\s][A-Za-z]{3,31}$/,
        age: /^[0-9]{1,2}$/,
        email: /^[A-Za-z0-9._-]{3,24}[@]{1}[A-Za-z0-9.]{3,21}$/,
        phone: /^[0-9]{9}$/,
        class: /^[0-9]{1}[A-Za-z]{1}$/,
        title: /^[A-Za-z0-9]{3,31}/,
        author: /^[\D]{3,31}$/,
        isbn: /^[A-Za-z0-9]{13}$/,
      };

function error(element){
    element.classList.add('shake');
    setTimeout(() => element.classList.remove('shake'), 1250);
}

function pesel(input){
    let pesel = input.split(''),
        sum = 0;
    
    pesel.forEach((number, index)=>{
        if(index != 10) {
            let temp = ((number*1) * weight[index]).split('');
            sum += temp[temp.length-1]*1;
        };
    });
    if (pesel[10]*1 == 10-sum) return true;
}

function validate(inputs){
    if(inputs === null) return false;
    if(!inputs[0].value.match(regex.name)) return error(inputs[0]);
    if(inputs[1].value !== null && !inputs[1].value.match(regex.age)) return error(inputs[1]);
    if(!inputs[2].value.match(regex.email)) return error(inputs[2]);
    // if(!pesel(inputs[3].value)) return error(inputs[3]); NIE DZIALA IDK
    if(inputs[4].value === null) return error(inputs[4]);
    if(!inputs[5].value.match(regex.phone)) return error(inputs[5]);
    if(!inputs[6].value.match(regex.class)) return error(inputs[6]);
    if(!inputs[7].value.match(regex.title)) return error(inputs[7]);
    if(!inputs[8].value.match(regex.author)) return error(inputs[8]);
    if(!inputs[9].value.match(regex.isbn)) return error(inputs[9]);

    return true;
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    if(validate(inputs)) form.submit();
});

inputs.forEach((input)=>{
    input.addEventListener('invalid', function(e){
        e.preventDefault();
        if (!e.target.validity.valid) error(input);
    });
});