let str = "malayalam"
let len = str.length
let rev =""
//console.log(str.charAt(str.length-1))
for(let i = str.length-1 ; i >= 0 ; i--){
   rev = rev+str.charAt(i)
}
if(str === rev){
    console.log(str +" is a Palindrome")
}
else{
    console.log(str +" is not a Palindrome")
}