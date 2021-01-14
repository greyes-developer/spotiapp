import { Component } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [],
})
export class HomeComponent {
  newReleases: any[] = [];
  loading: boolean;
  error = false;
  errMsg: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases().subscribe((data: any) => {
        this.loading = false;
        this.error = false;

        this.newReleases = data;
      },
      (err) => {
        this.loading = false;
        this.error = true;
        this.errMsg = err.error.error.message;
      }
    );
  }
}
