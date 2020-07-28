import { SchoolManagement } from '../models';

// Lets sort the dates by comparing difference in time
export function sortByDate(a: SchoolManagement, b: SchoolManagement): number {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}
