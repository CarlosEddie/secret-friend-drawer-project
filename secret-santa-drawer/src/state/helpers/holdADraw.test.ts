import { holdADraw } from "./holdADraw"

describe('given a secret santa draw', () => {
    test('each participant does not draw their own name', () => {
         const participants = ['Carlos', 'Eduardo', 'Eddie', 'Karu', 'CarlEd']
         const draw = holdADraw(participants)
         participants.forEach(participant => {
            const secretSanta = draw.get(participant)
            expect(secretSanta).not.toEqual(participant)
         })
    })
})