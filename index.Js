var btnSom = document.getElementById("btnSom");
btnSom.addEventListener('click', som);

var btnSub = document.getElementById("btnSub");
btnSub.addEventListener('click', sub);

var btnMult = document.getElementById("btnMult");
btnMult.addEventListener('click', mult);

var btnDiv = document.getElementById("btnDiv");
btnDiv.addEventListener('click', div);

var btnClean =document.getElementById("btnClean");
btnClean.addEventListener('click', clean);

        function som() {
            var c1 = document.getElementById('txt01');
            var c2 = document.getElementById('txt02');
            var result = document.getElementById('resultado');

            var num1 = parseInt(c1.value);
            var num2 = parseInt(c2.value);

            var resultado = num1 + num2;
            result.innerText = "A soma é: " + resultado;

        }
        function sub() {
            var c1 = document.getElementById('txt01');
            var c2 = document.getElementById('txt02');
            var result = document.getElementById('resultado');

            var num1 = parseFloat(c1.value);
            var num2 = parseFloat(c2.value);

            var resultado = num1 - num2;
            result.innerText = "A subtração é: " + resultado;
        }
        function mult() {
            var c1 = document.getElementById('txt01');
            var c2 = document.getElementById('txt02');
            var result = document.getElementById('resultado');

            var num1 = parseFloat(c1.value);
            var num2 = parseFloat(c2.value);

            var resultado = num1 * num2;
            result.innerText = "A Multiplicação é: " + resultado;
        }
        function div() {
            var c1 = document.getElementById('txt01');
            var c2 = document.getElementById('txt02');
            var result = document.getElementById('resultado');

            var num1 = parseFloat(c1.value);
            var num2 = parseFloat(c2.value);

            var resultado = num1 / num2;
            result.innerText = "A divisão é: " + resultado;
        }

        function clean() {
            document.getElementById("resultado").innerHTML = "Resultado";
            document.getElementById('miFormulario').reset();
      } 