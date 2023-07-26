let n=90209;
// let og=n;
// let rev=0;

// while(n>0){
    
//     let r=n%10;
//     rev=rev*10 + r;
//     n=parseInt(n/10);
    
// }

//  if(og===rev){
//     console.log(og + " is a Palindrome.");
//  }
//  else{
//     console.log(og + " is not a Palindrome.");
//  }



let s="abcba";
let os=s;
let re="";

for(let i=s.length-1; i>=0;i--){
    re+=s[i];
}

if(re===os){
    console.log(os+ " is Palindrome.");
}
else{
    console.log(os+ " is not Palindrome.");
}


 
