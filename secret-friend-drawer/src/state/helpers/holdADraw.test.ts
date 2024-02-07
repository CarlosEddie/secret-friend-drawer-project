import { holdADraw } from "./holdADraw"

describe('given a secret friend draw', () => {
    test('each participant does not draw their own name', () => {
         const participants = ['Carlos', 'Eduardo', 'Eddie', 'Karu', 'CarlEd']
         const draw = holdADraw(participants)
         participants.forEach(participant => {
            const secretFriend = draw.get(participant)
            expect(secretFriend).not.toEqual(participant)
         })
    })
})