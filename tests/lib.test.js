const {absolute, greet, getCurrencies, getProduct} = require('../lib');

describe('absolute', () => {
  it('should return a positive number if input is positive', () => {
    const result = absolute(1);
    expect(result).toBe(1);
  });

  it('should return a positive number if input is negative', () => {
    const result = absolute(-1);
    expect(result).toBe(1);
  });

  it('should return 0 if input is 0', () => {
    const result = absolute(0);
    expect(result).toBe(0);
  });
})

describe('greet', () => {
  it('should return the greeting message', () => {
    const result = greet('Frank');
    expect(result).toMatch(/Frank/);
    expect(result).toContain('Frank');
  })
})

describe('getCurrencies', () => {
  it('should return supported currencies', () => {
    const result = getCurrencies();
    // Too general
    expect(result).toBeDefined();
    expect(result).not.toBeNull();
    // Too specific
    expect(result[0]).toBe('USD');
    expect(result[1]).toBe('AUD');
    expect(result[2]).toBe('EUR');
    // Proper way
    expect(result).toContain('USD');
    // Idea way
    expect(result).toEqual(expect.arrayContaining(['EUR', 'USD']))
  });
})

describe('getProduct', () => {
  it('should return the product with the given id', () => {
    const result = getProduct(1);
    expect(result).toEqual({id: 1, price: 10});
    expect(result).toMatchObject({price: 10});
  });
})