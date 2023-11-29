import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Nota } from '../domain/nota';

@Injectable({
  providedIn: 'root'
})
export class NotasFirebaseService {

  private path = 'notas'

  notasRef: AngularFirestoreCollection<any>

  constructor(private db: AngularFirestore) { 
    this.notasRef = db.collection(this.path)

    this.notasRef.valueChanges().subscribe(data => {
      console.log(data)
    })
  }

  getAll(){
    return this.notasRef.valueChanges()
  }

  eliminarCampo(uid: string) {
    this.db.doc(this.path+'/'+uid).delete()
      .then(() => {
        console.log('Campo eliminado correctamente');
      })
      .catch(error => {
        console.error('Error al eliminar campo:', error);
      });
  }


  save(nota: Nota){
    if(nota.uid){
      return this.notasRef.doc(nota.uid).update(Object.assign({}, nota))
    }else{
      nota.uid = nota.etiqueta
      console.log('persona', nota)
      return this.notasRef.doc(nota.uid).set(Object.assign({}, nota))
    }
  }

  getNota(uid:string){
    console.log("uid", uid)
    return this.db.doc(this.path+'/'+uid).valueChanges()
  }
}
