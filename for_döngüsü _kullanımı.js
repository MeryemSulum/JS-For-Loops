// Örnekler ve Ödevler
// Videodaki Örnek 
let users=["Lorem", "ipsum", "dolor"]
const userListDOM=document.querySelector('#userList')
for(index=0;index<users.length;index++){
    liDOM=document.createElement('li');
    liDOM.innerHTML=users[index];
    userListDOM.appendChild(liDOM);
};
// Örnek 1: 10'dan 0'a kadar olan sayıları geriye doğru olacak şekilde konsola yazdıralım.
for(i=10;i>=0;i--){
    console.log(i);
};
// Ödev 1: 20 ile 40 arasındaki tüm sayıları konsola yazdırın.
for(i=20;i<=40;i++){
    console.log(i)
};
// Örnek 2: 0 ve 50 sayıları arasından çift olanları konsola yazdıralım.
for(i=0;i<=50;i++){
    if(i%2 == 0){
        console.log(i);
    };
}
// HackerRank Day 2: Loops
const s ="javascriptloops"
const vowels=[ "a" , "e" ,"i" , "o" , "u" ]
function vowelsAndConsonants(s) {
    
    for(let i of s){
        if(vowels.includes(i)){
            console.log(i);
        };
    };
    for(let i of s){
        if(!vowels.includes(i)){
            console.log(i);
        };
    };     
};
vowelsAndConsonants(s)