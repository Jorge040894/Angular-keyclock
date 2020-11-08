import { Component } from '@angular/core';
import { AuthConfig, NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { LoginService } from './services/login.service';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cursos';

  username: string;
  isLogged: boolean;
  isAdmin : boolean;

  constructor(private loginService: LoginService
    ,private oauthService: OAuthService, private messageService: MessageService) { 
this.configure();
    
      }
      authConfig: AuthConfig = {
    
        issuer: 'http://localhost:8180/auth/realms/seguridad',
        redirectUri: window.location.origin,
        clientId: 'seguridad-frontend',
        responseType: 'code',
        scope: 'openid profile email offline_access',
        showDebugInformation: true,
      };
      configure():void {
        this.oauthService.configure(this.authConfig);
        this.oauthService.tokenValidationHandler = new NullValidationHandler();
        this.oauthService.setupAutomaticSilentRefresh();
        this.oauthService.loadDiscoveryDocument().then(()=> this.oauthService.tryLogin())
        .then(()=> {
          if (this.oauthService.getIdentityClaims()){
            this.isLogged = this.loginService.getIsLogged();
            this.isAdmin = this.loginService.getIsAdmin();
            this.username = this.loginService.getUsername();
            this.messageService.sendMessage(this.loginService.getUsername());
          }
        });
      }
     
}
