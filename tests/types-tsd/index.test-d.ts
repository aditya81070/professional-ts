import { ITeam } from '../../src/types';
import { expectAssignable, expectNotAssignable } from 'tsd';

expectNotAssignable<ITeam>(null);
expectNotAssignable<ITeam>({
  channels: [],
  iconUrl: '',
  id: '',
  name: '',
});
