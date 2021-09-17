# exercicios

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Calculadora</title>
    <style>
        *{
            margin:0;
            padding:0;
        }
        .fundo{
            background-image: linear-gradient(45deg, rgb(18, 253, 249), rgb(241, 8, 136));
            height: 100vh;
            color: rgb(12, 0, 0);
            font-family: sans-serif;
            text-align: center;
        }
        .calculadora{
           position: absolute;
           background-color: rgb(132, 65, 187);
           top: 50%;
           left: 50%;
           transform: translate(-50%,-50%);
           border-radius: 20px;
           padding:15px;
        }
        .botao{
            width: 50px;
            height: 50px;
            font-size: 25px;
            cursor: pointer;
            margin: 3px;
            background-color:rgb(241, 193, 193);
            border: none;
           color:rgb(8, 20, 29)
        }
        .botao{
           background-color: rgb(247, 191, 191);
        }
        #resultado{
            background-color: blanchedalmond;
            width: 207px;
            height: 30px;
            margin: 5px;
            font-size: 25px;
            color: black;
            text-align: right;
        }
    </style>
</head>
<body>
   <div class="fundo">
       <h1>EDUARDA ALMEIDA</h1>
       <div class="calculadora">
       <h1>Calculadora</h1>
       <p id="resultado"></p>
       <table>
         <tr>
             <td><button class="botao" onclick="clean()">C</button></td>
             <td><button class="botao" onclick="back()"><</button></td>
             <td><button class="botao"  onclick="insert('/')">/</button></td>
             <td><button class="botao"  onclick="insert('X')">X</button></td>   
         </tr>
         <tr>
            <td><button class="botao"  onclick="insert('7')">7</button></td>
            <td><button class="botao"  onclick="insert('8')">8</button></td>
            <td><button class="botao"  onclick="insert('9')">9</button></td>
            <td><button class="botao"  onclick="insert('-')">-</button></td>  
        </tr>
        <tr>
            <td><button class="botao"  onclick="insert('4')">4</button></td>
            <td><button class="botao"  onclick="insert('5')">5</button></td>
            <td><button class="botao"  onclick="insert('6')">6</button></td>
            <td><button class="botao"  onclick="insert('+')">+</button></td>  
        </tr>
        <tr>
            <td><button class="botao"  onclick="insert('1')">1</button></td>
            <td><button class="botao"  onclick="insert('2')">2</button></td>
            <td><button class="botao"  onclick="insert('3')">3</button></td>
            <td rowspan="2"><button class="botao" style="height: 106px;"  onclick="calcular('')">=</button></td>  
        </tr>
        <tr>
            <td colspan="2"><button class="botao" style="width: 106px;"  onclick="insert('0')">0</button></td>
            <td><button class="botao"  onclick="insert('.')">.</button></td>
        </tr>
    </table>
       </div>
       </div>
     <script>
         function insert(num)
         {
         var numero = document.getElementById('resultado').innerHTML;
         document.getElementById('resultado').innerHTML = numero + num
         }
         function clean()
         {
             document.getElementById('resultado').innerHTML = "";
         }
         function back()
         {
             var resultado = document.getElementById('resultado').innerHTML;
             document.getElementById('resultado').innerHTML = resultado. substring(0, resultado.length -1);

         }
        
        function calcular()
            {
           var resultado  = document.getElementById('resultado').innerHTML;
           if(resultado)
           {
               document.getElementById('resultado').innerHTML = eval(resultado);
           }
           else
           {
               document.getElementById('resultado').innerHTML = "..."
           }
            }
        
     </script>
       
</body>
</html>