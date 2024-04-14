function problema1() {
    var p1_input = document.querySelector('#p1-input').value.trim();
    
    if (p1_input === '') {
        document.querySelector('#p1-output').textContent = 'Por favor, ingresa algunas palabras.';
        return;
    }
    
    var arr = p1_input.split(' ');

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('').reverse().join('');
    }
    
    var p1_res = arr.join(' ');

    document.querySelector('#p1-output').textContent = p1_res;
}



function problema2(){
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    v1 = v1.sort(function(a,b){
        return b-a;
    })

    v2 = v2.sort(function(a,b){
        return b-a;
    })

    v2 = v2.reverse();

    var p2_producto = 0;

    for(var i=0; i<v1.length; i++){
        p2_producto += v1[i] * v2[i];
    }

    document.querySelector('#p2-output').textContent = 'Producto Escalar Minimo: ' + p2_producto;
}

function problema3() {
    var p3_input = document.querySelector('#p3-input').value.trim();
    
    if (p3_input === '') {
        document.querySelector('#p3-output').textContent = 'Por favor, ingresa algunas palabras.';
        return;
    }

    var palabras = p3_input.split(',');
    var maxCaracteresUnicos = 0;
    var palabraMaxCaracteresUnicos = '';
    var caracteresUnicosPalabraMax = [];

    for (var i = 0; i < palabras.length; i++) {
        var palabra = palabras[i].toUpperCase();
        var caracteresUnicos = [...new Set(palabra)].length; // Longitud del conjunto de caracteres únicos
        if (caracteresUnicos > maxCaracteresUnicos) {
            maxCaracteresUnicos = caracteresUnicos;
            palabraMaxCaracteresUnicos = palabra;
            caracteresUnicosPalabraMax = [...new Set(palabra)].join(', '); // Caracteres únicos separados por comas
        }
    }

    document.querySelector('#p3-output').textContent = `${palabraMaxCaracteresUnicos} = ${maxCaracteresUnicos} (${caracteresUnicosPalabraMax})`;
}
