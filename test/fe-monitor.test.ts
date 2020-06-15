import FeMonitor from '../src/fe-monitor'

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('DummyClass is instantiable', () => {
    expect(new FeMonitor()).toBeInstanceOf(FeMonitor)
  })
})
