function divideArray(numbers) {
    let evenNumbers = numbers
        .filter((number) => number % 2 == 0)
        .sort((a, b) => a - b);
    let oddNumbers = numbers
        .filter((number) => number % 2 !== 0)
        .sort((a, b) => a - b);
    console.log(evenNumbers, oddNumbers);
}
divideArray([4, 2, 9, 1, 8]);