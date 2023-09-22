export default {
  include: ['src/**/*'],
  compilerOptions: {
    strict: true,
    noUncheckedIndexedAccess: true,
    module: 'esnext',
    paths: {
      '@/*': ['src/*'],
    },
    resolveJsonModule: true,
    rootDir: './src',
    noEmit: true,
    allowJs: true,
    checkJs: true,
    allowImportingTsExtensions: true,
  },
}
