
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experience } from './experience.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})

export class ExperienceComponent implements OnInit {
  expForm: FormGroup;
  expArray: Experience[];

  @Input() destination: number;
  @Output() formStatus: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder, private data: DataService) { }

  ngOnInit() {
    this.expArray = this.data.experiences.filter(exp => exp.destination == this.destination);
    this.expArray.sort((a, b) => b.datetime.getTime() - a.datetime.getTime());
    this.expForm = this.formBuilder.group({
      formData: this.formBuilder.group({
        name: ['', { validators: Validators.required, updateOn: 'blur' }],
        email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
        contact: ['', { validators: [Validators.required, Validators.pattern('[0-9]{10}')], updateOn: 'blur' }],
        gender: ['', Validators.required],
        experience: ['', Validators.required],
        rating: ['', Validators.required]
      })
    });
  }

  isControlInvalid(form: FormGroup, controlName: string): boolean {
    const control = form.get(controlName);
    return control.invalid && control.touched;
  }

  submitForm(): void {
    alert('Thanks for sharing your experience with us!');
    const formData = this.expForm.get('formData') as FormGroup;

    let newData = new Experience(
      this.destination,
      formData.get('name')?.value,
      formData.get('email')?.value,
      formData.get('contact')?.value,
      formData.get('gender')?.value,
      formData.get('experience')?.value,
      formData.get('rating')?.value,
      new Date()
    );

    this.expArray.unshift(newData);
    this.data.addExperience(newData);

    console.log(this.data);

    //alert(this.expArray[0].experience);

    this.expForm.patchValue({
      expArrayControl: this.expArray
    });

    this.resetFormData();
  }

  resetFormData() {
    const formData = this.expForm.get('formData') as FormGroup;
    formData.reset();
  }

  display = "none";

  openModal() {
    this.display = "block";
    this.formStatus.emit(true);
  }
  onCloseHandled() {
    this.display = "none";
    this.formStatus.emit(false);
  }

  stars(num: number): string {
    return '<i class="bi bi-star-fill"></i>'.repeat(num);
  }

  getNumbers(): number[] {
    return Array(5).fill(0).map((x, i) => i + 1);
  }

  rating(i) {
    return this.expArray.filter(exp => exp.rating == i).length
  }

  ratingbar(i) {
    let rating = (this.rating(i) / this.expArray.length) * 100;
    return rating.toString() + "%";
  }

  avgrate() {
    let avg = (this.rating(1) * 1 + this.rating(2) * 2 + this.rating(3) * 3 + this.rating(4) * 4 + this.rating(5) * 5) / this.expArray.length;
    return avg.toFixed(2);
  }



}