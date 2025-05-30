import { describe, expect, test } from 'vitest'

describe('Example Tests Suite', () => {
  test('should perform complex array operations', () => {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(n => n * 2);
    const filtered = doubled.filter(n => n > 5);
    const sum = filtered.reduce((acc, curr) => acc + curr, 0);
    
    expect(doubled).toEqual([2, 4, 6, 8, 10]);
    expect(filtered).toEqual([6, 8, 10]); 
    expect(sum).toBe(24);
  });

  test('should handle async operations', async () => {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    const result = await Promise.all([
      delay(100).then(() => 1),
      delay(50).then(() => 2)
    ]);
    
    expect(result).toEqual([1, 2]);
  });

  test('should perform string manipulations', () => {
    const text = "Hello World";
    const reversed = text.split('').reverse().join('');
    const words = text.split(' ').map(word => word.toLowerCase());
    
    expect(reversed).toBe("dlroW olleH");
    expect(words).toEqual(['hello', 'world']);
    expect(text.length).toBeGreaterThan(5);
  });
})