function alphanumerique(ch)
   {
		ch=ch.toUpperCase();
		i=0;
		verife=true;
		do
		  {
			if (     ((ch.charAt(i)>="A")&& (ch.charAt(i)<="Z")) ||  ((ch.charAt(i)>="0")&& (ch.charAt(i)<="9"))      )
			   {i++;}
			else
			   { verife=false;}
		  }
		while (   (verife) && (i<ch.length)   );
		return verife;
	}
function numérique(ch)
   {
		i=0;
		verife=true;
		do
		  {
			if (     (ch.charAt(i)>="0")&& (ch.charAt(i)<="9")      )
			   {i++;}
			else
			   { verife=false;}
		  }
		while (   (verife) && (i<ch.length)   );
		return verife;
	}


function alphabetique(ch)
   {
		ch=ch.toUpperCase();
		i=0;
		verife=true;
		do
		  {
			if (     (ch.charAt(i)>="A")&& (ch.charAt(i)<="Z")      )
			   {i++;}
			else
			   { verife=false;}
		  }
		while (   (verife) && (i<ch.length)   );
		return verife;
	}
   
 
function verif(){
   nom=f1.txt.value;

   if((!alphabetique(nom))||(length(nom)<3)){
   alert('veuillez inscrire nom supérieure à 3');

   prenom=f1.txte.value;
   if (!alphabetique(prenom)||(length(prenom)<3)){
      alert('veuillez inscrire prénom supérieure à 3');
   }
   dateactuelle=new Date()
   alert(dateactuelle)
   anneeactuelle=dateactuelle.getFullYear()
   datenaissance=new Date(f1.d.value)
   anneenaissance=datenaissance.getFullYear()
   alert(anneeactuelle)
   alert(anneenaissance)
   age = Number(anneeactuelle)- Number(anneenaissance)
   alert ("Votre Age est de : " +Age + "ans")
 
   ad=f1.adr.value;
   if (length(ad)<10){
      alert('veuillez inscrire une adresse supérieure à 10')}
    

   num=f1.num.value;
   if (!numérique(num)){
      alert('veuillez entrer un numéro correct')
   }


   mail=f1.m.value; 
   if (     (mail.length>50) || (mail.indexOf("@")==-1) || (mail.indexOf(".")==-1)	||  ((mail.indexOf("."))< (mail.indexOf("@")))    )
          { alert("Mail \n |-----> Invalide : Le Mail doit  vérifier ces contraintes: <-----| \n---> longueur <=50\n---> Arobase (@) existe\n---> Le point (.) existe\n---> La position du point (.) > La position du arobase(@)\n|<-------------------------------------------------------------->|");
            return false;}
    else
         {
                 ch1=mail.substr(0,mail.indexOf("@"));
               if (  (! alphanumerique(ch1)) || (ch1.length<3)  )
                     { alert("Mail \n |-----> Invalide : Le Mail doit  vérifier ces contraintes: <-----| \n---> La partie ch1 de Mail doit être Alphanumérique\n---> La longueur de ch1 de Mail doit être >=3 \n|<-------------------------------------------------------------->|");
                       return false;}
                else
                   {
                      ch2=mail.substring(mail.indexOf("@")+1, mail.indexOf("."));
                      if (  (! alphanumerique(ch2)) || (ch2.length<3)  )
                           { alert("Mail \n |-----> Invalide : Le Mail doit  vérifier ces contraintes: <-----| \n---> La partie ch2 de Mail doit être Alphanumérique\n---> La longueur de ch2 de Mail doit être >=3 \n|<-------------------------------------------------------------->|");
                              return false;}
                       else
                           { 
                               ch3=mail.substr(mail.indexOf(".")+1);
                               if (  (! alphabetique(ch3)) || (ch3.length<2) || (ch3.length>4)  )
                                    { alert("Mail \n |-----> Invalide : Le Mail doit  vérifier ces contraintes: <-----| \n---> La partie ch3 de Mail doit être Alphabétique\n---> La longueur de ch3 de Mail doit être dans [2..4] \n|<-------------------------------------------------------------->|");
                                      return false;}
                             }
                        }
           }
    } 
}


function score(){
   score=0
   allergie=false
   if (document.getElementById('c').checked == true) {
   score=score+1
   allergie=true
   }
   if (document.getElementById('p').checked==true){
      score=score+1
      allergie=true
   }
   if (document.getElementById('d').checked==true){
      score=score+1
      allergie=true
   }
   if (document.getElementById('t').checked==true){
      score=score+1
      allergie=true
   }
   if (document.getElementById('1').checked==true){
      score=score+3
   }
   if (document.getElementById('2').checked==true){
      score=score+2
   }
   if (document.getElementById('3').checked==true){
      score=score+3
   }
   if (document.getElementById('4').checked==true){
      score=score+2
   }
   if (document.getElementById('5').checked==true){
      score=score+5
   }
   if (document.getElementById('6').checked==true){
      score=score+5
   }
   if (document.getElementById('7').checked==true){
      score=score+5
   }
   if (document.getElementById('7').checked==true){
      score=score+2
   }

   if (document.getElementById('7').checked==true){
      score=score+2
   }

   if (document.getElementById('7').checked==true){
      score=score+1
   }
   if (score<=7 && age>=65) 
    {
      document.getElementById("form").innerHTML = ('<div style="background-color:yellow;"><h3>votre resultat:</h3><h4 style="text-align: center;">'+'Vous devriez aller bien, mais faites attention à vous, et n’oubliez pas de respecter les gestes barrières'+'</h4></br>');
    }
    if (score<=7 && age<=65) 
    {
      document.getElementById("form").innerHTML = ('<div style="background-color:green;"><h3>votre resultat:</h3><h4 style="text-align: center;">'+'Vous devriez aller bien, mais vous devriez rester confiné chez vous'+'</h4></br>');
    }
    if (8<=score && score<=18 && allergie==true) 
    {
      document.getElementById("form").innerHTML = ('<div style="background-color:red;"><h3>votre resultat:</h3><h4 style="text-align: center;">'+'Vous avez des majeurs symptômes du COVID-19. Vous devriez vous confiner au plus vite, et faire un test de dépistage.'+'</h4></br>');
    }
    if (8<=score && score<=18 && allergie==false) 
    {
      document.getElementById("form").innerHTML = ('<div style="background-color::yellow;"><h3>votre resultat:</h3><h4 style="text-align: center;">'+'Précipitez-vous au centre COVID le plus proche pour être pris en charge.'+'</h4></br>');
    }
    if (score>18) 
    {
      document.getElementById("form").innerHTML = ('<div style="background-color:red;"><h3>votre resultat:</h3><h4 style="text-align: center;">'+'Précipitez-vous au centre COVID le plus proche pour être pris en charge.'+'</h4></br>');
    }
    for (let inde = 0; inde < 23; inde++) 
    {
      document.getElementsByTagName("input")[inde].disabled = true;
    }
    for (let inf = 4; inf < 22; inf++) 
    {
      if (document.getElementsByTagName("input")[inf].checked==false) 
      {
        document.getElementsByTagName("input")[inf].style.opacity = "0.6";
      }
    } 





   }
 

   



