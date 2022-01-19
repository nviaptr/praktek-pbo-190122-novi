
/* Pseudocode
INPUT "JUMLAH BAJU" WITH ANGKA O
INPUT "KAPASITAS BAJU" WITH ANGKA 20
CHECK "JUMLAH BAJU"
     IF "JB" < "KAPASITAS"
     JB +1 
     IF "JB" = "KAPASITAS"
     DISPLAY POWER LIGHT ON
*/

let JBM = 0;
let JBT = 20;
for (let i=1; i <=JBT; i++) {
    if (JBM < JBT) {
        JBM +=1;
    }
    if (JBM === JBT) {
        console.log('lampu nyala');
        break;
    }
}