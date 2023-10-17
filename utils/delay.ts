/**
 * Delay execution by a specified time duration.
 * @param time - The delay time in milliseconds.
 * @param callback - The callback function to execute after the delay.
 * @returns A Promise that resolves after the specified delay time.
 */
export function delay(time: number, callback: () => void): Promise<void> {
  return new Promise((resolve) =>
    setTimeout(() => {
      callback();
      resolve();
    }, time)
  );
}
