import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: 'tasks.page.html',
  styleUrls: ['tasks.page.scss'],
})
export class TasksPage {
  tasks: string[] = [];  // Lista de tareas
  newTask: string = ''; // Valor del input para una nueva tarea

  addTask() {
    if (this.newTask.trim().length > 0) { // Verifica si la tarea no está vacía
      this.tasks.unshift(this.newTask.trim()); // Agrega la tarea a la lista
      this.newTask = ''; // Limpia el campo de entrada
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1); // Elimina la tarea en la posición 'index'
  }
}
