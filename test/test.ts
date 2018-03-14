import { expect, tap } from 'tapbundle';
import * as projectmeta from '../ts/index';

tap.test('first test', async () => {
  console.log(projectmeta.standardExport);
});

tap.start();
