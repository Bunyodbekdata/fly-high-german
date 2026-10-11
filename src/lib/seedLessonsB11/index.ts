import { Lesson } from '../../types/database';
import { MODULE_17_B11_LESSONS } from './module17LessonsB11';
import { MODULE_18_B11_LESSONS } from './module18LessonsB11';
import { MODULE_19_B11_LESSONS } from './module19LessonsB11';
import { MODULE_20_B11_LESSONS } from './module20LessonsB11';

export const ALL_B11_LESSONS: Lesson[] = [
  ...MODULE_17_B11_LESSONS,
  ...MODULE_18_B11_LESSONS,
  ...MODULE_19_B11_LESSONS,
  ...MODULE_20_B11_LESSONS,
];

export {
  MODULE_17_B11_LESSONS,
  MODULE_18_B11_LESSONS,
  MODULE_19_B11_LESSONS,
  MODULE_20_B11_LESSONS,
};
