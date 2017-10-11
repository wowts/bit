"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function band(...other) {
    let result = other[0];
    for (let i = 1; i < other.length; i++) {
        result &= other[i];
    }
    return result;
}
exports.band = band;
function bor(...other) {
    let result = other[0];
    for (let i = 1; i < other.length; i++) {
        result |= other[i];
    }
    return result;
}
exports.bor = bor;
