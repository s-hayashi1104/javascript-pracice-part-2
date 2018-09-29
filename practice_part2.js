1
/*If the last character of the sentence is a question mark,
 the question should end with the word "please?". 
If a question is already polite (meaning it already ends with "please") 
OR the sentence is not a question, ​just return the string.*/
function askPolitely(sentence){
    if(sentence.endsWith('?')){
      if(sentence.endsWith('please?')){
        return sentence;
      }
      return `${sentence.slice(0, -1)} please?`;
    }
    return sentence;
  }

  function askPolitely(sentence){
    if(!sentence.endsWith('?')) return sentence;
    if(sentence.endsWith('please?')) return sentence;
    return `${sentence.slice(0, -1)} please?`;
  }
  //TESTS
  
  console.log(askPolitely("May I borrow your pencil?"));
  // OUTPUT: "May I borrow your pencil please?"
  
  console.log(askPolitely("May I borrow your pencil please?"));
  // OUTPUT: "May I borrow your pencil please?"
  
  console.log(askPolitely("My name is Grace Hopper."));
  // OUTPUT: "My name is Grace Hopper.

2
/**Compare Objects

Write a function that returns `true` if two objects contain the same data, or are equivalent, and `false` if not.

In order for the function to return true, ALL the properties that exist in object 1 must exist and be equal to those in object 2. 

Similarly, ALL the properties in object 2 must exist and be equal to those in object 1.

Note: You can assume that each object will only have one level, meaning there will be no nested objects.
 */

function compareObjects(obj1, obj2) {
	
    const one = Object.keys(obj1).sort();
    const two = Object.keys(obj2).sort();

    if(one.toString() !== two.toString()){
      return false;
    }
    let x = one.findIndex(function(i){
        return obj1[i] !== obj2[i];
    });
    return x === -1;
}  

function compareObjects(obj1, obj2) {
/*変数値をプロパティに指定したい場合はブラケット記法を使用する必要があり*/	
    const one = Object.keys(obj1).sort();
    const two = Object.keys(obj2).sort();
    let flag = false;

    if(one.length === two.length){
        for(i = 0;i < one.length ; i++){
            if(one[i] === two[i]){
                if(obj1[one[i]] === obj2[two[i]]){
                    flag = true;
                }else{
                  return false;
                }
            }else{
              return false
            }
        }
    }
    if(one.length === 0 && two.length === 0){
        flag = true;
    }
    return flag;
}
// return JSON.stringify(obj1) === JSON.stringify(obj2); →　本来は同じなんだけど、文字列表現として等しくない

function compareObjects(obj1, obj2) {

  const firstObj = Object.keys(obj1);
  const secondObj = Object.keys(obj2);

  if(firstObj.toString() !== secondObj.toString()) return false;
  if(firstObj.length === 0 ) return true;
  return firstObj.some((i) =>  obj1[i] == obj2[i]);
}

console.log(compareObjects({ name: 'giselle' }, { name: 'zeke' }));
// OUTPUT: false

console.log(compareObjects({ name: 'nick' }, { name: 'nick' }));
// OUTPUT: true

console.log(compareObjects({n1:"a",n2:"b",n3:"c"}, {n1:"a",n2:"b",n4:"d"}));

console.log(compareObjects({}, {}));
//TESTS

console.log(compareObjects({ name: 'giselle' }, { name: 'zeke' }));
// OUTPUT: false

console.log(compareObjects({ name: 'nick' }, { name: 'nick' }));
// OUTPUT: true

3
/**Create the function factorial(num) that returns the factorial of its argument.
 *   The argument, num, will be a positive whole number.
 * A factorial is the product of a number times all the numbers below 
 * it and is denoted by a '!'.  For example, 5! would be 5*4*3*2*1 or 120.  */
function factorial(num) {
    if(num <= 1){ return 1; }
    return num * factorial(num - 1);
}
//TESTS

console.log(factorial(4));
//OUTPUT: 24

console.log(factorial(5));
//OUTPUT: 120
function factorial(num) {
  let ans = num;
  
  while (num > 1){
    ans *= num - 1 ;
    num--;
  }
  return ans;
}

//EXAMPLE TESTS

console.log(factorial(4));
//OUTPUT: 24

console.log(factorial(5));
//OUTPUT: 120
4
function underToCamel(underscore_str) {
/**underscoreをnとしたときｎ＋１番を大文字(
 * 大文字をcamelに突っ込むと同時にunderscoreをスキップ)
 * nがunderscoreではないときｎはそのままcamelへ*/
  let camel = '';
  for(i = 0; i < underscore_str.length; i++ ){
    if(underscore_str[i] === '_'){
      camel += underscore_str[i+1].toUpperCase();
      i++;
    }
    else{
      camel += underscore_str[i];
    }
  }
    return camel;
}

function underToCamel(underscore_str) {
  return underscore_str.replace(/_./g,function(match){
 　return match[1].toUpperCase();
 });
}

//EXAMPLE TESTS

console.log(underToCamel("first_name"));
//OUTPUT: "firstName"

console.log(underToCamel("my_income_tax_from_2015"));
//OUTPUT: "myIncomeTaxFrom2015"
5
/**Write a function that takes three arguments: n (number), m(number) and direction (string). 
 * The function should count to n by intervals of m and return those numbers in an array.
 * If the direction string is "Up", the function should count up to n from but not including 0.
 * If the string is "Down", it should count down to but not including 0. 
 * You can assume that both n and m will be greater than 0.  */

function count(to, interval, direction) {
  const arr = [];
  if(direction === 'Up'){
    for(i = interval; i <= to;  i += interval){
      arr.push(i);
    }
  }
  else{
    for(i = to; i > 0; i-=interval){
      arr.push(i);
    }
  }
  return arr;
}
//TESTS
  
console.log(count(10, 2, "Up"));
 // OUTPUT: [2, 4, 6, 8, 10]
  
console.log(count(11, 2, "Down"));
// OUTPUT: [11, 9, 7, 5, 3, 1]
6
function vowelCount(str) {
    const count = str.match(/[aiueo]/gi).length;
    if(count === null) return 0;
    return count;
}

function vowelCount(str) {
  let result = 0;
  vowels = 'aiueo';
  let lowers = str.toLowerCase();
  lowers.split('').reduce((acc, char) =>{
    if(vowels.indexOf(char) !== -1 ) result++;
  }, 0);
  return result;
}
// TESTS
  
console.log(vowelCount("Good Job"));
// OUTPUT: 3
  
console.log(vowelCount('Yankees'));
// OUTPUT: 3

7
function fibonacci(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fibonacci(n-2) + fibonacci(n-1);
}

function fibonacci(n) {
    return n < 2 ? n : fibonacci(n-2) + fibonacci(n-1);
}

8
function fizzBuzz(num) {
    if(num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if(num % 3 === 0) return 'Fizz';
    if(num % 5 === 0) return 'Buzz';
    return '';
}
9
function flatten(arr) {
    for (i=0; i< arr.length ; i++){
      if(Array.isArray(i)){
        for(j = 0; j < i.length; j++){
          arr.splice(i, 1, j)
        }
      }
    }
    return arr;
}
function flatten(arr) {
    const ans = [];
    for (i=0; i< arr.length ; i++){
      const value = arr[i];
      if(Array.isArray(value)){
        for(j = 0; j < value.length; j++){
            ans.push(value[j]);
        }
      }
      else{
          ans.push(value);
      }
    }
    return ans;
}
function flatten(arr) {
    return [].concat(...arr.map(item => Array.isArray(item) ? flatten(item) : item));
} 

function flatten(arr) {
  const flatArray = [];
  arr.reduce((acc, curr) => {
    if(Array.isArray(curr)) curr.forEach(i => flatArray.push(i));
    else flatArray.push(curr);
  },0);
  return flatArray;
}
  
  //EXAMPLE TEST
  
  console.log(flatten([1,[2,3],4]));
  // OUTPUT: [1,2,3,4];
//TEST
  
console.log(flatten([1,[2,3],4]));
// OUTPUT: [1,2,3,4];

10
/**Write a function that takes a string of text 
 * and returns an object containing the count for each character in the string. 
Note: The input string will only contain lowercase letters. 
There will not be any whitespace, capital letters, numbers, or special characters. */
function frequencyAnalysis(str) {
    const ans = {};
    for(i=0; i < str.length; i++){
      !ans[str[i]] ? ans[str[i]] = 1: ans[str[i]] += 1;
    }
    return ans;
} 
function frequencyAnalysis(str) {
  // initial value is {}  
  return Array.from(str).reduce(function(obj, char){
    if(char in obj ) obj[char]++;
    else obj[char] = 1;
    return obj;
  },{});
}
console.log(frequencyAnalysis('abca'));
// OUTPUT: {a: 2, b: 1, c: 1}
  
console.log(frequencyAnalysis(''));
// OUTPUT: { }

11
/**
 * Write a function called fullstackJack to figure out who will going to win a game of Black Jack.  
 * The function should take two arrays of equal length containing the cards each player is dealt. The function should return a string saying 'Player 1 Wins!', 'Player 2 Wins!', or 'Tie!'.
 
FullstackJack Rules:
Each player is dealt the same number of cards
They flip the card at the top of the deck
The card with the highest value wins the round, ​and the winning player receives a point
If the cards are the same, both players get a point
The two cards used are discarded
The players continue playing until there are no remaining cards
The player with the most points at the end wins */

function fullstackJack(player1Cards, player2Cards) {
    let rate = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
    let one = 0;
    let two = 0;
    
    for(i = 0; i < player1Cards.length; i++){
      if(rate.indexOf(player1Cards[i]) > rate.indexOf(player2Cards[i])){
        one++;
      }
      if(rate.indexOf(player1Cards[i]) < rate.indexOf(player2Cards[i])){
        two++;
      }
    }  
    if(one > two) return 'Player 1 Wins!';
    if(one < two) return 'Player 2 Wins!';
    if(one === two)return 'Tie!';
}

12
function functionRunner(func, arg) {
    return func(arg);
}
//TEST 
function squareNum(x) { 
  return x*x;
} 
console.log(functionRunner(squareNum, 4));
// OUTPUT: 16

13
/**Write a program that creates a string that represents a grid. 
At each position of the grid there is either a "#" or a “ ” character.
 The function should take a number that will represent the height and width of the new grid.
 The characters should alternate, forming the pattern listed in the example output. */
function gridGenerator(width) {
    let board = "";

    for (i = 0; i < width; i++) {
    /*改行追加*/
        for (x = 0; x < width; x++) {
        /*# or ''追加*/
        if ((x + i) % 2 === 0) board += '#';
        else board += ' ';
        }
    board += "\n";
    }
 return board;
}

//TESTS

console.log(gridGenerator(6));
//OUTPUT:  "# # # 
//           # # #
//          # # # 
//           # # #
//          # # # 
//           # # #
//         "


14
/*Write a function that compares two values and returns "how equal" those two values are.
 If they are strictly equal return "strictly", if they are loosely equal return "loosely",
  and if they are neither return "not equal".*/
function howEqual(val1, val2) {
    if(val1 ===val2) return 'strictly';
    if(val1 == val2) return 'loosely';
    else return 'not equal';
}
//TESTS
console.log(howEqual(0,'0'));
// OUTPUT: 'loosely'
console.log(howEqual(3, 9/3));
// OUTPUT: 'strictly'
console.log(howEqual(true, 'truthy'));
// OUTPUT: 'not equal'
console.log(howEqual(false, '0'));
// OUTPUT: 'loosely'
console.log(howEqual(0,''));
// OUTPUT: 'loosely'
15
function palindrome(str) {
    let rStr = str.split('').reverse().join('');
    return str.toLowerCase() === rStr.toLowerCase();
}
  
//TESTS 
console.log(palindrome("racecar"));
//OUTPUT: true
console.log(palindrome("animal"));
//OUTPUT: false
16
function isDivisible(dividend, divisor) {
    return dividend % divisor === 0
}
  
// TESTS
console.log(isDivisible(9, 3));
// OUTPUT: true
console.log(isDivisible(9, 4));
// OUTPUT: false

17
//合成数nは１より大きく√n以下の約数を持つ
//√n以下の約数を持たない=>素数
function isPrime(num) {
    if(num === 0 || num === 1) return false;
    for(i = 2;i <= Math.sqrt(num); i++){
      if(num % i === 0) return false;
    }
    return true;
}
//TESTS
   
console.log(isPrime(5));
console.log(isPrime(131071));
console.log(isPrime(6700417));
//OUTPUT: true
   
console.log(isPrime(10));
//OUTPUT: false
18
function lastDigit(num1, num2){
    return num1 % 10 === num2 % 10;
}
//TESTS
console.log(lastDigit(22,32));
//OUTPUT: true
  
console.log(lastDigit(77,999));
//OUTPUT: false
  
console.log(lastDigit(33,3));
//OUTPUT: true
19
/**Write a function myFilter that accepts an array and
 *  a callback function that is used to create a filtered array.
 *  Try to mirror the functionality of the native .filter() array method as closely as possible.
Just like the native .filter(), our myFilter function should not change
the array passed in as an argument, but should rather return a filtered copy of that array. */
function myFilter(arr, filterFunc) {
    const my_fil = (arr, conditions) => {
      //新しい配列を返す用意
      const new_arr = [];
      //渡された配列を回す
      arr.forEach(i => {
        //渡された条件に合致したものをから配列に突っ込む
          if (conditions(i)) {
              new_arr.push(i);
          }
      });
      return new_arr;
      };
    return my_fil(arr, num =>filterFunc(num));
      
}
//EXAMPLE TESTS
  
var arr = [1,2,3,4,5];
20 
function isEven(num) {
    return num % 2 === 0;
}
  
console.log(myFilter(arr, isEven));
 //OUTPUT: [2,4]
  
console.log(myFilter(arr, function(num) {
    return !isEven(num);
}));
//OUTPUT: [1,3,5];

21
/**However, myJoin will accept the array to operate on as its first parameter,
 *  rather than being invoked as a method on that array.
 *   Try and mirror the behavior of the native .join() method exactly.
 *    Note that if an element is undefined or null it should be converted to the empty string.
 *   Additionally, if there is no delimiter argument, use a ',' character.  

Note: Do not use the native .join() method in your own implementation! */
function myJoin(arr, delimiter) {
    const _join = (arr, delimiter) =>{
      if(typeof delimiter === 'undefined') delimiter = ',';
      let new_str = '';
      arr.forEach(i =>{
        if(i === null ||typeof i === 'undefined' ){
          if(arr.indexOf(i) < arr.length - 1) new_str+= '' + delimiter;
          else new_str+= '';
        }
        else{ 
          if(arr.indexOf(i) < arr.length - 1) new_str += i  + delimiter;
          else new_str += i;
        }
      });
    return new_str;
    };
  return _join(arr, delimiter);
}

function myJoin(arr, delimiter) {
  if(typeof delimiter === 'undefined') delimiter = ',';
  return arr.reduce((string, char, index) => {
    if(typeof char === 'undefined' || char === null){
      char = '';
      return string + delimiter + char;
    }
    if(index === 0){
      return string + char;
    }
    return string + delimiter + char;
    },''); 
}
//my test case
//expected type of String
console.log(typeof myJoin(['hello', 'world'], '　') === 'string' );

console.log(myJoin(['hello'], ' ') === ['hello'].join(' '));
console.log(['hello'].join(' '));
console.log(myJoin(['hello']), ' ');

console.log(myJoin(['hello', 'world'], ' ') === ['hello', 'world'].join(' '));
console.log(['hello', 'world'].join(' '));
console.log(myJoin(['hello', 'world']), ' ');

console.log(myJoin(['hello', 'world', 'hoge'], ' ') === ['hello', 'world', 'hoge'].join(' '));
console.log(['hello', 'world', 'hoge'].join(' '));
console.log(myJoin(['hello', 'world', 'hoge']), ' ');

console.log(myJoin(['hello','world' , ], ' ') === ['hello','world' , ].join(' '));
console.log(['hello','world' , ].join(' '));
console.log(myJoin(['hello','world' , ]), ' ');

console.log(myJoin(['hello', , ], ' ') === ['hello', , ].join(' '));
console.log(['hello', , ].join(' '));
console.log(myJoin(['hello', , ]), ' ');

console.log(myJoin([ , , ], ' ') === [ , , ].join(' '));
console.log([ , , ].join(' '));
console.log(myJoin([ , , ]), ' ');

console.log(myJoin(['hello', 'world', undefined], ' ') === ['hello', 'world', undefined].join(' '));
console.log(['hello', 'world', undefined].join(' '));
console.log(myJoin(['hello', 'world', undefined], ' '));

console.log(myJoin(['hello', undefined, undefined], ' ') === ['hello', undefined, undefined].join(' '));
console.log(['hello', undefined, undefined].join(' '));
console.log(myJoin(['hello', undefined, undefined]));

console.log(myJoin([undefined, undefined, undefined], ' ') === [undefined, undefined, undefined].join(' '));
console.log([undefined, undefined, undefined].join(' '));
console.log(myJoin([undefined, undefined, undefined]));

22
function myLastIndexOf(arr, searchFor, fromIndex) {
    if(fromIndex){
       for(i = fromIndex; i >= 0; i--){
        if(arr[i] === searchFor){
          return i;
        }
      }
    } 
    else {
     for(i = arr.length; i >= 0; i--){
        if(arr[i] === searchFor){
          return i;
        }
      }
    }
    return -1;
}
  //TESTS
  
  console.log(myLastIndexOf([1,2,1], 1) );
  // OUTPUT: 2
  console.log(myLastIndexOf([1,2,1], 1, 1));
  // OUTPUT: 0
23
function myMap(arr, mappingFunc) {
    const m = (arr, mappingFunc) => {
       const newArray = [];
       arr.forEach(item => newArray.push(mappingFunc(item)));
       return newArray;
    };
    return m(arr, mappingFunc);
   }
   
   //EXAMPLE TESTS
   
   var arr = [1,2,3];
24   
   function double(num) {
     return num * 2;
}
   
   console.log(myMap(arr, double));
   //OUTPUT: [2,4,6]
   
   console.log(myMap(arr, function(num) {
     return num.toString();
   }));
   //OUTPUT: ['1','2','3'];
25
function myPush(arr, newElement) {
    return arr.concat(newElement);
}

function myPush(arr, newElement) {
  const string = arr.join('') + newElement.toString();
  return string.split('').map(char => Number(char));
}

  //EXAMPLE TESTS
  
  console.log(myPush([1, 2, 3], 4));
  //Output: [1, 2, 3, 4] 
26
function mySlice(arr, begin, end) {
    if (typeof begin === 'undefined') begin = 0;
    if (begin < 0) begin = arr.length + begin;
    if (typeof end=== 'undefined') end = arr.length;
    if (end < 0) end = arr.length + end;
    const ans = [];
    for (i = begin; i < end; i++){
      ans.push(arr[i]);
    }
    return ans;
  }
  
  //TESTS
  
  console.log(mySlice([1,2,1]));
  //OUTPUT: [1, 2, 1]
  
  console.log(mySlice([1,2,1], 1));
  //OUTPUT: [2, 1]
  
  console.log(mySlice([1,2,3,4], 2, 3));
  //OUTPUT: [3]
  
  console.log(mySlice([1,2,3,4], 0, -1));
  //OUTPUT: [1, 2, 3]

  27

  28
  function playNameGame(name) {
    let vowels = 'AIUEO';
    
    if(vowels.includes(name[0])) newStr1 = name.toLowerCase();
    else{
      for (i = 0; i < name.length; i++){
       newStr1 = name.slice(1,name.length);
  　  }
    }
     return `${name} ${name} Bo B${newStr1} Banana Fana Fo F${newStr1} Fee Fi Mo M${newStr1} ${name}`
  }　
  
  
  //EXAMPLES TESTS
  console.log(playNameGame('Daniel'));
  // OUTPUT: "Daniel Daniel Bo Baniel Banana Fana Fo Faniel Fee Fi Mo Maniel Daniel"
  
  console.log(playNameGame('Ariel'));
  // OUTPUT: "Ariel Ariel Bo Bariel Banana Fana Fo Fariel Fee Fi Mo Mariel Ariel"
29
function nicknameGenerator(name) {
    const vowels = 'aiueo';
    let nickname= '';
    if(name.length < 4) return name;
    if(vowels.includes(name[2])){
      for(i = 0; i < 4; i++){
        nickname += name[i];
      }
    }
    else{
      for(i = 0; i < 3; i++){
        nickname += name[i];
      }
    }
    return nickname;
}

function nicknameGenerator(name) {
    const vowels = 'aiueo';
    let nickname = '';
    if(name.length < 4) return name;
    if(vowels.includes(name[2])) nickname = name.slice(0, 4);
    else nickname = name.slice(0, 3);
    return nickname;
}
  // TESTS:
  
  console.log(nicknameGenerator('Daniel'));
  //OUTPUT: 'Dan'
  
  console.log(nicknameGenerator('Beowulf'));
  //OUTPUT: 'Beow'
  
  console.log(nicknameGenerator('Joe'));

30
function objectifier(arrayData) {
    const _object = {};//外部オブジェクト
    //キーを取得
    for (var i = 0; i < arrayData.length; i++){
      //配列に名前をつける
      const key = arrayData[i][0];
      //内部オブジェクト生成
      _object[key] = {};
      //配列に名前をつける
      const values = arrayData[i][1];
      //内部の配列を内部オブジェクトに値として突っ込む
      for (var j = 0; j < values.length; j++){
        //key val key val ... 
        if (j%2 === 0){
          _object[key][values[j]] = values[j+1];
        }
      }
    }
    return _object;
  }
  
  //EXAMPLE TEST
  
  var data = [
    [ 'animals',
      [
        'dogs', ['Corgi', 'Sheltie'],
        'cats', ['Tabby','Black'],
        'pigs', ['Teacup']
      ]
    ],
    [ 'guitars',
      [
        'Fender', ['Telecaster', 'Stratocaster','Jazzmaster'],
        'Gibson', ["Gibson Flying-V", 'Firebird', 'Les Paul']
      ]
    ]
  ]
  
  console.log(objectifier(data));
  //OUTPUT: 
  //
  // {
  // animals : {
  //     dogs : ['Corgi', 'Sheltie'],
  //     cats : ['Tabby','Black'],
  //     pigs : ['Teacup']
  // },
  // guitars : {
  //     Fender : ['Telecaster', 'Stratocaster','Jazzmaster'],
  //     Gibson : ["Gibson Flying-V", 'Firebird', 'Les Paul']
  // }
  // }

  31
  function onlyOne(x, y, z) {
    let counter = 0;
    let arr = [x, y, z];
    for(var i =0; i < 3; i++) {
      if(arr[i]){
        counter++;
      }
    }
    return counter === 1;
  }
  
  //TESTS
  console.log(onlyOne(false, false, true));
  // OUTPUT: true
  
  console.log(onlyOne(0, 1, 2));
  // OUTPUT: false
  
  console.log(onlyOne(1, 1, 0));
  console.log(onlyOne(1, 0, 0));

32
function openSesame(passwordArr, password) {
    const decision = passwordArr.filter(i => i === password);
    if(decision.length > 0) return 'You may pass.';
    else return 'You shall not pass!';
  }
  
  //EXAMPLE TESTS
  var passwords = [
    'Password123',
    'DavidYangsMiddleName',
  ];
  
  console.log(openSesame(passwords, 'Password123'));
  //OUTPUT: 'You may pass.'
  
  console.log(openSesame(passwords, 'Balrog'));
  //OUTPUT: 'You shall not pass!'

  // let str = 'You shall not pass!';
  // passwordArr.forEach(i => {
  //   if(i === password) str = 'You may pass.';
  // });
  // return str;
33
  function properNounFilter(word) {
    if (word[0] !== word[0].toUpperCase()) return false;
    for (i = 1; i < word.length; i++) {
      if (word[i] === word[i].toUpperCase()) return false;
    } 
    return true;
  }
34
  function makeObj(ac,curr){
    if(!ac[curr]){
      ac[curr]=1;
    }else{
      ac[curr]++;
    }
    return ac;
  }
  
  function strFrequency(stringArr){
    return stringArr.reduce(makeObj,{});
  }
  
  
  //TEST
  
  var names = ["Bob", "Bill", "Bo", "Ben", "Bob", "Brett", "Ben", "Bill", "Bo", "Ben", "Bob", "Ben"];
  
  console.log(strFrequency(names));
  //OUTPUT: {Bob: 3, Bill: 2, Bo: 2, Ben: 4, Brett: 1}
35
  function sumReduce(arr, start) {
    return  arrSum = arr.reduce((ac, curr) => ac + curr, 50);
  }
  
  //EXAMPLE TESTS
  
  console.log(sumReduce([1,2,3,4]));
  // OUTPUT: 60
  
  console.log(sumReduce([]));
  // OUTPUT: 50
36
function removeZeros(num) {
    let numStr = num.toString();
    let str = '';
    
    if(num === 0) str = NaN;
    else {
        for(i = 0; i < numStr.length; i++) {
          if(parseInt(numStr[i]) !== 0 || Number.isNaN(numStr[i])) str += numStr[i];
        }
      }
    return Number(str);
  }
  
  //TESTS
  
  console.log(removeZeros(6006606.203));
  //OUTPUT: 6666.23
  
  console.log(removeZeros(0));
  //OUTPUT: NaN
  37
  function repeat(str, num) {
    let ans = '';
    for(i=0; i < num; i++){
      ans += str;
    }
    return ans;
  }
  
  //EXAMPLE TESTS
  
  console.log(repeat("yo", 4));
  // OUTPUT: 'yoyoyoyo'
  
  console.log(repeat("yo", 0));
  // OUTPUT: ''
  
  console.log(repeat("bye", 6));
  // OUTPUT: 'byebyebyebyebyebye'
38
function reverseString(str) {
    return str.length <= 1 ? str : reverseString(str.substring(1)) + str[0];
  }
  
  console.log(reverseString("hello"));
  // OUTPUT: 'olleh'
  
  console.log(reverseString('Greetings from the moon!'));
  // OUTPUT: '!noom eht morf sgniteerG'

39
function rotate(arrayToRotate, steps) {
    while (steps > 0) {
       let popped = arrayToRotate.pop();
       let unshifted = arrayToRotate.unshift(popped);
       steps--;
     }
     return arrayToRotate;
   }
   
   //EXAMPLE TESTS
   
   rotate([22, 11, 500, 92], 2);
   //Output: [500, 92, 22, 11]
40
function sumMultiplyAndRound(num1, num2, num3) {
    return Math.ceil((Math.floor(num1 + num2)) * num3);
  }
  
  //EXAMPLE TESTS
  
  console.log(sumMultiplyAndRound(2, 3.5, 6.2));
  //OUTPUT: 31
41
function totalPortfolioValue(stockTicker, portfolio) {
    index = 0;
    ans = 0;
    for(i=0; i < portfolio.length; i++){
      let holding = portfolio[i][0];
      index = stockTicker.indexOf(holding);
      ans += ticker[index + 1] * portfolio[i][1];
    }
    return ans;
  }
42
function sumCart(cartArray) {
    let sum = 0;
    for(i = 0; i < cartArray.length; i++){
      let cart = cartArray[i];
      sum += cart[1].quantity * cart[1].price;
    }
    return sum;
  }
  
  //EXAMPLE TESTS
  
  var cart = [
      ["tofu", {"quantity" : 3,"price" : 4.5} ],
      ["sriracha", {"quantity" : 1,"price" : 5} ],
      ["toilet paper", {"quantity" : 12,"price" : 1.75} ],
      ["Drano", {"quantity" : 1,"price" : 13} ],
      ["orichette", {"quantity" : 2,"price" : 7.5} ],
      ["hummus", {"quantity" : 2,"price" : 5.99} ],
      ["bison meat", {"quantity" : 3,"price" : 20.99} ],
      ["vegan bison meat", {"quantity" : 3,"price" : 24.99} ]
  ];
  
  console.log(sumCart(cart))
  //OUTPUT: 217.42

43
function sumOfDigits(digits) {
    let numStr = digits.toString();
    let ans = 0;
    for(i = 0; i < numStr.length; i++) {
     ans += parseInt(numStr[i]);
    }
      return ans;
  }
  
  function sumOfDigits(digits) {
    if (digits < 1) { return 0; }
    return Math.floor(digits % 10 + sumOfDigits(digits / 10));
  }
  //EXAMPLE TESTS
  
  console.log(sumOfDigits(414));
  //OUTPUT: 9
  
  console.log(sumOfDigits(2913));
  //OUTPUT: 15
44
  function converter(degreesF) {
    return (degreesF - 32) * (5 / 9)
  }
  
  //EXAMPLE TESTS
  
  console.log(converter(77));
  // OUTPUT: 25
  
  console.log(converter(32));
  // OUTPUT: 0
45
  function findVacantRooms(hotelArray) {
    let rooms = [];
    for(i = 0; i < hotelArray.length; i++){
      if(hotelArray[i] === "vacant"){
        rooms.push(i);
      }
    }
    return rooms;
  }
  
  //EXAMPLE TEST
  
  var rooms = ["vacant", "occupied", "occupied", "vacant", "vacant"];
  console.log(findVacantRooms(rooms));
  //OUTPUT: [0,3,4]
  46
  function countUpThenDown(num) {
    let ans = [];
    for(i = 0; i < num + 1; i++){
      ans.push(i);
    }
    for(i = num - 1; i >= 0 ;i--){
      ans.push(i);
    }
    return ans;
  }
  
  //EXAMPLE TESTS
  
  console.log(countUpThenDown(2));
  //OUTPUT: [0, 1, 2, 1, 0]
  
  console.log(countUpThenDown(0));
  //OUTPUT: [0]
47
  function zooInventory(zooArray) {
    let inventory = [];
    for (let i = 0; i < zooArray.length; i++) {
      let zoo = zooArray[i];
      inventory.push(zoo[0] + ' the ' + zoo[1][0] + ' is ' + zoo[1][1]);
    }
    return inventory;
  }
  
  //EXAMPLE TESTS
  
  var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
  ];
  
  console.log(zooInventory(myZoo));
  // OUTPUT: 
  // [
  //   'King Kong the gorilla is 42', 
  //   'Nemo the fish is 5',
  //   'Punzsutawney Phil the groundhog is 11'
  // ]


  var arr = [1,2,3,4];
  console.log(arr.splice(0,0))