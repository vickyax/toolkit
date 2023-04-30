    function funct() {
    const firstName = document.getElementById("fname1").value.toLowerCase();
    const secondName = document.getElementById("fname2").value.toLowerCase();
    let count = 0;
  if((firstName.length-2)>secondName.length){
    count+=10;
  }
  if(firstName.length<5||secondName.length<5){
count+=20;
  }
    for (let i = 0; i < 6; i++) {
      const letter = secondName[i];
      if (firstName.includes(letter)) {
        count += 8;
      }
  
      if(secondName.includes("a")){
        count+=7;
      }
      if(secondName.includes("i")){
        count+=3;
      }
      if(firstName.includes("a")){
        count+=5;
      }
      if(firstName.includes("i")){
        count+=3;
      }
      if(secondName.includes("s")){
        count+=3;
      }
      if(secondName.includes("r")){
        count+=3;
      }
      if(secondName.includes("y")){
        count+=2;
      }
    }
    if (secondName.toLowerCase().startsWith('vignesh') || secondName.toLowerCase().startsWith('vicky')) {
      alert("😂Please Not my Name😂😂");
    } 
    else if (secondName.toLowerCase().startsWith('santhiya')) {
      alert("😂yeanda de vera yarachu ponnu try pannu😂😂");
    } 
    else if (secondName.toLowerCase().startsWith(firstName)) {
      alert('😂You Love Yourself❤️❤️ \n Your ❤️Love Score is '+count+0 +'%' );
    } 
    else if (count > 100) {
        alert(`Your ❤️Love Score is ${count}% \n Oh My Are you Lovers in previous life?🤭🥰💕`);
      }
    else if (count >= 90) {
        alert(`Your ❤️Love Score is ${count}% \n Get Married Already🤭🥰💕`);
      } else if (count > 70) {
      alert(`Your ❤️Love Score is ${count}% \n You are made for each other🥰💕`);
    } else if (count > 30 && count < 70) {
      alert(`Your ❤️Love Score is ${count}% \n Oh My😊🥰`);
    } else {
      alert(`Your ❤️Love Score is ${count}%  \n😋 don't give up`);
    }
  }
  
