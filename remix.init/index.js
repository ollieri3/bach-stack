// Currently, Remix DEV CLI commands require a CommonJS module. This satisfies that requirement.
module.exports = async (...args) => {
  const { default: main } = await import("./index.mjs");
  await main(...args);
};
