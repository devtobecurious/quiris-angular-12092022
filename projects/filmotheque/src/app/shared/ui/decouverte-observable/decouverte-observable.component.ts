import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'melodie-decouverte-observable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './decouverte-observable.component.html',
  styleUrls: ['./decouverte-observable.component.css']
})
export class DecouverteObservableComponent implements OnInit, OnDestroy {

  constructor() { }


  ngOnInit(): void {
    console.info('-----------------------------------');

    const observable$ = new Observable(subscriber => {
      console.info('OBSERVABLE - START');

      subscriber.next('voici le premier pdf');
      subscriber.next('voici le second pdf');

      subscriber.complete();
      setInterval(() => {
        subscriber.next('tick');
        console.info('tick aussi ?');
      }, 100);

      console.info('OBSERVABLE - END');
    });

    const callback = (item: any) => console.info(item);
    const callbackComplete = () => console.info('this is the end');

    const newObs$ = observable$.pipe(
      map(item => item + ' !!!')
    );

    const subscription = newObs$.subscribe(
      callback,
      err => { },
      callbackComplete
    );

    setTimeout(() => {
      subscription.unsubscribe();
    }, 1000);

    console.info('####################################');
  }

  ngOnDestroy(): void {

  }
}
