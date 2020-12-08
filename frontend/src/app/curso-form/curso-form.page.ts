import { Component, OnInit } from "@angular/core";
import { CursoService, Curso } from "../services/curso.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-curso-form",
  templateUrl: "./curso-form.page.html",
  styleUrls: ["./curso-form.page.scss"],
})
export class CursoFormPage implements OnInit {
  editing = false;
  curso: Curso = {
    titulo: "",
    subtitulo: "",
    precio: null,
    duracion: "",
    inicio: "",
    fin: "",
    descripcion: "",
  };

  constructor(
    private cursoService: CursoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (paramMap.get("cursoid")) {
        this.editing = true;
        this.cursoService.getCursoById(paramMap.get("cursoid")).subscribe(
          (res) => {
            this.curso = res;
          },
          (err) => console.log(err)
        );
      }
    });
  }

  saveCurso() {
    this.cursoService
      .createCurso({
        titulo: this.curso.titulo,
        subtitulo: this.curso.subtitulo,
        precio: this.curso.precio,
        duracion: this.curso.duracion,
        inicio: this.curso.inicio,
        fin: this.curso.fin,
        descripcion: this.curso.descripcion
      })
      .subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(["/cursos"]);
        },
        (err) => console.error(err)
      );
  }

  updateCurso() {
    this.cursoService
      .updateCursoById(this.curso.id, {
        titulo: this.curso.titulo,
        subtitulo: this.curso.subtitulo,
        precio: this.curso.precio,
        inicio: this.curso.inicio,
        fin: this.curso.fin,
        duracion: this.curso.duracion,
        descripcion: this.curso.descripcion,
      })
      .subscribe((res) => {
        this.router.navigate(["/cursos"]);
      });
  }
}
