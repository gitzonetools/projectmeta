import { expect, tap } from 'tapbundle'
import * as metaproject from '../ts/index'

tap.test('first test', async () => {
  console.log(metaproject.standardExport)
})

tap.start()
