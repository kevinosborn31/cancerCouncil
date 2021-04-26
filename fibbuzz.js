function isSquare(num)
{
    let x = parseInt(Math.sqrt(num));
    return (x * x == num);
}

function isFibonacci(number)
{
    return isSquare(5 * number * number + 4) ||
           isSquare(5 * number * number - 4);
}

for (var i=1; i <= 20; i++)
{
    if (i % 5 == 0 && isFibonacci(i))
    console.log(i);
    else if (i % 5 == 0)
        console.log("buzz");
    else if (isFibonacci(i))
        console.log("fib");
}