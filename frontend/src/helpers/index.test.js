import { getLetterMatchCount } from './'

describe('getLetterMatchCount', () => {
    const secretWord = 'party'
    test('return correct count when there are no matching letters', () => {
        const letterMatchCount = getLetterMatchCount('bones', secretWord)
        expect(letterMatchCount).toBe(0)
    })

    test('return correct count when there are matching letters', () => {
        const letterMatchCount = getLetterMatchCount('train', secretWord)
        expect(letterMatchCount).toBe(3)
    })

    test('return correct count when there are duplicate letters in the guess', () => {
        const letterMatchCount = getLetterMatchCount('parka', secretWord)
        expect(letterMatchCount).toBe(3)
    })
})