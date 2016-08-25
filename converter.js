function convertToRoman(num) {
  var f='',v,r,ra=[{n:1,rom:'I'},{n:4,rom:'IV'},{n:5,rom:'V'},{n:9,rom:'IX'},{n:10,rom:'X'},{n:40,rom:'XL'},{n:50,rom:'L'},{n:90,rom:'XC'},{n:100,rom:'C'},{n:400,rom:'CD'},{n:500,rom:'D'},{n:900,rom:'CM'},{n:1000,rom:'M'}];
do{
  for(var i=0;i<=14;i++){
if(num>=1000){
  v=ra[12].n;
  r=ra[12].rom;
}
      else if(num==ra[i].n){
         v=ra[i].n;
         r=ra[i].rom; 
     break;
    }
   else if(num<ra[i].n){
  v=ra[i-1].n;
  r=ra[i-1].rom; 
     break;
}
  }
   f=f+r;
   num=num-v;
 }
  while(num!==0);
  return f;
 
}
convertToRoman(83);
