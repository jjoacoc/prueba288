import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from './data.service';  // Asegúrate de que la ruta es correcta

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: [''],
      email: ['']
    });
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      this.dataService.sendData(this.formulario.value).subscribe(
        response => {
          console.log(response);  // Maneja la respuesta aquí
          alert(response.message);  // Muestra un mensaje de éxito
        },
        error => {
          console.error('Error al enviar datos', error);
        }
      );
    } else {
      alert('Por favor, complete todos los campos del formulario.');
    }
  }
}

// export class AppComponent implements OnInit {
//   title = 'muni';

//   data: any[] = [];

//   constructor(private dataService: DataService) { }

//   ngOnInit(): void {
//     this.dataService.getData().subscribe(response => {
//       this.data = response;
//       console.log(this.data); // Verifica los datos en la consola
//     });
//   }
// }
