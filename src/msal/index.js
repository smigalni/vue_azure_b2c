import * as Msal from 'msal'
import config from '../config'

export default class AuthService {
  constructor() {
    this.applicationConfig = {
      clientID: config.clientid,
      authority: config.authority
    }
    this.app = new Msal.UserAgentApplication(
      this.applicationConfig.clientID,
      this.applicationConfig.authority)
  }

  login() {
    this.app.loginPopup().then(
      token => {
        console.log("JWT token " + token)
      },
      error => {
        console.log("Login error " + error)
      }
    );
  }

  logout() {
    this.app._user = null
    this.app.logout()
  }

  getUser() {
    return this.app.getUser()
  }
}
