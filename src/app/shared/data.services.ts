import { Observable } from 'rxjs';

export interface DataService {
  getAll(): Observable<any>;


  addAll(list): Observable<any>;
}