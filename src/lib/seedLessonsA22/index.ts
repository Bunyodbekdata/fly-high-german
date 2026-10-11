import { Lesson } from '../../types/database';
import { MODULE_13_A22_LESSONS } from './module13LessonsA22';
import { MODULE_14_A22_LESSONS } from './module14LessonsA22';
import { MODULE_15_A22_LESSONS } from './module15LessonsA22';
import { MODULE_16_A22_LESSONS } from './module16LessonsA22';

export const ALL_A22_LESSONS: Lesson[] = [
  ...MODULE_13_A22_LESSONS,
  ...MODULE_14_A22_LESSONS,
  ...MODULE_15_A22_LESSONS,
  ...MODULE_16_A22_LESSONS,
];

export {
  MODULE_13_A22_LESSONS,
  MODULE_14_A22_LESSONS,
  MODULE_15_A22_LESSONS,
  MODULE_16_A22_LESSONS,
};
