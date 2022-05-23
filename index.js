// alert( "description of alerted_value: " + alerted_value );
/*
a + b
a - b
a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 
*/

// Declare variable

let a = 3;
let b = 5;
let c = null;

let result = 'let a = 3;\n';
result += 'let b = 5;\n';
result += 'let c;\n';

result += '--------------------\n';

result += 'a + b = ' + (a+b) + '\n';
result += 'a - b = ' + (a-b) + '\n';
result += 'a * b = ' + (a*b) + '\n';
result += 'a / b = ' + (a/b) + '\n';
result += 'a % b = ' + (a%b) + '\n';
result += '(a += b): ' + (a+=b) + '\n';
result += '(a -= b): ' + (a-=b) + '\n';
result += '(a *= b): ' + (a*=b) + '\n';
result += '(a /= b): ' + (a/=b) + '\n';
result += '(a %= b): ' + (a%=b) + '\n';
result += '(a == b): ' + (a==b) + '\n';
result += '(a != b): ' + (a!=b) + '\n';
result += '(a > b): ' + (a>b) + '\n';
result += '(a < b): ' + (a<b) + '\n';
result += '(!a && ! ): ' + (!a && !c) + '\n';
result += '(!a || !c): ' + (!a || !c) + '\n';

alert(result);

let first_name = 'Brenden';
let last_name = 'Wishlow';
let email = 'wish0011@algonquinlive.com';

let output = '"My name is ' + first_name + ' ' + last_name + '. ' + 'You can contact me at ' + email + '."';

alert (output);

