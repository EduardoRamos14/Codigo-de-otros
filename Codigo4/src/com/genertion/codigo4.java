package com.genertion;

import java.util.Scanner;

public class codigo4 {
	public static void main(String[] args) {
        // Se crea un objeto Scanner para la entrada estándar (System.in)
        Scanner s = new Scanner(System.in);

        // Se solicita y almacena la entrada del jugador 1
        System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
        String j1 = s.nextLine();

        // Se solicita y almacena la entrada del jugador 2
        System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
        String j2 = s.nextLine();

        // Se verifica si ambos jugadores han elegido lo mismo
        if (j1.equals(j2)) {
            System.out.println("Empate");
        } else {
            // Inicializa la variable para el jugador ganador como 2 (ninguno)
            int g = 2;
            
            // Utiliza una estructura switch para evaluar la elección del jugador 1
            switch (j1) {
                case "piedra":
                    // Si el jugador 1 elige piedra, verifica las opciones del jugador 2
                    if (j2.equals("tijeras")) {
                        g = 1; // Jugador 1 gana
                    }
                    break;
                case "papel":
                    // Si el jugador 1 elige papel, verifica las opciones del jugador 2
                    if (j2.equals("piedra")) {
                        g = 1; // Jugador 1 gana
                    }
                    break;
                case "tijeras":
                    // Si el jugador 1 elige tijeras, verifica las opciones del jugador 2
                    if (j2.equals("papel")) {
                        g = 1; // Jugador 1 gana
                    }
                    break;
                default:
                    // Maneja el caso en el que la elección del jugador 1 no es piedra, papel o tijeras
            }

            // Imprime el resultado del juego
            System.out.println("Gana el jugador " + g);
        }
    }
}
