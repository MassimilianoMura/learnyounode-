var array = process.argv;
var total = 0;

for ( i = 2; i < array.length; i++ )
  total += Number(array[i]);

console.log(total);

