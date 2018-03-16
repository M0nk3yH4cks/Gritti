
var secondi=1;
var num=0;
function CambiaImmagine() {
	var immagini=new Array();
	immagini[0]="insigne.jpg";
	immagini[1]="milito.jpg";
        immagini[2]="ibra.jpg";
        immagini[3]="robben.jpg" ;
        immagini[4]="torres.jpg";
        immagini[5]="higuain.jpg";
        immagini[6]="icardi.jpg";	
        immagini[7]="vazquez.jpg";
        immagini[8]="bonucci.jpg";  
        immagini[9]="palacio.jpg";
	
document.getElementById("img").src=immagini[num];
	num=(num+1>=immagini.length)?0:num+1;
	setTimeout("CambiaImmagine()",secondi*1000);
}	
CambiaImmagine();

function  haiVinto(src){
if(src.src=="robben.jpg")
document.getElementById.textContent="hai vinto";
}	
