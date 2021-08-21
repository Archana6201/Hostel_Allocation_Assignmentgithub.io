import firebase from "./firebase";

//const EmailProvider = new firebase.auth.EmailProvider();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const mailProvider = new firebase.auth.MailAuthProvider();