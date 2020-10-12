/**
 * Write a function that adds to numbers together
 */
export function add(a: number, b: number): number {
  return a + b;
}
/**
 * Write a function that subtracts one number from the other
 */
export function subtract(a: number, b: number): number {
  return a - b;
}
/**
 * Write a function that selects something from an array of generics
 * if the item does not exsist return undefined
 */
export function select<T>(i: number, items: T[]): T | undefined {
  return items[i];
}

/**
 * Write a function that returns a string of a specific length
 */
export function randomString(len: number): string {
  const generateRandomString: any = function (len: number, randomString = "") {
    randomString += Math.random().toString(20).substr(2, len);
    if (randomString.length > len) return randomString.slice(0, len);
    return generateRandomString(len, randomString);
  };

  return generateRandomString(len);
}

/**
 * Wirte a function that returns an object with a random number and a random string
 */
export function randomValues(): { value: number; str: string } {
  const source = "abcdefghijklmnopqrstuvwxyz";

  let randomString = "";
  for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
    randomString += source.charAt(Math.floor(Math.random()));
  }
  return {
    value: Math.random() * 1000,
    str: randomString,
  };
}

/**
 * Write a function that returns always the same object
 */

export function somethingShouldBeStatic(): { value: number; str: string } {
  return {
    str: "yiihhaa",
    value: 1,
  };
}
