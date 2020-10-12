// @ts-check
// lesson is shamelessly plugged from testingjsvascript.com
const { sum, subtract, sumAsync, subtractAsync } = require("./math.js");

// test       a + b  = c
// test       a - b  = c
// async test a + b  = c
// async test a - b  = c

// by running assertions on the functions above

function expect(actual) {
  return {
    toBe(expected) {
      if (actual != expected) {
        throw new Error(`${actual} does not equal ${expected}`);
      }
    },
  };
}

async function test(title, callback) {
  try {
    await callback();
    console.log(`Works: ${title}`);
  } catch (error) {
    console.error(`Fails: ${title}`);
    console.error(error);
  }
}

test("3 + 7 should equal 10", async () => {
  expect(await sumAsync(3, 7)).toBe(10);
});

test("5 - 2 should equal 3", async () => {
  expect(await subtractAsync(5, 2)).toBe(3);
});
