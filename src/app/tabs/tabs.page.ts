import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';
import { DataService } from '../services/DataService';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {}