import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../shared/service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map } from 'rxjs';
import { CoreService } from '../shared/core.service';


@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {
  @Output() userAdded = new EventEmitter<boolean>();
  @Output() userUpdate = new EventEmitter<boolean>();


  editdata: any;
  userForm: FormGroup;
  occupationList: string[] = ['Job', 'Student', 'Business'];
  category: string[] = ['General', 'OBC', 'SC', 'ST']

  phoneDuplicateError: boolean = false;
  emailDuplicateError: boolean = false;

  showJobDetails: boolean = false;
  showBusinessDetails: boolean = false;
  student: boolean = false;
  candidateAdded: any;
  candidateUpdated: any;



  constructor(private fb: FormBuilder, private service: ServiceService, private dialogRef: MatDialogRef<AddEditUserComponent>,
    private _coreService: CoreService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      fname: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      age: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      category: ['', Validators.compose([Validators.required])],
      occupationList: ['', Validators.compose([Validators.required])],
      phone_no: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])],
      jobList: [''],
      businessList: [''],
      ctc: [''],
      exp: [''],
      No_of_employee: ['']
    });
  }
  ngOnInit(): void {
    this.userForm.patchValue(this.data);
    //this.service.refreshList();
  }

  onFormSubmit() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      if (this.data) {
        delete formData.dob;
        this.service
          .updateUser(this.data.id, formData)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('User detail updated!');
              this.candidateUpdated.emit(true);
              this.dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this.service.addUser(formData).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('User added successfully');
            this.userUpdate.emit(true);
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  };


  validatePhone(control: AbstractControl) {
    const phoneNumber = control.value;
    return this.service.isPhoneExists(phoneNumber).pipe(
      map((res: boolean) => {
        return res ? { phoneExists: true } : null;
      })
    );
  }

  validateEmail(control: AbstractControl) {
    const email = control.value;
    return this.service.isEmailExists(email).pipe(
      map((res: boolean) => {
        return res ? { emailExists: true } : null;
      })
    );
  }

  onOccupationChange(value: string) {
    this.showJobDetails = value === 'Job';
    this.showBusinessDetails = value === 'Business';
    this.student = value === 'Student';

    if (!this.showJobDetails) {
      this.userForm.get('ctc')?.reset();
      this.userForm.get('exp')?.reset();
    }

    if (!this.showBusinessDetails) {
      this.userForm.get('btype')?.reset();
      this.userForm.get('numofemp')?.reset();
    }

    if (!this.student) {
      this.userForm.get('studentDetails')?.reset();
    }
  }

}
