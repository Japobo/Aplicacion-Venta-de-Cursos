import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "cursos",
    pathMatch: "full",
  },
  {
    path: "cursos",
    loadChildren: () =>
      import("./cursos/cursos.module").then((m) => m.CursosPageModule),
  },
  {
    path: "curso-form",
    loadChildren: () =>
      import("./curso-form/curso-form.module").then(
        (m) => m.CursoFormPageModule
      ),
  },

  {
    path: "curso-form/:cursoid",
    loadChildren: () =>
      import("./curso-form/curso-form.module").then(
        (m) => m.CursoFormPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}