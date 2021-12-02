import { Observable } from 'rxjs';

export interface CrudfamilleSousService {
  getAll(): Observable<any>;

  add(famille_sous): Observable<any>;

  update(famille_sous): Observable<any>;

  delete(id): Observable<any>;

  addAll(list): Observable<any>;
}