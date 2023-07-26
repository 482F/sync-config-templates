export default {
  tasks: {
    dev: 'deno run --watch main.ts',
    test: 'deno test --allow-write=. --allow-read=.',
    hook: 'deno run --allow-read=. --allow-write=. https://deno.land/x/deno_hooks@0.1.1/mod.ts',
  },
  compilerOptions: {
    strict: true,
    noUncheckedIndexedAccess: true,
  },
  lint: {
    rules: {
      tags: ['recommended'],
      include: [],
      exclude: [],
    },
  },
  fmt: {
    indentWidth: 2,
    lineWidth: 80,
    semiColons: false,
    singleQuote: true,
  },
}
