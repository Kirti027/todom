import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNoteComponent } from './create-note/create-note.component';
import { NoteListComponent } from './note-list/note-list.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path: '', redirectTo: 'create-note', pathMatch: 'full'},
  { path: 'create-note', component: CreateNoteComponent},
  {path: 'note-list', component: NoteListComponent},
  {path: 'update/:id', component: UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
