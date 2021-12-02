import { Observable } from 'rxjs';

export interface CrudfamilleService {
  getAll(): Observable<any>;

  add(famille): Observable<any>;

  update(famille): Observable<any>;

  delete(id): Observable<any>;

  addAll(list): Observable<any>;
}