import { GithubServiceProvider as Git} from './../../providers/github-service/github.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../medels/user.interface";
import { Repository } from './../../medels/repository.interface';

/**
 * Generated class for the ProfileSearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-search-result',
  templateUrl: 'profile-search-result.html',
})
export class ProfileSearchResultPage {
  
  username: string;
  user: User;
  repositories: Repository[];

  constructor(private github:Git,private navCtrl: NavController, private navParams: NavParams) {
  }

  getUserInformation():void {
    this.github.mockGetUserInformation(this.username).subscribe((data: User) => this.user = data);
    this.github.mockGetRepositoryInformation(this.username).subscribe((data: Repository[])=> this.repositories = data);
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    if(this.username) {
      this.getUserInformation();
    }
  }

}
