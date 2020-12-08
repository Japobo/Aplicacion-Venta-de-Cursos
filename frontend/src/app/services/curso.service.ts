import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface Curso {
  id?: string;
  titulo: string;
  subtitulo: string;
  precio: number;
  duracion: string;
  inicio: string;
  fin: string;
  descripcion: string;
}

@Injectable({
  providedIn: "root",
})
export class CursoService {
  API = "http://localhost:1337/cursos";

  constructor(private http: HttpClient) {}
  getCursos() {
    return this.http.get(`${this.API}?_sort=published_at:desc`);
  }

  getCursoById(id: string) {
    return this.http.get<Curso>(`${this.API}/${id}`);
  }

  createCurso(curso: Curso) {
    return this.http.post(`${this.API}`, curso);
  }

  updateCursoById(id: string, curso: Curso) {
    return this.http.put(`${this.API}/${id}`, curso);
  }

  deleteCursoById(id: string) {
    return this.http.delete(`${this.API}/${id}`);
  }
}
