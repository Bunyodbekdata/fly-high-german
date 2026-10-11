import { Lesson } from '../../types/database';
import { MODULE_21_B12_LESSONS } from './module21LessonsB12';
import { MODULE_22_B12_LESSONS } from './module22LessonsB12';
import { MODULE_23_B12_LESSONS } from './module23LessonsB12';
import { MODULE_24_B12_LESSONS } from './module24LessonsB12';

export const ALL_B12_LESSONS: Lesson[] = [
  ...MODULE_21_B12_LESSONS,
  ...MODULE_22_B12_LESSONS,
  ...MODULE_23_B12_LESSONS,
  ...MODULE_24_B12_LESSONS,
];

export {
  MODULE_21_B12_LESSONS,
  MODULE_22_B12_LESSONS,
  MODULE_23_B12_LESSONS,
  MODULE_24_B12_LESSONS,
};
