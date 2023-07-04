const schacchiera= document.querySelector('.schacchiera-container')
schacchiera.classList.add('gap-3')
const celletotali = 8 * 8;  
for (let i =0; i < celletotali; i++){
    // const singolaCella = '<div class="square-schacchiera"></div>';
    let singolaCella = document.createElement('div');
    singolaCella.classList.add('square-schacchiera')
    singolaCella.innerHTML= i.toString()
    singolaCella.classList.add('bg-primary','d-flex','align-items-center','justify-content-center')
    // per non far partire la condizione da 0 imposto  !=0
    if(i  % 3 === 0 && i != 0){
        singolaCella.classList.add('bg-dark','text-light')
        singolaCella.innerHTML = "Fizz"

    }
    if (i % 5 === 0 && i != 0){
        singolaCella.classList.add('bg-primary-subtle')
        singolaCella.innerHTML = "Buzz"
    }

    if ( i  % 3 === 0 &&  i % 5 === 0 && i != 0){
        // i colori si sovvarppongono quindi utilizzo un . remove per togllierli
        singolaCella.classList.remove('bg-dark','bg-primary','bg-primary-subtle')
        singolaCella.classList.add('bg-success')
        singolaCella.innerHTML = "FizzBuzz"
    }
        
    // if (i === 0){
    //     singolaCella.classList.remove('bg-dark','text-light')
    // }

    schacchiera.append(singolaCella)
}