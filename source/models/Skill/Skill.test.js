import Skill from './Skill'

describe('models/Skill', () => {
  let skill

  beforeEach(() => {
    skill = Skill.create({ displayName: 'Survival' })
  })

  it('defaults to theory 0, mastery 1', () => {
    expect(skill.theory).toEqual(0)
    expect(skill.mastery).toEqual(1)
  })

  it('identifies itself as simple|complex', () => {
    expect(skill.isSimple).toEqual(true)
    expect(skill.isComplex).toEqual(false)

    skill.set({ theory: 1 })

    expect(skill.isSimple).toEqual(false)
    expect(skill.isComplex).toEqual(true)
  })
})
