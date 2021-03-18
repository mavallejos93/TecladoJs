//Global
let tablero = document.getElementById("tablero");

//Primero linea vertical Teclado
let btnEsc = document.getElementById("btnEsc");
let btnNum = document.getElementById("btnNum");
let btnNum1 = document.getElementById("btnNum1");
let btnNum2 = document.getElementById("btnNum2");
let btnNum3 = document.getElementById("btnNum3");
let btnNum4 = document.getElementById("btnNum4");
let btnNum5 = document.getElementById("btnNum5");
let btnNum6 = document.getElementById("btnNum6");
let btnNum7 = document.getElementById("btnNum7");
let btnNum8 = document.getElementById("btnNum8");
let btnNum9 = document.getElementById("btnNum9");
let btnNum0 = document.getElementById("btnNum0");
let btnComilla = document.getElementById("btnComilla");
let btnInterrA = document.getElementById("btnInterrA");
let btnBksc = document.getElementById("btnBksc");

//segunda linea vertical teclado
let btnTab = document.getElementById("btnTab");
let btnLetq = document.getElementById("btnLetq");
let btnLetw = document.getElementById("btnLetw");
let btnLete = document.getElementById("btnLete");
let btnLetr = document.getElementById("btnLetr");
let btnLett = document.getElementById("btnLett");
let btnLety = document.getElementById("btnLety");
let btnLetu = document.getElementById("btnLetu");
let btnLeti = document.getElementById("btnLeti");
let btnLeto = document.getElementById("btnLeto");
let btnLetp = document.getElementById("btnLetp");
let btnTilde = document.getElementById("btnTilde");
let btnMas = document.getElementById("btnMas");

//tercera linea vertical teclado
let btnBloqMay = document.getElementById("btnBloqMay");
let btnLeta = document.getElementById("btnLeta");
let btnLets = document.getElementById("btnLets");
let btnLetd = document.getElementById("btnLetd");
let btnLetf = document.getElementById("btnLetf");
let btnLetg = document.getElementById("btnLetg");
let btnLeth = document.getElementById("btnLeth");
let btnLetj = document.getElementById("btnLetj");
let btnLetk = document.getElementById("btnLetk");
let btnLetl = document.getElementById("btnLetl");
let btnLetene = document.getElementById("btnLetene");
let btnCorcheteA = document.getElementById("btnCorcheteA");
let btnCorcheteC = document.getElementById("btnCorcheteC");
let btnEnter = document.getElementById("btnEnter");

//cuarta linea vertical teclado
let btnShift = document.getElementById("btnShift");
let btnMenorq = document.getElementById("btnMenorq");
let btnLetz = document.getElementById("btnLetz");
let btnLetx = document.getElementById("btnLetx");
let btnLetc = document.getElementById("btnLetc");
let btnLetv = document.getElementById("btnLetv");
let btnLetb = document.getElementById("btnLetb");
let btnLetn = document.getElementById("btnLetn");
let btnLetm = document.getElementById("btnLetm");
let btnComa = document.getElementById("btnComa");
let btnPunto = document.getElementById("btnPunto");
let btnGuion = document.getElementById("btnGuion");
/* let btnShift = document.getElementById("btnShift"); */ /* repetido */

//quinta linea vertical teclado
let btnFn = document.getElementById("btnFn");
let btnCtrl = document.getElementById("btnCtrl");
let btnWin = document.getElementById("btnWin");
let btnAlt = document.getElementById("btnAlt");
let btnEspacio = document.getElementById("btnEspacio");
let btnAltGr = document.getElementById("btnAltGr");
/* let btnCtrl = document.getElementById("btnCtrl"); */  /* repetido */
let temp = "";
//funcones

//linea 1
const btnEscF = () => {tablero.innerHTML = "";temp = "";};
const btnNum1F = () => {tablero.innerHTML = temp + "1";temp = temp + "1";};
const btnNum2F = () => {tablero.innerHTML = temp + "2";temp = temp + "2";};
const btnNum3F = () => {tablero.innerHTML = temp + "3";temp = temp + "3";};
const btnNum4F = () => {tablero.innerHTML = temp + "4";temp = temp + "4";};
const btnNum5F = () => {tablero.innerHTML = temp + "5";temp = temp + "5";};
const btnNum6F = () => {tablero.innerHTML = temp + "6";temp = temp + "6";};
const btnNum7F = () => {tablero.innerHTML = temp + "7";temp = temp + "7";};
const btnNum8F = () => {tablero.innerHTML = temp + "8";temp = temp + "8";};
const btnNum9F = () => {tablero.innerHTML = temp + "9";temp = temp + "9";};
const btnNum0F = () => {tablero.innerHTML = temp + "0";temp = temp + "0";};
const btnComillaF = () => {tablero.innerHTML = temp + "'";temp = temp + "'";};
const btnInterrAF = () => {tablero.innerHTML = temp + "¿";temp = temp + "¿";};
const btnBkscF = () => {};

//linea 2
const btnTabF = () => {};
const btnLetqF = () => {tablero.innerHTML = temp + "q";temp = temp + "q";};
const btnLetwF = () => {tablero.innerHTML = temp + "w";temp = temp + "w";};
const btnLeteF = () => {tablero.innerHTML = temp + "e";temp = temp + "e";};
const btnLetrF = () => {tablero.innerHTML = temp + "r";temp = temp + "r";};
const btnLettF = () => {tablero.innerHTML = temp + "t";temp = temp + "t";};
const btnLetyF = () => {tablero.innerHTML = temp + "y";temp = temp + "y";};
const btnLetuF = () => {tablero.innerHTML = temp + "u";temp = temp + "u";};
const btnLetiF = () => {tablero.innerHTML = temp + "i";temp = temp + "i";};
const btnLetoF = () => {tablero.innerHTML = temp + "o";temp = temp + "o";};
const btnLetpF = () => {tablero.innerHTML = temp + "p";temp = temp + "p";};
const btnTildeF = () => {tablero.innerHTML = temp + "´";temp = temp + "´";};
const btnMasF = () => {tablero.innerHTML = temp + "+";temp = temp + "+";};

//linea 3
const btnBloqMayF = () => {};
const btnLetaF = () => {tablero.innerHTML = temp + "a";temp = temp + "a";};
const btnLetsF = () => {tablero.innerHTML = temp + "s";temp = temp + "s";};
const btnLetdF = () => {tablero.innerHTML = temp + "d";temp = temp + "d";};
const btnLetfF = () => {tablero.innerHTML = temp + "f";temp = temp + "f";};
const btnLetgF = () => {tablero.innerHTML = temp + "g";temp = temp + "g";};
const btnLethF = () => {tablero.innerHTML = temp + "h";temp = temp + "h";};
const btnLetjF = () => {tablero.innerHTML = temp + "j";temp = temp + "j";};
const btnLetkF = () => {tablero.innerHTML = temp + "k";temp = temp + "k";};
const btnLetlF = () => {tablero.innerHTML = temp + "l";temp = temp + "l";};
const btnLeteneF = () => {tablero.innerHTML = temp + "ñ";temp = temp + "ñ";};
const btnCorcheteAF = () => {tablero.innerHTML = temp + "{";temp = temp + "{";};
const btnCorcheteCF = () => {tablero.innerHTML = temp + "}";temp = temp + "}";};
const btnEnterF = () => {tablero.innerHTML = temp + "<br>";temp = temp + "<br>";};

//linea 4
const btnShiftF = () => {};
const btnMenorqF = () => {};
const btnLetzF = () => {tablero.innerHTML = temp + "z";temp = temp + "z";};
const btnLetxF = () => {tablero.innerHTML = temp + "x";temp = temp + "x";};
const btnLetcF = () => {tablero.innerHTML = temp + "c";temp = temp + "c";};
const btnLetvF = () => {tablero.innerHTML = temp + "v";temp = temp + "v";};
const btnLetbF = () => {tablero.innerHTML = temp + "b";temp = temp + "b";};
const btnLetnF = () => {tablero.innerHTML = temp + "n";temp = temp + "n";};
const btnLetmF = () => {tablero.innerHTML = temp + "m";temp = temp + "m";};
const btnComaF = () => {tablero.innerHTML = temp + ",";temp = temp + ",";};
const btnPuntoF = () => {tablero.innerHTML = temp + ".";temp = temp + ".";};
const btnGuionF = () => {tablero.innerHTML = temp + "-";temp = temp + "-";};

//linea 5
const btnFnF = () => {};
const btnCtrlF = () => {};
const btnWinF = () => {};
const btnAltF = () => {};
const btnEspacioF = () => {tablero.innerHTML = temp + " ";temp = temp + " ";};
const btnAltGrF = () => {};

//Onclick

//linea 1
btnEsc.onclick = function () {btnEscF();};
btnNum1.onclick = function () {btnNum1F();};
btnNum2.onclick = function () {btnNum2F();};
btnNum3.onclick = function () {btnNum3F();};
btnNum4.onclick = function () {btnNum4F();};
btnNum5.onclick = function () {btnNum5F();};
btnNum6.onclick = function () {btnNum6F();};
btnNum7.onclick = function () {btnNum7F();};
btnNum8.onclick = function () {btnNum8F();};
btnNum9.onclick = function () {btnNum9F();};
btnNum0.onclick = function () {btnNum0F();};
btnComilla.onclick = function () {btnComillaF();};
btnInterrA.onclick = function () {btnInterrAF();};
btnBksc.onclick = function () {btnBkscF();};

//linea 2
btnTab.onclick = function () {btnTabF();};
btnLetq.onclick = function () {btnLetqF();};
btnLetw.onclick = function () {btnLetwF();};
btnLete.onclick = function () {btnLeteF();};
btnLetr.onclick = function () {btnLetrF();};
btnLett.onclick = function () {btnLettF();};
btnLety.onclick = function () {btnLetyF();};
btnLetu.onclick = function () {btnLetuF();};
btnLeti.onclick = function () {btnLetiF();};
btnLeto.onclick = function () {btnLetoF();};
btnLetp.onclick = function () {btnLetpF();};
btnTilde.onclick = function () {btnTildeF();};
btnMas.onclick = function () {btnMasF();};

//linea 3
btnBloqMay.onclick = function () {btnBloqMayF();};
btnLeta.onclick = function () {btnLetaF();};
btnLets.onclick = function () {btnLetsF();};
btnLetd.onclick = function () {btnLetdF();};
btnLetf.onclick = function () {btnLetfF();};
btnLetg.onclick = function () {btnLetgF();};
btnLeth.onclick = function () {btnLethF();};
btnLetj.onclick = function () {btnLetjF();};
btnLetk.onclick = function () {btnLetkF();};
btnLetl.onclick = function () {btnLetlF();};
btnLetene.onclick = function () {btnLeteneF();};
btnCorcheteA.onclick = function () {btnCorcheteAF();};
btnCorcheteC.onclick = function () {btnCorcheteCF();};
btnEnter.onclick = function () {btnEnterF();};

//linea 4
btnShift.onclick = function () {btnShiftF();};
btnMenorq.onclick = function () {btnMenorqF();};
btnLetz.onclick = function () {btnLetzF();};
btnLetx.onclick = function () {btnLetxF();};
btnLetc.onclick = function () {btnLetcF();};
btnLetv.onclick = function () {btnLetvF();};
btnLetb.onclick = function () {btnLetbF();};
btnLetn.onclick = function () {btnLetnF();};
btnLetm.onclick = function () {btnLetmF();};
btnComa.onclick = function () {btnComaF();};
btnPunto.onclick = function () {btnPuntoF();};
btnGuion.onclick = function () {btnGuionF();};

//linea 5
btnFn.onclick = function () {btnFnF();};
btnCtrl.onclick = function () {btnCtrlF();};
btnWin.onclick = function () {btnWinF();};
btnAlt.onclick = function () {btnAltF();};
btnEspacio.onclick = function () {btnEspacioF();};
btnAltGr.onclick = function () {btnAltGrF();};
















