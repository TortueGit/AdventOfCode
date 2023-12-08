import { describe, expect, test } from '@jest/globals';
import { deliveryFloor, indexBasement } from './index';

describe('NotQuiteLisp tests', () => {
    
    describe('deliveryFloor should return difference between () with ( as +1 and ) as -1', () => {

        test('((()))) should return -1', () => {
            // Arrange
            const message = '((())))';
            expect(deliveryFloor(message)).toEqual(-1);
        });
        
        test('))(()) should return -2', () => {
            // Arrange
            const message = '))(())';
            expect(deliveryFloor(message)).toEqual(-2);
        });
        
        test('))(())(((( should return 2', () => {
            // Arrange
            const message = '))(())((((';
            expect(deliveryFloor(message)).toEqual(2);
        });

    });
    
    describe('indexBasement should return the index of ) wich made go to basement', () => {

        test('((()))) should return 7', () => {
            // Arrange
            const message = '((())))';
            expect(indexBasement(message)).toEqual(7);
        });
        
        test('))(()) should return -2', () => {
            // Arrange
            const message = '))(())';
            expect(indexBasement(message)).toEqual(1);
        });
        
        test('))(())(((( should return 2', () => {
            // Arrange
            const message = '))(())((((';
            expect(indexBasement(message)).toEqual(1);
        });

    });
    
});