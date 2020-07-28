import { File } from './file.model';

export interface SchoolManagement {
  id: string;
  date: Date;
  files: File[];
}
