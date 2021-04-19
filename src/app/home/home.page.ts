import { Component } from '@angular/core';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private safariViewController: SafariViewController) {}

  show() {
    this.safariViewController
      .show({
        url: 'http://ionic.io',
        hidden: false,
        animated: false,
        transition: 'curl',
        enterReaderModeIfAvailable: true,
        tintColor: '#ff0000'
      })
      .subscribe(
        (result: any) => {
          if (result.event === 'opened') console.log('Opened');
          else if (result.event === 'loaded') console.log('Loaded');
          else if (result.event === 'closed') console.log('Closed');
        },
        (error: any) => console.error(error)
      );

    setTimeout(async () => {
      await this.safariViewController.hide();
      alert('the thingie was closed');
    }, 2500);
  }
}
