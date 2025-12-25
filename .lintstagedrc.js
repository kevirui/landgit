module.exports = {
  // TypeScript/JavaScript files
  '**/*.{ts,tsx,js,jsx}': (filenames) => {
    const commands = [];

    // Añadir prettier para formateo - usar comillas para manejar espacios
    const quotedFiles = filenames.map((f) => `"${f}"`).join(' ');
    commands.push(`pnpm prettier --write ${quotedFiles}`);

    // Ejecutar lint solo en los workspaces afectados
    // Turbo detectará automáticamente qué paquetes necesitan linting
    commands.push('pnpm turbo lint');

    return commands;
  },

  // JSON, YAML, Markdown
  '**/*.{json,yaml,yml,md}': (filenames) => {
    const quotedFiles = filenames.map((f) => `"${f}"`).join(' ');
    return [`pnpm prettier --write ${quotedFiles}`];
  },

  // CSS, SCSS
  '**/*.{css,scss}': (filenames) => {
    const quotedFiles = filenames.map((f) => `"${f}"`).join(' ');
    return [`pnpm prettier --write ${quotedFiles}`];
  },
};
