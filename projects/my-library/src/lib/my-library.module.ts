import { NgModule } from '@angular/core';
import { MyLibraryComponent } from './my-library.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    MyLibraryComponent,
  ],
  imports: [
    HeaderComponent,
    TableComponent
  ],
  exports: [
    MyLibraryComponent,
    HeaderComponent,
    TableComponent
  ]
})
export class MyLibraryModule { }
