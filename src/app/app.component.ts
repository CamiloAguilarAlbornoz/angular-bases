import { Component } from '@angular/core';

// ================= Definicion Componente =================
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // =========== ATRIBUTOS ==================
  private title : string = 'maldito jj';

  // =========== METODOS GET Y SET =====================
  public getTitle() : string {
    return this.title;
  }
}
