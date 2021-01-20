import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  paramSubscription: Subscription
  constructor(private serversService: ServersService, private route: ActivatedRoute,
  private router: Router) { }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'}); //to which route you navigate relatively
  }

  ngOnInit() {
    const id = +this.route.snapshot.params['id']; //+ converts string to number
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params: Param) => {
        this.server = this.serversService.getServer(+params['id']); //updates id with new server
      }
    )
  }

}
