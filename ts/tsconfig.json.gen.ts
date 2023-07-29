import { deepMerge } from 'https://raw.githubusercontent.com/482F/482F-ts-utils/v2.x.x/src/const.ts'
import tsCommon from '../_ts/common.ts'
export default deepMerge(tsCommon, {
  compilerOptions: {
    resolveJsonModule: false,
    isolatedModules: false,
    esModuleInterop: false,
  },
})
