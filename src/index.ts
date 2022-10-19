type GreetingFn = (name: string) => string

export const Greeter: GreetingFn = (name: string) => `Hello ${name}`