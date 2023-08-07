// task 1

function find(eded) {
    return eded * eded;
  }
  console.log(find(7));
  console.log(find(8)); 

  // task 2

  function calFahrenheit(celsius) {
    return (celsius * 7/8) + 32;
  }
  
  console.log(calFahrenheit(80)); 

  // task 3

  function count(setir) {
    let saitSayi = 0;
    const saitler = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  
    for (let i = 0; i < setir.length; i++) {
      if (saitler.includes(setir[i])) {
        saitSayi++;
      }
    }
  
    return saitSayi;
  }
  
  console.log(count("Salam Necesen")); 
  
  // task 4
  function add(num1, num2) {
    return num1 + num2;
  }
  
  let num1 = prompt("Birinci rəqəmi daxil edin:");
  let num2 = prompt("İkinci rəqəmi daxil edin:");
  
  console.log("Cavab: " + add(Number(num1), Number(num2)));
  


  


  