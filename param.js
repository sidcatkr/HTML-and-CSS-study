function plus() {
    return 1 + ''
}

console.log(plus(2))
// 아마도 3 나올듯
// 아님. '' 라는 빈 *문자열*이라서 1만 출력됨.

function plus2() {
    return '' + ''
}

console.log(plus2(3))
// 아마도 6 나올듯
// 아님. 빈 문자열끼리 더해서 안됨.

function plus3(a, b) {
    return a + b
}

console.log(plus3(1, 3))
// 아마도 4 나올듯
// 이건 잘함.
