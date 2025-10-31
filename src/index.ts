/**
 * 确保异步函数执行总耗时至少为指定毫秒数。
 * @param asyncFn 要执行的异步函数
 * @param minMs 最小耗时（毫秒），默认 100
 * @returns 异步函数的返回值
 *
 * AI: https://chat.qwen.ai/c/664abe9f-c13c-45c3-b900-d6647cab4deb
 */
async function minwait<T>(
  asyncFn: () => Promise<T>,
  minMs: number = 100
): Promise<T> {
  const start = Date.now();
  const result = await asyncFn();
  const elapsed = Date.now() - start;
  const remaining = minMs - elapsed;

  if (remaining > 0) {
    await new Promise(resolve => setTimeout(resolve, remaining));
  }

  return result;
}

export default minwait
