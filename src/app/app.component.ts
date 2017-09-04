import { Component } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/Rx'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'
  planets = []

  constructor(
    private http: Http
  ) {
    this.getPlanets()
  }

  async getPlanets() {
    for (let i = 1; i <= 10; i += 1) {
      await this.wait(1000)
      const json = this.http
        .get(`https://swapi.co/api/planets/${i}/`)
        .map(res => res.json())
        .subscribe(planet => {
          this.planets.push(planet.name)
        })
    }
  }

  async wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}
