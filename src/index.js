module.exports = function toReadable (number) {
    const num1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const num2 = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let str = number.toString().split('');
    if (number < 0) {
        return 'Error';
    }
    if (number === 0) {
        return 'zero';
    }
    if (number > 0 && number < 20) {
        return num1[number];
    }
    if (number > 19 && number < 100) {
        return (num2[str[0]] + ' ' + num1[str[1]]).trim();
    }
    if (number > 99) {
        if (str[1] == '0' && str[2] == '0') {
        return (num1[str[0]] + ' ' + 'hundred').trim();
     } else
        return (num1[str[0]] + ' ' + 'hundred' + ' ' + toReadable(Number(str[1] + str[2]))).trim();
    }   
}
