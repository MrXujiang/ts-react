//const /type模式, 允许我们以易于访问和可重构的方式, 使用 TypeScript 的字符串字面量类型
export const NUM_INCREMENT = "increment";
export type NUM_INCREMENT = typeof NUM_INCREMENT;


export const NUM_DECREMENT = "decrement";
export type NUM_DECREMENT = typeof NUM_DECREMENT;