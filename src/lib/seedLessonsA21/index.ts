import { Lesson } from '../../types/database';
import { MODULE_9_A21_LESSONS } from './module9LessonsA21';
import { MODULE_10_A21_LESSONS } from './module10LessonsA21';
import { MODULE_11_A21_LESSONS } from './module11LessonsA21';
import { MODULE_12_A21_LESSONS } from './module12LessonsA21';

export const ALL_A21_LESSONS: Lesson[] = [
  ...MODULE_9_A21_LESSONS,
  ...MODULE_10_A21_LESSONS,
  ...MODULE_11_A21_LESSONS,
  ...MODULE_12_A21_LESSONS,
];

export {
  MODULE_9_A21_LESSONS,
  MODULE_10_A21_LESSONS,
  MODULE_11_A21_LESSONS,
  MODULE_12_A21_LESSONS,
};
