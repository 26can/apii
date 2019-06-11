import { Tean } from '.'

let tean

beforeEach(async () => {
  tean = await Tean.create({ text: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = tean.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(tean.id)
    expect(view.text).toBe(tean.text)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = tean.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(tean.id)
    expect(view.text).toBe(tean.text)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
