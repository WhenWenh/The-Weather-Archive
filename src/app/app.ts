import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly message = signal('');
  private readonly cities = ['Vienna', 'Berlin', 'Paris', 'London', 'Peking'];

  search(event: Event, query: string): void {
    event.preventDefault();

    const normalizedQuery = query.trim().toLowerCase();
    const city = this.cities.find(
      (name) => name.toLowerCase() === normalizedQuery,
    );

    this.message.set(
      city ? `Selected city: ${city}` : 'City not found. Try Vienna or Berlin.',
    );
  }
}