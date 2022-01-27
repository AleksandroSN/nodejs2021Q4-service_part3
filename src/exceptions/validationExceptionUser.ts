import { HttpException, HttpStatus } from "@nestjs/common";

export class ValidationExceptionUsers extends HttpException {
  messages: string | Record<string, any>;

  constructor(response: string | Record<string, any>) {
    super(response, HttpStatus.BAD_REQUEST);
    this.messages = response;
  }
}
