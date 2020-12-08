import { Component } from "@angular/core";
import { CursoService } from "../services/curso.service";
import { AlertController } from "@ionic/angular";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "app-cursos",
  templateUrl: "./cursos.page.html",
  styleUrls: ["./cursos.page.scss"],
})
export class CursosPage {
  constructor(
    private cursoService: CursoService,
    private alertController: AlertController,
    private menu: MenuController
  ) {}

  cursos: any = [];

  openMenu() {
    this.menu.open();
  }
 
  loadCursos() {
    this.cursoService.getCursos().subscribe(
      (res) => {
        console.log(res);
        this.cursos = res;
      },
      (err) => console.log(err)
    );
  }

  ionViewWillEnter() {
    this.loadCursos();
  }

  async deleteCurso(id, titulo) {
    const alert = await this.alertController.create({
      header: "Borrar",
      subHeader: "Borrar el curso " + titulo,
      message:
        "Estas seguro que quieres borrar el curso, esta opecarión no se puede deshacer",
      buttons: [
        {
          text: "Ok",
          handler: () => {
            console.log(id);
            this.cursoService.deleteCursoById(id).subscribe(
              (res) => {
                this.loadCursos();
              },
              (err) => console.log(err)
            );
          },
        },
        "Cancelar",
      ],
    });

    await alert.present();
  }

  updateCurso(id: string) {
    console.log(id);
  }
}
