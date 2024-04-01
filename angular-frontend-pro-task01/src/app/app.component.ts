import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { ServiceService } from './shared/service.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import { error } from 'console';
import { Userdetail } from './shared/userdetail.model';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  usersList!: Userdetail[];
  

  displayedColumns: string[] = ['name', 'age','category', 'occupation','phone_no','email','action'];
  dataSource!: 

  MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private getCandidatesSubscription: Subscription | undefined;
  
  constructor(private _dialog: MatDialog, private _service: ServiceService){
  }

  ngOnInit(): void {
    this.getUserList();
  }

  ngOnDestroy(): void {
    if (this.getCandidatesSubscription) {
      this.getCandidatesSubscription.unsubscribe();
    }
  }

  openAddEdit() {
    const dialogRef = this._dialog.open(AddEditUserComponent);
    dialogRef.componentInstance.userAdded.subscribe((val: boolean) => {
      if (val) {
        this.getUserList();
      }
    });
    dialogRef.componentInstance.userUpdate.subscribe((val: boolean) => {
      if (val) {
        this.getUserList();
      }
    });
  }

  getUserList() {
    this._service.getUserList().subscribe({
      next: (res) => {
        this.usersList = res;
        this.dataSource = new MatTableDataSource<Userdetail>(this.usersList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.error('Error getting User list:', err);
      },
    });
  }



  updateUser(id: number, data: any) {
    this._service.updateUser(id, data).subscribe({
      next: (res) => {
        console.log('Updated User:', res);
      
        this.getUserList(); 
      },
      error: (err) => {
        console.error('Error updating User:', err);
      },
    });
  }

  deleteUser(id: number) {
    const confirmation = confirm('Are you Sure ?');
    if (confirmation) {
    this._service.deleteUser(id).subscribe({
      next: (res) => {
        // this._service.openSnackBar('Candidate deleted!', 'done');
        this.getUserList();
      },
      error: (err) => {
        console.error('Error deleting candidate:', err);
      },
    });
  }
  }


  editUser(data: any) {
    const dialogRef = this._dialog.open(AddEditUserComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getUserList();
        }
      },
    });
  }


//   editUser(data:any){
//     const dialogRef = this._dialog.open(AddEditUserComponent,{
//     data,
//   });
//   dialogRef.afterClosed().subscribe({
//     next:(val)=>{
//       if(val){
//         this.getUserList();
//       }
//     }
//   });
//  }
//   getUserList(){
//     this.service.getAllUsers().subscribe({
//       next:(res)=>{
//        this.dataSource = new MatTableDataSource(res);
//        this.dataSource.sort = this.sort;
//        this.dataSource.paginator = this.paginator;
//       },
//       error:(err)=>{
//         alert(err);
//       }
//     })
//   }
//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();
//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }

//    deleteUser(id:number){
//     this.service.deleteUser(id).subscribe({
//       next:(res)=>{
//       alert("user deleted successfull 😐")
//       this.getUserList();
//       },
//       error: console.log,
//     })
//    }
// }
}