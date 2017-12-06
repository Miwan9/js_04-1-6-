//Zadacha 1
function redcol(element){
	document.getElementsByTagName('p')[0].style.backgroundColor='red';
	document.getElementsByTagName('p')[1].style.backgroundColor='red';
	document.getElementsByTagName('p')[2].style.backgroundColor='red';
}
redcol();	

//Zadacha 2
function makeShadow (){
	document.getElementsByTagName('img')[0].style.boxShadow='5px 5px 10px 3px';
	document.getElementsByTagName('img')[1].style.boxShadow='5px 5px 10px 3px';
}
makeShadow();

//Zadacha 3
// function makeNumbers(){
// 	var tag=document.getElementsByTagName('p');
// 	for (var i=0; i<=tag.length; i++){
// 	tag[i].innerHTML=i+1+' '+tag[i].innerHTML;
// 	}
// }
// makeNumbers();

//Zadacha4
var but=document.getElementById('btn1');
but.onclick=function (){
	console.log('Действие');
}

//Zadacha 5
var a=Math.pow(3,3);
function matem(){
	alert(a);
}
matem();

//Zadacha 6
var tg=document.getElementsByTagName('p')[0];
function gag(){
	tg.style.textDecoration='underline';
}
gag();



