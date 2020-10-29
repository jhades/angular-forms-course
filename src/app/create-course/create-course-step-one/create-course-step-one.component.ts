import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {createPasswordStrengthValidator} from '../../validators/password-strength.validator';
import {createPromoRangeValidator} from '../../validators/date-range.validator';
import {CoursesService} from '../../services/courses.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'create-course-step-one',
  templateUrl: './create-course-step-one.component.html',
  styleUrls: ['./create-course-step-one.component.scss']
})
export class CreateCourseStepOneComponent implements OnInit {

  form: FormGroup;

  courseCategories$: Observable<any>;


  constructor(private fb: FormBuilder, private courses: CoursesService) {
    this.form = fb.group({
      title: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      adminPassword: ["", [Validators.required, Validators.minLength(8), createPasswordStrengthValidator()]],
      supportEmail: ["", [Validators.required, Validators.email]],
      category: ["BEGINNER", Validators.required],
      downloadsAllowed: [false, Validators.requiredTrue],
      releasedAt: [new Date(), Validators.required],
      longDescription: ["",[Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit() {

    this.courseCategories$ = this.courses.findCourseCategories();

  }

}
