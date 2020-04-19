function converter(){
    let bin = window.document.getElementById('bin')
    let res = window.document.getElementById('res')
    let num = bin.value;
    let decimal = 0
    if(bin.value.length == 0 || bin.value > '11111111'){
        window.alert('Numeros binarios sao compostos de 1s e 0s!')
    }else{
        for(let i = 0; i < 8; i++ ){            
            if(num[i] == 1){
            decimal += 2**i
            }else{
            decimal += 0
            }
        }
        res.innerHTML = `Convertido: ${decimal}`
}
}