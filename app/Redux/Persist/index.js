import AsyncStorage from '@react-native-async-storage/async-storage';
import createRematchPersist from '@rematch/persist';
import { AllFilters } from '../Filters';

export const persistPlugin = createRematchPersist({
  key: 'root',
  whitelist: [
    'ToDo',
    'Posts'
  ],
  // blacklist: [
  //   'Posts',
  //   'ToDo'
  // ],
  version: 1,
  storage: AsyncStorage,
  transforms: AllFilters,
});
