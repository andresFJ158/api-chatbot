// This file must be JavaScript (not TypeScript) to ensure dynamic import
// TypeScript compiles dynamic imports to require() in CommonJS mode
// By using a .js file, we ensure the import stays dynamic

module.exports = async function loadBaileys() {
  return await import('@whiskeysockets/baileys');
};

