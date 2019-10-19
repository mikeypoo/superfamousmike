export async function asyncForEach(array, callback) {
  return new Promise(async resolve => {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
    resolve()
  })
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
