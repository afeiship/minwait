import minwait from '../src';

describe('Normal test cases', () => {
  test('should wait for minMs if asyncFn resolves faster than minMs', async () => {
    const asyncFn = async () => {
      await new Promise(resolve => setTimeout(resolve, 50));
      return 'fast';
    };
    const start = Date.now();
    const result = await minwait(asyncFn, 100);
    const elapsed = Date.now() - start;
    expect(result).toBe('fast');
    expect(elapsed).toBeGreaterThanOrEqual(100);
  });

  test('should not wait if asyncFn resolves slower than minMs', async () => {
    const asyncFn = async () => {
      await new Promise(resolve => setTimeout(resolve, 150));
      return 'slow';
    };
    const start = Date.now();
    const result = await minwait(asyncFn, 100);
    const elapsed = Date.now() - start;
    expect(result).toBe('slow');
    expect(elapsed).toBeGreaterThanOrEqual(150);
  });

  test('should use default minMs if not provided', async () => {
    const asyncFn = async () => {
      await new Promise(resolve => setTimeout(resolve, 50));
      return 'default';
    };
    const start = Date.now();
    const result = await minwait(asyncFn);
    const elapsed = Date.now() - start;
    expect(result).toBe('default');
    expect(elapsed).toBeGreaterThanOrEqual(100);
  });

  test('should return the value from the async function', async () => {
    const asyncFn = async () => {
      return 123;
    };
    const result = await minwait(asyncFn, 10);
    expect(result).toBe(123);
  });

  test('should handle errors in asyncFn', async () => {
    const asyncFn = async () => {
      throw new Error('Test Error');
    };
    await expect(minwait(asyncFn, 100)).rejects.toThrow('Test Error');
  });
});
