export type ObserverType<T> = (data: T) => void;

export class Observable<T> {
  private observers: ObserverType<T>[] = [];

  subscribe(observer: ObserverType<T>): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: ObserverType<T>): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data: T): void {
    this.observers.forEach((observer) => observer(data));
  }
}
