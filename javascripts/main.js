<script type="text/javascript" scr="main.js">
	x = "null";
	y ="null";
	do{
	Candidato1 = prompt("Escolha o primeiro candidato:");
	if (Candidato1 == 20) x = "P";
	else if (Candidato1 == 13) x = "D";
	else if (Candidato1 == 40) x = "M";
	else if (Candidato1 == 45) x = "A";
	}while(x == "null");
	do{
	Candidato2 = prompt("Escolha o segundo candidato:");
	if (Candidato2 == 20){
		if (Candidato1 != 13 && Candidato1 != 20)
			y = "P";
	}
	else if (Candidato2 == 13){
		if (Candidato1 != 13 && Candidato1 != 20)
			y = "D";
	}
	else if (Candidato2 == 40){
		if (Candidato1 != 40 && Candidato1 != 45)
			y = "M";
	}
	else if (Candidato2 == 45){
		if (Candidato1 != 40 && Candidato1 != 45)
			y = "A";
	}
	}while(y == "null");
	
	if (Candidato1 == 20){
		tiuzinho  = "url('img/P/1.jpg')";
		tiuzinho1  = "url('img/P/Esquerda/1.gif')";
		tiuzinho2  = "url('img/P/Esquerda/2.gif')";
		tiuzinho3  = "url('img/P/Esquerda/3.gif')";
		tiuzinho4  = "url('img/P/Esquerda/12.gif')";
		tiuzinho5  = "url('img/P/Esquerda/22.gif')";
		tiuzinho6  = "url('img/P/Esquerda/32.gif')";
		pode1 = "url('img/P/Esquerda/poderzin1.gif')";
		pode2 = "url('img/P/Esquerda/poderzin2.gif')";
		pode3 = "url('img/P/Esquerda/poderzin3.gif')";
		pode4 = "url('img/P/Esquerda/poderzin12.gif')";
		pode5 = "url('img/P/Esquerda/poderzin22.gif')";
		pode6 = "url('img/P/Esquerda/poderzin32.gif')";
		bloq = "url('img/P/Esquerda/block.gif')";
		morto1 = "url('img/P/m1.jpg')";
	}
	else if (Candidato1 == 13){
		tiuzinho  = "url('img/D/1.jpg')";
		tiuzinho1  = "url('img/D/Esquerda/1.gif')";
		tiuzinho2  = "url('img/D/Esquerda/2.gif')";
		tiuzinho3  = "url('img/D/Esquerda/3.gif')";
		tiuzinho4  = "url('img/D/Esquerda/12.gif')";
		tiuzinho5  = "url('img/D/Esquerda/22.gif')";
		tiuzinho6  = "url('img/D/Esquerda/32.gif')";
		pode1 = "url('img/D/Esquerda/poderzin1.gif')";
		pode2 = "url('img/D/Esquerda/poderzin2.gif')";
		pode3 = "url('img/D/Esquerda/poderzin3.gif')";
		pode4 = "url('img/D/Esquerda/poderzin12.gif')";
		pode5 = "url('img/D/Esquerda/poderzin22.gif')";
		pode6 = "url('img/D/Esquerda/poderzin32.gif')";
		bloq = "url('img/D/Esquerda/block.gif')";
		morto1 = "url('img/D/m1.jpg')";
	}
	else if (Candidato1 == 40){
		tiuzinho  = "url('img/M/1.jpg')";
		tiuzinho1  = "url('img/M/Esquerda/1.gif')";
		tiuzinho2  = "url('img/M/Esquerda/2.gif')";
		tiuzinho3  = "url('img/M/Esquerda/3.gif')";
		tiuzinho4  = "url('img/M/Esquerda/12.gif')";
		tiuzinho5  = "url('img/M/Esquerda/22.gif')";
		tiuzinho6  = "url('img/M/Esquerda/32.gif')";
		pode1 = "url('img/M/Esquerda/poderzin1.gif')";
		pode2 = "url('img/M/Esquerda/poderzin2.gif')";
		pode3 = "url('img/M/Esquerda/poderzin3.gif')";
		pode4 = "url('img/M/Esquerda/poderzin12.gif')";
		pode5 = "url('img/M/Esquerda/poderzin22.gif')";
		pode6 = "url('img/M/Esquerda/poderzin32.gif')";
		bloq = "url('img/M/Esquerda/block.gif')";
		morto1 = "url('img/M/m1.jpg')";
		
	}
	else if (Candidato1 == 45){
		tiuzinho  = "url('img/A/1.jpg')";
		tiuzinho1  = "url('img/A/Esquerda/1.gif')";
		tiuzinho2  = "url('img/A/Esquerda/2.gif')";
		tiuzinho3  = "url('img/A/Esquerda/3.gif')";
		tiuzinho4  = "url('img/A/Esquerda/12.gif')";
		tiuzinho5  = "url('img/A/Esquerda/22.gif')";
		tiuzinho6  = "url('img/A/Esquerda/32.gif')";
		pode1 = "url('img/A/Esquerda/poderzin1.gif')";
		pode2 = "url('img/A/Esquerda/poderzin2.gif')";
		pode3 = "url('img/A/Esquerda/poderzin3.gif')";
		pode4 = "url('img/A/Esquerda/poderzin12.gif')";
		pode5 = "url('img/A/Esquerda/poderzin22.gif')";
		pode6 = "url('img/A/Esquerda/poderzin32.gif')";
		bloq = "url('img/A/Esquerda/block.gif')";
		morto1 = "url('img/A/m1.jpg')";
	}
	if (Candidato2 == 40){
		tiuzinho0  = "url('img/M/2.jpg')";
		tiuzinho11  = "url('img/M/Direita/1.gif')";
		tiuzinho22  = "url('img/M/Direita/2.gif')";
		tiuzinho33  = "url('img/M/Direita/3.gif')";
		tiuzinho44  = "url('img/M/Direita/12.gif')";
		tiuzinho55  = "url('img/M/Direita/22.gif')";
		tiuzinho66  = "url('img/M/Direita/32.gif')";
		pode11 = "url('img/M/Direita/poderzin1.gif')";
		pode22 = "url('img/M/Direita/poderzin2.gif')";
		pode33 = "url('img/M/Direita/poderzin3.gif')";
		pode44 = "url('img/M/Direita/poderzin12.gif')";
		pode55 = "url('img/M/Direita/poderzin22.gif')";
		pode66 = "url('img/M/Direita/poderzin32.gif')";
		bloq2 = "url('img/M/Direita/block.gif')";
		morto2 = "url('img/M/m2.jpg')";
	}
	else if (Candidato2 == 45){
		tiuzinho0  = "url('img/A/2.jpg')";
		tiuzinho11  = "url('img/A/Direita/1.gif')";
		tiuzinho22  = "url('img/A/Direita/2.gif')";
		tiuzinho33  = "url('img/A/Direita/3.gif')";
		tiuzinho44  = "url('img/A/Direita/12.gif')";
		tiuzinho55  = "url('img/A/Direita/22.gif')";
		tiuzinho66  = "url('img/A/Direita/32.gif')";
		pode11 = "url('img/A/Direita/poderzin1.gif')";
		pode22 = "url('img/A/Direita/poderzin2.gif')";
		pode33 = "url('img/A/Direita/poderzin3.gif')";
		pode44 = "url('img/A/Direita/poderzin12.gif')";
		pode55 = "url('img/A/Direita/poderzin22.gif')";
		pode66 = "url('img/A/Direita/poderzin32.gif')";
		bloq2 = "url('img/A/Direita/block.gif')";
		morto2 = "url('img/A/m2.jpg')";
	}
	else if (Candidato2 == 13){
		tiuzinho0  = "url('img/D/2.jpg')";
		tiuzinho11  = "url('img/D/Direita/1.gif')";
		tiuzinho22  = "url('img/D/Direita/2.gif')";
		tiuzinho33  = "url('img/D/Direita/3.gif')";
		tiuzinho44  = "url('img/D/Direita/12.gif')";
		tiuzinho55  = "url('img/D/Direita/22.gif')";
		tiuzinho66  = "url('img/D/Direita/32.gif')";
		pode11 = "url('img/D/Direita/poderzin1.gif')";
		pode22 = "url('img/D/Direita/poderzin2.gif')";
		pode33 = "url('img/D/Direita/poderzin3.gif')";
		pode44 = "url('img/D/Direita/poderzin12.gif')";
		pode55 = "url('img/D/Direita/poderzin22.gif')";
		pode66 = "url('img/D/Direita/poderzin32.gif')";
		bloq2 = "url('img/D/Direita/block.gif')";
		morto2 = "url('img/D/m2.jpg')";
	}
	else if (Candidato2 == 20){
		tiuzinho0  = "url('img/P/2.jpg')";
		tiuzinho11  = "url('img/P/Direita/1.gif')";
		tiuzinho22  = "url('img/P/Direita/2.gif')";
		tiuzinho33  = "url('img/P/Direita/3.gif')";
		tiuzinho44  = "url('img/P/Direita/12.gif')";
		tiuzinho55  = "url('img/P/Direita/22.gif')";
		tiuzinho66  = "url('img/P/Direita/32.gif')";
		pode11 = "url('img/P/Direita/poderzin1.gif')";
		pode22 = "url('img/P/Direita/poderzin2.gif')";
		pode33 = "url('img/P/Direita/poderzin3.gif')";
		pode44 = "url('img/P/Direita/poderzin12.gif')";
		pode55 = "url('img/P/Direita/poderzin22.gif')";
		pode66 = "url('img/P/Direita/poderzin32.gif')";
		bloq2 = "url('img/P/Direita/block.gif')";
		morto2 = "url('img/P/m2.jpg')";
	}
	window.onload = function(){
		setTimeout(function(){fotchos()}, 1);
		function fotchos(){
			cara1.style.background = tiuzinho;
			cara2.style.background = tiuzinho0;
		}		
		barrinha1 = 100;
		barrinha2 = 100;
		var block1 = false;
		var block2 = false;
		var espera1 = false;
		var espera2 = false;
		//atraso--------------------------------
		function atrasa1() {
			setTimeout(function(){poderzin1()}, 500);
		}
		function atrasa2() {
			setTimeout(function(){poderzin2()}, 1200);
		}
		function atrasa3() {
			setTimeout(function(){poderzin3()}, 1800);
		}
		function atraso1() {
			setTimeout(function(){poderzin11()}, 500);
		}
		function atraso2() {
			setTimeout(function(){poderzin22()}, 1200);
		}
		function atraso3() {
			setTimeout(function(){poderzin33()}, 1800);
		}
		//delay-carinha1------------------------------------
		function pera1() {
			espera1 = true;
			setTimeout(function(){calma1()}, 1200);
		}
		function pera2() {
			espera1 = true;
			setTimeout(function(){calma1()}, 200);
		}
		function pera3() {
			espera1 = true;
			setTimeout(function(){calma1()}, 500);
		}
		function calma1(){
			if (barrinha1 > 0)
			cara1.style.background=tiuzinho;
			poder1.style.background= "url('img/poderzin')";
			A1.style.backgroundColor = ('blue');
			A2.style.backgroundColor = ('blue');
			A3.style.backgroundColor = ('blue');
			espera1 = false;
		}
		//delay-carinha2------------------------------------
		function calma2(){
			if (barrinha2 > 0)
			cara2.style.background=tiuzinho0;
			poder2.style.background= "url('img/poderzin')";
			B1.style.backgroundColor = ('blue');
			B2.style.backgroundColor = ('blue');
			B3.style.backgroundColor = ('blue');
			espera2 = false;
		}
		function pera11() {
			espera2 = true;
			setTimeout(function(){calma2()}, 1200);
		}
		function pera22() {
			espera2 = true;
			setTimeout(function(){calma2()}, 200);
		}
		function pera33() {
			espera2 = true;
			setTimeout(function(){calma2()}, 500);
		}
		//teclas-----------------------------------
		document.onkeyup=function(e){
			if(e.which == 49){
				if (barrinha1 >0 && barrinha2 >0){
					if (espera1 == false){
						espera1 = true;
					atrasa1();
					if (A == false){
						chama1();
						A = true;
					}else{
						chama4();
						A = false;
						}
					}
				}
			}
			else if(e.which == 50){
				if (barrinha1 >0 && barrinha2 >0){
					if (espera1 == false){
						espera1 = true;
						A2.style.backgroundColor = '#FFFFFF';
						atrasa2();
						if (A == false){
							chama2();
							A = true;
						}else{
							chama5();
							A = false;
						}
					}
				}
			}
			else if(e.which == 51){
				if (barrinha1 >0 && barrinha2 >0){
					if (espera1 == false){
						espera1 = true;
						A3.style.backgroundColor = '#FFFFFF';
						atrasa3();
						if (A == false){
							chama3();
							A = true;
						}else{
							chama6();
							A = false;
						}
					}
				}
			}
			else if(e.which == 52)
				blo1();
			else if(e.which == 37){
				if (barrinha1 >0 && barrinha2 >0){
					if (espera2 == false){
						espera2 = true;
						B1.style.backgroundColor = '#FFFFFF';
						atraso1();
						if (B == false){
							chama11();
							B = true;
						}else{
							chama44();
							B = false;
						}
					}
				}
			}				
			else if(e.which == 38){
				if (barrinha1 >0 && barrinha2 >0){
					if (espera2 == false){
						espera2 = true;
						B2.style.backgroundColor = '#FFFFFF';
						atraso2();
						if (B == false){
							chama22();
							B = true;
						}else{
							chama55();
							B = false;
						}
					}
				}
			}
			else if(e.which == 39){
				if (barrinha1 >0 && barrinha2 >0){
					if (espera2 == false){
						espera2 = true;
						B3.style.backgroundColor = '#FFFFFF';
						atraso3();
						if (B == false){
							chama33();
							B = true;
						}else{
							chama66();
							B = false;
						}
					}
				}
			}
			else if(e.which == 40){
				blo2();}
			}
		//variaveis----------------------------------------------------------------------------------------
		var A1 = document.getElementById("A1");
		var A2 = document.getElementById("A2");
		var A3 = document.getElementById("A3");
		var A4 = document.getElementById("A4");
		var B1 = document.getElementById("B1");
		var B2 = document.getElementById("B2");
		var B3 = document.getElementById("B3");
		var B4 = document.getElementById("B4");
		var text1 = document.getElementById("barra1");
		var text2 = document.getElementById("barra2");
		var cara1 = document.getElementById("carinha1");
		var cara2 = document.getElementById("carinha2");
		var poder1 = document.getElementById("poderzin1");
		var poder2 = document.getElementById("poderzin2");
		var bot = document.getElementById("boton");
		A = false;
		B = false;
		//chamar gif 1-------------------------------------------------------------------
		function morre1(){
			cara1.style.background=morto1;
		}
		function morre2(){
			cara2.style.background=morto2;
		}
		
		function chama1(){
			cara1.style.background=tiuzinho1;
			if (Candidato1 == 40 || Candidato1 == 45) 
				poder2.style.background= pode1;
			else
				poder1.style.background= pode1;
		}
		function chama2(){
			if (Candidato1 == 40 || Candidato1 == 45) 
				poder2.style.background= pode2;
			else
				poder1.style.background= pode2;
			cara1.style.background=tiuzinho2;
		}
		function chama3(){
			if (Candidato1 == 40 || Candidato1 == 45) 
				poder2.style.background= pode3;
			else
				poder1.style.background= pode3;
			cara1.style.background=tiuzinho3;
		}
		function chama4(){
			if (Candidato1 == 40 || Candidato1 == 45) 
				poder2.style.background= pode4;
			else
				poder1.style.background= pode4;
			cara1.style.background=tiuzinho4;
		}
		function chama5(){
			if (Candidato1 == 40 || Candidato1 == 45) 
				poder2.style.background= pode5;
			else
				poder1.style.background= pode5;
			cara1.style.background=tiuzinho5;
		}
		function chama6(){
			if (Candidato1 == 40 || Candidato1 == 45) 
				poder2.style.background= pode6;
			else
				poder1.style.background= pode6;
			cara1.style.background=tiuzinho6;
		}
		// chamar gif 2 ------------------------------------------------------
		function chama11(){
			if (Candidato2 == 13 || Candidato2 == 20) 
				poder1.style.background= pode11;
			else
				poder2.style.background= pode11;
			cara2.style.background=tiuzinho11;
		}
		function chama22(){
			if (Candidato2 == 13 || Candidato2 == 20) 
				poder1.style.background= pode22;
			else
				poder2.style.background= pode22;
			cara2.style.background=tiuzinho22;
		}
		function chama33(){
			if (Candidato2 == 13 || Candidato2 == 20) 
				poder1.style.background= pode33;
			else
				poder2.style.background= pode33;
			cara2.style.background=tiuzinho33;
		}
		function chama44(){
			if (Candidato2 == 13 || Candidato2 == 20) 
				poder1.style.background= pode44;
			else
				poder2.style.background= pode44;
			cara2.style.background=tiuzinho44;
		}
		function chama55(){
			if (Candidato2 == 13 || Candidato2 == 20) 
				poder1.style.background= pode55;
			else
				poder2.style.background= pode55;
			cara2.style.background=tiuzinho55;
		}
		function chama66(){
			if (Candidato2 == 13 || Candidato2 == 20) 
				poder1.style.background= pode66;
			else
				poder2.style.background= pode66;
			cara2.style.background=tiuzinho66;
		}
		//poderzinho1-carinha1-----------------------------------------------------------------------------------------------------
		A1.onclick = function(){
			if (barrinha1 >0 && barrinha2 >0){
					if (espera1 == false){
						espera1 = true;
					atrasa1();
					if (A == false){
						chama1();
						A = true;
					}else{
						chama4();
						A = false;
						}
					}
				}
		}
		function poderzin1() {
			A1.style.backgroundColor = '#FFFFFF';
			if (barrinha1 <= 0)
					pera1();
			else{
			if (barrinha2 > 0){
				block1 = false;
				if (block2 == true)
					barrinha2 = barrinha2 - 2;
				else
					barrinha2 = barrinha2 - 10;
					if (barrinha2 > 0){
						text2.innerHTML = barrinha2;
						text2.style.width = barrinha2*5;
					}else{
						text2.style.width = 0.1;
						text2.innerText = "KO";
						morre2();
						aparece();
					}
				if (barrinha1 >0)
				pera1(); 	
			}
			else 
				text2.innerText = "KO";	
								
		}
		}
		//poderzinho1-carinha2-----------------------------------------------------------------------------------------------------
		B1.onclick = function(){
			if (barrinha1 >0 && barrinha2 >0){
					if (espera2 == false){
						espera2 = true;
						B1.style.backgroundColor = '#FFFFFF';
						atraso1();
						if (B == false){
							chama11();
							B = true;
						}else{
							chama44();
							B = false;
						}
					}
				}
		}
		function poderzin11() {
			B1.style.backgroundColor = '#FFFFFF';
			if (barrinha2 <= 0)
			pera11();
			else{
			if (barrinha1 > 0){
				block2 = false;
				if (block1 == true)
					barrinha1 = barrinha1 - 2;
				else
					barrinha1 = barrinha1 - 10;
					if (barrinha1 > 0){
						text1.innerHTML = barrinha1;
						text1.style.width = barrinha1*5;
					}else{
						text1.style.width = 0.1;
						text1.innerText = "KO";
						morre1();
						aparece();
					}
					pera11();
			}
			else 
				text1.innerText = "KO";
		}
		}
		//poderzin2-carinha1-----------------------------------------------------------------------------------------------------
		A2.onclick = function() {
			if (barrinha1 >0 && barrinha2 >0){
					if (espera1 == false){
						espera1 = true;
						A2.style.backgroundColor = '#FFFFFF';
						atrasa2();
						if (A == false){
							chama2();
							A = true;
						}else{
							chama5();
							A = false;
						}
					}
				}
		}
		function poderzin2(){
		if (barrinha1 <= 0)
			pera2();
			else{
			if (barrinha2 > 0){
				block1 = false;
				if (Candidato1 == 20){
					barrinha1 = barrinha1 + 10;
					if (barrinha1 <= 100){
						text1.innerHTML = barrinha1;
						text1.style.width = barrinha1*5;}
					else{
						barrinha1 = 100;
						text1.innerHTML = barrinha1;
						text1.style.width = barrinha1*5;
					}
				}
				else{
				if (block2 == true)
					barrinha2 = barrinha2 - 5;
				else
					barrinha2 = barrinha2 - 14;
				}
				if (barrinha2 > 0){
						text2.innerHTML = barrinha2;
						text2.style.width = barrinha2*5;
					}else{
						text2.style.width = 0.1;
						text2.innerText = "KO";
						morre2();
						aparece();
					}
				if (barrinha1 >0)
				pera2();
			}
			else 
				text2.innerText = "KO";
		}
		}
		//poderzin2-carinha2-----------------------------------------------------------------------------------------------------
		B2.onclick = function() {
			if (barrinha1 >0 && barrinha2 >0){
					if (espera2 == false){
						espera2 = true;
						B2.style.backgroundColor = '#FFFFFF';
						atraso2();
						if (B == false){
							chama22();
							B = true;
						}else{
							chama55();
							B = false;
						}
					}
				}
		}
		function poderzin22(){
		if (barrinha2 <= 0)
			pera22();
			else{
			if (barrinha1 > 0){
				block2 = false;
				if (Candidato2 == 20){
					barrinha2 = barrinha2 + 10;
					if (barrinha2 <= 100){
						text2.innerHTML = barrinha2;
						text2.style.width = barrinha2*5;}
					else{
						barrinha2 = 100;
						text2.innerHTML = barrinha2;
						text2.style.width = barrinha2*5;
					}
				}
				else{
				if (block1 == true)
					barrinha1 = barrinha1 - 5;
				else
					barrinha1 = barrinha1 - 14;
				}
					if (barrinha1 > 0){
						text1.innerHTML = barrinha1;
						text1.style.width = barrinha1*5;
					}else{
						text1.style.width = 0.1;
						text1.innerText = "KO";
						morre1();
						aparece();
					}
					if (barrinha2 > 0)
					pera22();
			}
			else 
				text1.innerText = "KO";
		}
		}
		//poderzin3-carinha1----------------------------------------------------------
		A3.onclick = function() {
			if (barrinha1 >0 && barrinha2 >0){
					if (espera1 == false){
						espera1 = true;
						A3.style.backgroundColor = '#FFFFFF';
						atrasa3();
						if (A == false){
							chama3();
							A = true;
						}else{
							chama6();
							A = false;
						}
					}
				}
		}
		function poderzin3(){
			if (barrinha1 <= 0)
					pera3();
			else{
			if (barrinha2 > 0){
				block1 = false;
				if (block2 == true)
					barrinha2 = barrinha2 - 8;
				else
					barrinha2 = barrinha2 - 20;
					if (barrinha1 >= 100)
						barrinha1 = 100;
					else
						barrinha1 = barrinha1 + 5;
						text1.innerHTML = barrinha1;
						text1.style.width = barrinha1*5;
					if (barrinha2 > 0){
						text2.innerHTML = barrinha2;
						text2.style.width = barrinha2*5;
					}else{
						text2.style.width = 0.1;
						text2.innerText = "KO";
						morre2();
						aparece();
					}
					pera3();
			}
			else 
				text2.innerText = "KO";	
		}
		}
		//poderzin3-carinha2----------------------------------------------------------
		B3.onclick = function() {
			if (barrinha1 >0 && barrinha2 >0){
					if (espera2 == false){
						espera2 = true;
						B3.style.backgroundColor = '#FFFFFF';
						atraso3();
						if (B == false){
							chama33();
							B = true;
						}else{
							chama66();
							B = false;
						}
					}
				}
		}
		function poderzin33(){
		if (barrinha2 <= 0)
			pera33();
			else{
			if (barrinha1 > 0){
				block2 = false;
				if (block1 == true)
					barrinha1 = barrinha1 - 8;
				else
					barrinha1 = barrinha1 - 20;
					if (barrinha2 >= 100)
						barrinha2 = 100;
					else
						barrinha2 = barrinha2 + 5;
						text2.innerHTML = barrinha2;
						text2.style.width = barrinha2*5
					if (barrinha1 > 0){
						text1.innerHTML = barrinha1;
						text1.style.width = barrinha1*5;
					}else{
						text1.style.width = 0.1;
						text1.innerText = "KO";
						aparece();
						morre1();
					}
					if (barrinha2 > 0)
					pera33();
			}
			else 
				text1.innerText = "KO";		
		}
		}
		poder2.onclick = function(){
		 window.location.reload();
		}
		//block-carinha2------------------------------------------------------------
		B4.onclick = function() {
		blo2();}
		function blo2(){
			if (barrinha1 > 0 && barrinha2 >0){
				if (block2 == false){
					block2 = true;
					cara2.style.background = bloq2;
				}else{	
					block2 = false;
					cara2.style.background = tiuzinho0;
				}
			}
		}
		//block-carinha1------------------------------------------------------------
		A4.onclick = function() {
		blo1();}
		function blo1(){
			if (barrinha1 > 0 && barrinha2 >0){
				if (block1 == false){
					block1 = true;
					cara1.style.background = bloq;
				}else{	
					block1 = false;
					cara1.style.background = tiuzinho;
				}
			}
		}
		//restart-----------------
		function replay(){
			window.location.reload();
		}
		function aparece(){
			bot.style.backgroundColor = "000080";
			bot.margin = "3px";
		}
		bot.onclick = function(){
			replay();
		}
		
	}
		
</script>
