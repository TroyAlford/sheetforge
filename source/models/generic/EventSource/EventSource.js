export default class EventSource {
  static IEventSource = true
  IEventHandlers = {}

  event = (event, ...args) => (this.IEventHandlers[event] || [])
    .forEach(fn => fn.apply(null, args)) // eslint-disable-line prefer-spread

  on = (event, handler) => {
    this.IEventHandlers[event] = this.IEventHandlers[event] || []
    this.IEventHandlers[event].push(handler)

    return () => {
      this.IEventHandlers[event] = this.IEventHandlers[event].filter(fn => fn !== handler)
    }
  }
}
