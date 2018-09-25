import Skill from './Skill'

const simple = Skill.create({ displayName: 'Survival', value: 4 })
const complex = Skill.create({ displayName: 'Combat: Karate', value: [2, 3] })

describe('models/Skill', () => {
  it('identifies type as simple vs complex', () => {
    expect(simple.type).toEqual('simple')
    expect(complex.type).toEqual('complex')
  })

  it('returns correct theory/mastery for simple & complex types', () => {
    expect(simple.theory).toEqual(0)
    expect(simple.mastery).toEqual(4)
    expect(complex.theory).toEqual(2)
    expect(complex.mastery).toEqual(3)
  })
})
