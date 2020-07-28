import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { SchoolManagement } from '../store/models';

@Injectable()
export class SchoolManagementService {
  constructor(private http: HttpClient) {}

  // Example http request:

  //   index(): Observable<SchoolManagement[]> {
  //     return this.http.get<SchoolManagement[]>(
  //       // import env vars so you only have to update 1 place not hundreds
  //       `${environment.appApi.baseUrl}/school-management` // URL endpoint goes here
  //     );
  //   }

  index(): Observable<SchoolManagement[]> {
    // Lets make mock list of data in reverse date order to test sorting
    const data: SchoolManagement[] = [
      {
        id: '3',
        date: new Date('2020-07-28'),
        files: [
          { id: '1', name: 'file 1' },
          { id: '2', name: 'file 2' },
        ],
      },
      {
        id: '2',
        date: new Date('2020-07-27'),
        files: [
          { id: '3', name: 'file 3' },
          { id: '4', name: 'file 4' },
        ],
      },
      {
        id: '1',
        date: new Date('2020-07-26'),
        files: [
          { id: '1', name: 'file 1' },
          { id: '2', name: 'file 2' },
          { id: '3', name: 'file 3' },
          { id: '4', name: 'file 4' },
        ],
      },
    ];

    return of(data);
  }
}
