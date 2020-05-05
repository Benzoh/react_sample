export const PI = 3.141592;

export interface Circle {
  radius: number;
}

export function area({ radius }: Circle) {
  return PI * Math.pow(radius, 2);
}

export default (a: Circle, b: Circle) => a.radius === b.radius;