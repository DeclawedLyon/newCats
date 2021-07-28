const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

describe('#breedDetails', () => {
  it('returns breed details for the Bombay breed', () => {
    // We expect it to be a function, but will it be?
    // console.log(breedDetails('Bombay'));
    const expectedDesc = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";

    const bombay = breedDetails('Bombay');
    assert.equal(expectedDesc, bombay);
  });
  it('returns breed details for the Balinese breed', () => {
    const expectedDesc = `Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.`;

    const balinese = breedDetails('Balinese')
    assert.equal(expectedDesc, balinese)
  })
  it ('returns --Please choose a breed-- when there is no description for the breed name provided', () => {
    const expected = '--Please Choose A Breed--';
    
    const noBreed = breedDetails('');
    assert.equal(noBreed, expected)
  })
  it('returns --Please choose a valid breed-- when chseon breed doesnt exist', () => {
    const expected = '--Please Choose A Valid Breed--';

    const actual = breedDetails('Tiger');
    assert.equal(actual, '--Please Choose A Valid Breed--');
  })
});