    var yn=(document.getElementById("fname1").value).length;
    var cn=document.getElementById("fname2").value;
    var count=0;
    function funct(){
        for(var i=0;i<(document.getElementById("fname1").value).length;i++){
            for(var j=0;j<(document.getElementById("fname2").value).length;j++){
        if((document.getElementById("fname1").value).substring(j,j+1)===(document.getElementById("fname2").value).substring(i,i+1)){
            count+=7;
        }
    }
    if((document.getElementById("fname2").value).substring(i,i+1)=='a'||'A'){
        count+=2;
    }
    if((document.getElementById("fname2").value).substring(i,i+1)=='i'||'I'){
        count+=1;
    }
    if((document.getElementById("fname1").value).substring(i,i+1)=='a'||'A'){
        count+=2;
    }
    if((document.getElementById("fname1").value).substring(i,i+1)=='i'||'I'){
        count+=1;
    }
    }
    if((document.getElementById("fname2").value).substring(0)==='vignesh'){
        alert("😂Please Not my Name😂😂");
    }
    else if((document.getElementById("fname2").value).substring(0)==='vicky'){
        alert("😂Please Not my Name😂😂");
    }
    else if((document.getElementById("fname2").value).substring(0)==='sandhya'){
        alert("😂yeanda de vera ponnu try pannu😂😂");
    }
    else if((document.getElementById("fname2").value).substring(0)==='sandhia'){
        alert("😂yeanda de vera ponnu try pannu😂😂");
    }
    else if((document.getElementById("fname2").value).substring(0)==='sandia'){
        alert("😂yeanda de vera ponnu try pannu😂😂");
    }
    else if((document.getElementById("fname2").value).substring(0)==='Sandhya'){
        alert("😂yeanda de vera ponnu try pannu😂😂");
    }
    else if((document.getElementById("fname2").value).substring(0)==='Sandhia'){
        alert("😂yeanda de vera ponnu try pannu😂😂");
    }
    else if(count>70){
        alert("Your ❤️Love Score is "+count+"% \n You are made for each other🥰💕");
    }  
    else if(count>30&&count<70){
        alert("Your ❤️Love Score is "+count+"% \n Oh My😊🥰");
    }  
    else if(count<20){
        alert("Your ❤️Love Score is "+count+"%  \n😋 don't give up");
    }
 else{
    alert("Your ❤️Love Score is "+count+"%");
 }
    }
    