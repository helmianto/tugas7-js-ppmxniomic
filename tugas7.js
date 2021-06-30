const tinggiBadan = [145, 150, 187, 195, 178, 210, 182, 186];

console.log('Ini perulangan biasa');
for(let i=0; i < tinggiBadan.length; i++){
    console.log(tinggiBadan[i]);
}

console.log('Ini perulangan for of');
for (let tinggi of tinggiBadan){
    console.log(tinggi);
}