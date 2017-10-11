export function band(...other:number[]) {
    let result = other[0];
    for (let i = 1; i < other.length; i++) {
        result &= other[i];
    }
    return result;
}
export function bor(...other:number[]) {
    let result = other[0];
    for (let i = 1; i < other.length; i++) {
        result |= other[i];
    }
    return result;
}