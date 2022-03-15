import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  private _lang: any;
  constructor(private route: ActivatedRoute, private translate: TranslateService) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this._lang = params['lang'];
      this.translate.setDefaultLang(this._lang);
    });
  }

}
