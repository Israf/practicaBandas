function colorTest(a,b,c,d,e,f){

    var mainColor=document.createElement("div");
    // Contiene las 6 bandas
    document.body.appendChild(mainColor);
    // Para incluir el contenedor en el body
    mainColor.style="margin:10px;display: flex;justify-content: center;flex-wrap: wrap; background:#fff1;border: 2px solid #fff;border-radius:22%;";
    // Para darle estilo al contenedor principal
    var nomc;
    var color1,color2;
    // Para que tenga color transparente y otro para color solido
    const arreglo=[a,b,c,d,e,f];
    // El resultado de las 5 bandas
    var newDiv = document.createElement("div");
  
    for(i=0;i<arreglo.length;i++){
      // Para recorrer el vector
      nomc=nombreColor(arreglo[i]);
      // Llama al puto color que tiene en la funcion color
      var newP = document.createElement("p");
      // Para crear un parrafo
      var newColor = document.createTextNode( nomc );
      // Para crear un nodo
      newP.appendChild(newColor);
      // Incluir el color al parrafo
      color2=defineColor(arreglo[i]);
      // Recive el color de acuerdo a la entrada del arreglo
      color1=defCol(arreglo[i]);
      // Recive el color de acuerdo a la entrada del arreglo "transparente"
      newP.style="margin:0 10px;border: 1px solid "+color1+"; background-color:"+color2+"; width: 80px ;height:80px; color:"+color1+"; text-align:center";
      // Para darle estilo a mi parrafo
      mainColor.appendChild(newDiv);
      mainColor.appendChild(newP);
      // Para incluir contenedor y parrafo al contenedor principal
    }
  }
  
  function Calcula(b1,b2,b3,b4,b5,b6){
    var contenedor = document.createElement("div");
  contenedor.style="margin:10px; padding:10px; border: 1px solid #fff; border-radius:5px; text-align:center; color:#000000; background: rgba(255,255,255,0.8)";
    // Para darle estilo al contenedor de resultado
  colorTest(b1,b2,b3,b4,b5,b6);
    var valResistencia=(b1*100+b2*10+b3) * Math.pow(10,b4);
    var tolerancia=b5;
    var ppm=b6;
    // Formula para calcular resistencia y tolerancia
  
    switch(parseInt(b5)){
      case 1:tolerancia=1;break;
      case 2:tolerancia=2;break;
      case 5: tolerancia=0.5;break;
      case 6: tolerancia=0.25;break;
      case 7: tolerancia=0.10; break;
      case 8: tolerancia=0.05;break;
      case 10: tolerancia=5;break;
      case 11: tolerancia=10;break;
    }

    switch(parseInt(b6)){
      case 1:ppm=100;break;
      case 2:ppm=50;break;
      case 3:ppm=15;break;
      case 4:ppm=25;break;
      case 6:ppm=10;break;
      case 7:ppm=5;break;
    }

    // Tolerancia por cada color
    var con = document.createTextNode("Resistencia: "+valResistencia+"\nTolerancia:"+tolerancia+"%"+"\nPPM:"+ppm);
    contenedor.appendChild(con);
      document.body.appendChild(contenedor);
    // Mostrar el resultado e incluirlo en el contenedor
  }
  
  function defineColor(n){
    switch(parseInt(n)){
      case 0:return "rgba(34,34,34,0.2)";
      case 1:return "rgba(128,64,0,0.2)";
      case 2:return "rgba(255,0,0,0.2)";
      case 3:return "rgba(255,128,0,0.2)";
      case 4:return "rgba(255,255,0,0.2)"
      case 5:return "rgba(0,255,0,0.2)";
      case 6: return "rgba(0,0,255,0.2)";
      case 7: return "rgba(128,0,128,0.2)";
      case 8: return "rgba(128,128,128,0.2)";
      case 9: return "rgba(255,255,255,0.2)";
      case 10: return "rgba(212,175,55,0.2)";
      case 11: return "rgba(192,192,192,0.2)";
    }
  }
  
  function defCol(n){
    switch(parseInt(n)){
      case 0:return "rgb(34,34,34)";
      case 1:return "rgb(128,64,0)";
      case 2:return "rgb(255,0,0)";
      case 3:return "rgb(255,128,0)";
      case 4:return "rgb(255,255,0)"
      case 5:return "rgb(0,255,0)";
      case 6: return "rgb(0,0,255)";
      case 7: return "rgb(128,0,128)";
      case 8: return "rgb(128,128,128)";
      case 9: return "rgb(255,255,255)";
      case 10: return "rgb(212,175,55)";
      case 11: return "rgb(192,192,192)";
    }
  }
  
  function nombreColor(n){
    switch(parseInt(n)){
      case 0:return "NEGRO";
      case 1:return "CAFE";
      case 2:return "ROJO";
      case 3:return "NARANJA";
      case 4:return "AMARILLO"
      case 5:return "VERDE";
      case 6: return "AZUL";
      case 7: return "VIOLETA";
      case 8: return "GRIS";
      case 9: return "BLANCO";
      case 10: return "ORO";
      case 11: return "PLATA";
    }
  }


