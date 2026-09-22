import java.util.Arrays;

public static void main(String[] args) {

    double[] notas = new arrayList[];

    notas[0]= 4.5;
    notas[1]= 7;
    notas[2]= 2.3;
    notas[3]= 8.5;
    notas[4]= 5;
    notas[5]= 9.2;
    notas[6]= 3.8;


    public double calcularMedia (double[] notas){
        double media=0;

        for(int i=0; i< notas.length;i++){
            media = media + notas[i];
        }
        return media/ notas.length;
    }

    public int contarAprobados (double[] notas){
        int aprobados=0;
        double aprobado = 5;

        for(int i=0; i < notas.length;i++){

            if(notas[i] >= aprobado){
                aprobados++;
            }
        }
        return aprobados;
    }

    public double buscarMasAlta (double[] notas){
        double mayor=0;

        for(int i=0; i< notas.length;i++){
            if(notas[i] > mayor){
                mayor = notas[i];
            }
        }
        return mayor;
    }

    public double[] ordenar (double[] notas){

        double[] array = Arrays.stream(notas).sorted().toArray();

        return array;
    }

    public double calcularMedia2 (double[] notas){
        double media=0;

        for(int i=0; i< notas.length;i++){

            if(notas[i] >= 9.5){
                media = media + 10;
            }else{
                media = media + (notas[i]+0.5);
            }

        }
        return media/ notas.length;
    }
}