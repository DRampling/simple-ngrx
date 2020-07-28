import { SchoolManagement } from '../models';

// In this case this would be optional since primary key is id, but we
// could use another unique field to identify with
export function selectSchoolManagementId(sm: SchoolManagement): string {
  return sm.id;
}
