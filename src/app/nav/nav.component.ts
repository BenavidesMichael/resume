import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DarkmodeService } from 'src/app/services/dark-mode/darkmode.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  darkModeEnabled$ = this.darkModeService.darkModeEnabled$;

  private unsubscribe$ = new Subject();

  constructor(private darkModeService: DarkmodeService) {}

  ngOnInit(): void {
    this.darkModeEnabled$.pipe(takeUntil(this.unsubscribe$));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
  }
}
