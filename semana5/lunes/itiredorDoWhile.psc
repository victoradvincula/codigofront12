Proceso itiredorDoWhile
	Definir clave Como Entero
	
	Repetir
		Escribir "Dime tu clave de acceso"
		Leer clave
		
		Si clave <> 1234 Entonces
			Escribir "Tu clave es incorrecta"
		Fin Si
		
	Hasta Que clave == 1234
	Escribir "Bienvenido"
	
FinProceso
