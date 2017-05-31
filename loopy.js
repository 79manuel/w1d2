for  (var i = 100; i >= 100 && i <= 200; i++) {

  if (i % 3 === 0 && i % 4 === 0){
    console.log("LoopyLighthouse");
  }
  if (i % 4 === 0){ //Added missing '='
    console.log("Lighthouse");// removed else
  }
  if(i % 3 === 0){
    console.log("Loopy");//removed else
  }
  else{
    console.log(i);
  }
}