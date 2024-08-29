type DefaultFunction = (...param: any[]) => void;
export class Pubsub<EventName extends string = string> {
  private events: Record<string, DefaultFunction[]>;
  constructor() {
    this.events = {};
  }
  subscribe(eventName: EventName, func: DefaultFunction) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    //@ts-ignore
    this.events[eventName].push(func);
  }
  unsubscribe(eventName: EventName, func: DefaultFunction) {
    const handlers = this.events[eventName];
    if (handlers) {
      this.events[eventName] = handlers.filter((handler) => handler !== func);
    }
  }
  publish<T = Record<string, any>>(eventName: EventName, context?: T) {
    if (!this.events[eventName]) {
      return;
    }
    //@ts-ignore
    this.events[eventName].forEach((func) => func(context));
  }
  clear(eventName?: EventName) {
    if (eventName) {
      delete this.events[eventName];
    } else {
      this.events = {};
    }
  }
}
