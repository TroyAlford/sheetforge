import Attribute, { Primary, Computed, createComputed } from './Attribute'

describe('Attribute', () => {
  it('handles Attributes and Computeds', () => {
    const a = Primary.create({ id: 'a', name: 'a', computed: false })
    const c = Computed.create({ id: 'c', name: 'c', computed: true })
    const x = createComputed(self => `${self.name}!!`)
      .create({ id: 'x', name: 'x', computed: true })

    expect(Attribute.is(a))
    expect(Attribute.is(c))
    expect(Attribute.is(x))
  })

  it('can instantiate Attributes or Computeds', () => {
    const a = Attribute.create({ id: 'a', name: 'a', computed: false })
    expect(Attribute.is(a))
    expect(Primary.is(a))
    expect(!Computed.is(a))

    const b = Attribute.create({ id: 'c', name: 'c', computed: true })
    expect(Attribute.is(b))
    expect(!Primary.is(b))
    expect(Computed.is(b))
  })

  it('can infer when to create Primary vs Computed', () => {
    const a = Attribute.create({ id: 'a', name: 'a', value: self => `${self.name}!!` })
    expect(Computed.is(a))
    expect(!Primary.is(a))
    expect(a.value).toBe('a!!')

    const b = Attribute.create({ id: 'a', name: 'a', value: 4 })
    expect(!Computed.is(b))
    expect(Primary.is(b))
    expect(b.value).toBe(4)

    const c = Attribute.create({ id: 'a', name: 'a' })
    expect(c.value).toBe(-1)
  })
})

describe('Primary', () => {
  const attributes = { id: 'a', name: 'a', computed: false }

  it('requires id', () => {
    expect(() => Primary.create()).toThrowError(/id.*is not a string/)
  })

  it('requires name', () => {
    expect(() => Primary.create()).toThrowError(/name.*is not a string/)
  })

  it('requires computed = false', () => {
    expect(() => Primary.create()).toThrowError(/computed.*is not a literal false/)
    expect(() => Primary.create({ ...attributes, computed: true }))
      .toThrowError(/computed.*is not a literal false/)
  })

  it('defaults and sets value', () => {
    const a = Primary.create(attributes)
    expect(a.value).toBe(-1)

    a.setValue(2)
    expect(a.value).toBe(2)
  })

  it('calculates xpCost', () => {
    const a = Primary.create(attributes)
    expect(a.value).toBe(-1)
    expect(a.xpCost).toBe(0)

    a.setValue(0)
    expect(a.xpCost).toBe(1)

    a.setValue(1)
    expect(a.xpCost).toBe(5)

    a.setValue(2)
    expect(a.xpCost).toBe(14)
  })

  it('honors min/max values', () => {
    const oldConsoleWarn = console.warn
    console.warn = () => { }

    const a = Primary.create(attributes)
    expect(a.min).toBe(-10)
    expect(a.max).toBe(10)

    a.setValue(a.max + 1)
    expect(a.value).toBe(a.max)

    a.setValue(a.min - 1)
    expect(a.value).toBe(a.min)

    console.warn = oldConsoleWarn
  })
})

describe('Computed', () => {
  describe('Attribute', () => {
    const attributes = { id: 'a', name: 'a', computed: false }

    it('requires id', () => {
      expect(() => Computed.create()).toThrowError(/id.*is not a string/)
    })

    it('requires name', () => {
      expect(() => Computed.create()).toThrowError(/name.*is not a string/)
    })

    it('requires computed = true', () => {
      expect(() => Computed.create()).toThrowError(/computed.*is not a literal true/)
      expect(() => Computed.create({ ...attributes, computed: false }))
        .toThrowError(/computed.*is not a literal true/)
    })
  })
})

describe('createComputed', () => {
  it('creates Computed which computes correctly', () => {
    const MyComputed = createComputed(self => `${self.name} foo!`)
    const computed = MyComputed.create({ id: 'a', name: 'a', computed: true })

    expect(Computed.is(computed))
    expect(computed.value).toBe('a foo!')
  })
})
