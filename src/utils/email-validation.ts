export interface IEmailValidation {
  validateEmail(email: string): boolean;
}

export class EmailValidation implements IEmailValidation {
  validateEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
}
