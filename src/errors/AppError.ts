export class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  // private help: "https://www.bcl-st.com.br";

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}