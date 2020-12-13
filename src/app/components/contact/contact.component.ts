import { Component, OnInit } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  time = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  constructor() { }

  nums = of(1, 2, 3, 4, 5, 6).pipe(
    filter((n: number) => n % 2 != 0),
    map((n: number) => n * n)
  );

  ngOnInit(): void {
    this.nums.subscribe(x => console.log(x))
  }
}
