import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  nombre: string = '';
  email: string = '';
  direccion: string = '';


  constructor( //el constructor se utiliza para inyectar dependencias 
    public dialogRef: MatDialogRef<DialogComponent>, // dialogRef hace referencia al diálogo que se está abriendo
    @Inject(MAT_DIALOG_DATA) public data: any //Inject se utiliza para inyectar datos en el diálogo, con eso conseguimos que el diálogo pueda recibir datos desde el componente que lo abre
  ) {}
  onCancel(): void {
    this.dialogRef.close();
  }
  onSubmit() : void {
    this.dialogRef.close({
      nombre: this.nombre,
      email: this.email,
      direccion: this.direccion
    });
  }

}
