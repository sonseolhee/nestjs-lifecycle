import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST }) //singleton : Each Request comes into the system will get 'new' request_service
export class RequestService {
  private userId: string;

  setUserId(userId: string) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }
}
