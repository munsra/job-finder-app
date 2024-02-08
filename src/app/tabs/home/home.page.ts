import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonContent, IonTitle, IonButtons, IonIcon, IonThumbnail } from '@ionic/angular/standalone'
import { addIcons } from 'ionicons';
import { appsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButtons, IonTitle, IonHeader, IonToolbar, IonContent, IonButtons, IonThumbnail]
})
export class HomePage implements OnInit {

  constructor() { 
    addIcons({ appsOutline })
  }

  ngOnInit() {
  }

}
