class CustomError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    this.message = message;
  }
}
module.exports = CustomError;
// class CustomError extends Error {
//     status: number;

//     message: string;

//     constructor(status:number, message:string) {
//       super(message);
//       this.status = status;
//       this.message = message;
//     }
//   }

//   export default CustomError;
