module.exports = class Challenges {
    returnSum(num1, num2) {
        return num1 + num2;
    }

    celciusToFahrenheit(cDegrees) {
        var Fahrenheit = (9 / 5 * cDegrees) + 32;
        return Fahrenheit;
    }

    makeItBig(arr) {
        var list = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                list.push("big");
            } else {
                list.push(arr[i]);
            }
        }
        return (list)
    }

    double(arr) {
        var list = [];
        for (var i = 0; i < arr.length; i++) {
            list.push(arr[i] + arr[i]);
        }
        return (list)
    }

    returnArrayCountGreaterThanY(arr, y) {
        var x = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > y) {
                x++;
            }
        }
        return x;
    }

    sigma(num) {
        var total = 0;
        for (var i = 1; i <= num; i++) {
            total += i;
        }
        return total;
    }

    factorial(num) {
        var total = 1;
        for (var i = 1; i <= num; i++) {
            total = total * i;
        }
        return total;
    }

    swapTowardCenter(arr) {
        var list = [];
        for (var i = 1; i <= arr.length; i++) {
            list.push(arr[arr.length - i]);
        }
        return (list)
    }

    threesFives(num){
        var total = 0;
        for(var i=1;i<num;i++){
            if(i % 5 != 0 && i % 3 != 0){
                total=total + i;
            }
        }
        return total;
    }

    fibonacci(index){
        var a = 0;
        var b = 1;
        var c = index;
        for(var i = 2; i <= index; i++){
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    }

};