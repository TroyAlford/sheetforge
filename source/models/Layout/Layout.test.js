import Layout from './Layout'

describe('models/Layout', () => {
  it('computes columns()', () => {
    const layout1 = Layout.create({ children: [{ colSpan: 2 }, { colSpan: 1 }] })
    const layout2 = Layout.create({ children: [{ colSpan: 2 }] })
    const layout3 = Layout.create({ children: [{ colSpan: 4 }, { colSpan: 2 }, { colSpan: 1 }] })

    expect(layout1.columns()).toEqual(3)
    expect(layout2.columns()).toEqual(2)
    expect(layout3.columns()).toEqual(7)
  })
})
