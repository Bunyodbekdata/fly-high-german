import { Lesson } from '../../types/database';
import { MODULE_5_A12_LESSONS } from './module5LessonsA12';
import { MODULE_6_A12_LESSONS } from './module6LessonsA12';
import { MODULE_7_A12_LESSONS } from './module7LessonsA12';
import { MODULE_8_A12_LESSONS } from './module8LessonsA12';

export const ALL_A12_LESSONS: Lesson[] = [
  ...MODULE_5_A12_LESSONS,
  ...MODULE_6_A12_LESSONS,
  ...MODULE_7_A12_LESSONS,
  ...MODULE_8_A12_LESSONS,
];

export {
  MODULE_5_A12_LESSONS,
  MODULE_6_A12_LESSONS,
  MODULE_7_A12_LESSONS,
  MODULE_8_A12_LESSONS,
};
