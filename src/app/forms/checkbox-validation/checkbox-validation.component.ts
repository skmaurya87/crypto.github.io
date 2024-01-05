import { Component, OnInit} from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-checkbox-validation',
  templateUrl: './checkbox-validation.component.html',
  styleUrls: ['./checkbox-validation.component.css'],
  providers: [MessageService]
})
export class CheckboxValidationComponent {

  userform: FormGroup;

  submitted: boolean;

  genders: any;

  description: string;

  constructor(private fb: FormBuilder, private messageService: MessageService) {}

  ngOnInit() {
      this.userform = this.fb.group({
          'firstname': new FormControl('', Validators.required),
          'lastname': new FormControl('', Validators.required),
          'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
          'description': new FormControl(''),
          'gender': new FormControl('', Validators.required)
      });

      this.genders = [];
      this.genders.push({label:'Select Gender', value:''});
      this.genders.push({label:'Male', value:'Male'});
      this.genders.push({label:'Female', value:'Female'});
  }

  onSubmit(value: string) {
      this.submitted = true;
      this.messageService.add({severity:'info', summary:'Success', detail:'Form Submitted'});
  }

  get diagnostic() { return JSON.stringify(this.userform.value); }

  onReset() {
    this.submitted = false;
    this.userform.reset();
}

}
