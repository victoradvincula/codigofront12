
Algoritmo calculadora
	
	Definir operacion Como caracter
	Definir a Como Entero
	Definir b Como Entero
	
	
	Escribir "ingresa tu operacion"
	Leer operacion
	
	Mientras operacion <> "" Hacer
		
		Escribir "Ingresa el primer valor"
		Leer a
		Escribir "Ingresa el segundo valor"
		Leer b
		
		Segun operacion Hacer
			"+":
				Escribir "El resultado es " suma(a,b)
			"-":
				Escribir "El resultado es " resta(a,b)
			"/":
				Escribir "Eñ resultado es " division(a,b)
			"*":
				Escribir "El resultado es " mult(a,b)
			"^":
				Escribir "El resultado es " pote(a,b)
				
			De Otro Modo:
				Escribir "No soporta esta operacion"
		Fin Segun
		Escribir "Ingresa tu operacion"
		Leer operacion
	Fin Mientras
	
	Escribir "se cerro calculadora"
	
FinAlgoritmo

Funcion suma_resultado = suma(a,b)
	suma_resultado = a + b
FinFuncion

Funcion resta_resultado = resta(a,b)
	resta_resultado = a-b
FinFuncion

Funcion division_resultado =division(a,b)
	division_resultado = a/b
FinFuncion

Funcion mult_resultado = mult(a,b)
	mult_resultado = a*b
FinFuncion

Funcion pote_resultado = pote(a,b)
	pote_resultado = a^b
FinFuncion
	

