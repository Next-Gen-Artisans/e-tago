import { Injectable } from '@angular/core';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore, addDoc, collection } from 'firebase/firestore';
import { environment } from '../environments/environment'; // Adjust this path as necessary

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app: FirebaseApp;
  private firestore: Firestore;

  constructor() {
    this.app = initializeApp(environment.firebaseConfig); // Initialize Firebase
    this.firestore = getFirestore(this.app);             // Initialize Firestore
  }

  // Method to add a document to a Firestore collection
  async addDocument(collectionPath: string, data: any): Promise<void> {
    try {
      await addDoc(collection(this.firestore, collectionPath), data);
    } catch (error) {
      console.error("Error adding document to Firestore: ", error);
      throw error; // Rethrow the error if you want to handle it in the component
    }
  }
}
