import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  logged: any;
  constructor(private _http: HttpClient,
    private _router: Router) {
  }

  register(newUser) {
    return this._http.post('/register', newUser);
  }

  login(user) {
    return this._http.post('/login', user);
  }

  logout() {
    return this._http.get('/logout');
  }

  checkStatus() {
    return this._http.get('/checkStatus');
  }

  getOne(userID) {
    return this._http.get('/getOne/' + userID);
  }

  updatePersonalInfo(userID, userInfo) {
    return this._http.post('/updatePersonalInfo/' + userID, userInfo);
  }

  updatePassword(userID, userInfo) {
    return this._http.post('/updatePassword/' + userID, userInfo);
  }

  isAuthenticated() {
    let token = localStorage.getItem('access_token');
    if (token) { return true; } else { return false; }
  }

  // create a new document
  createDocument(userID) {
    return this._http.get('newDocument/' + userID);
  }

  // get one document
  getOneDocument(docID) {
    return this._http.get('/getonedocument/' + docID);
  }
  // update document title
  updateDocumentTitle(docID, data) {
    return this._http.put('/updatedocumentTitle/' + docID, data);
  }

  //adding participants to a certain document
  addParticipants(data) {
    return this._http.post('/addParticipants/' + data.docID, data.email)
  }

  getParticipants(data) {
    return this._http.get('/getParticipants/' + data)
  }

<<<<<<< HEAD
  removeParticipants(data){
    return this._http.delete('/removeParticipants/'+data.target + '/' +data.killer + '/'+data.document)
=======
  removeParticipants(data) {
    return this._http.delete('/removeParticipants/' + data.target + '/' + data.killer + '/' + data.document)
>>>>>>> ec5a4ded997cf7cfca578ff7890040c8eb8ece5a
  }

  getDocument() {
    return this._http.get('/getDocument')
  }

  //invite
  // inviteParticipants(data) {
  //   return this._http.post('/inviteParticipants', data)
  // }


}
