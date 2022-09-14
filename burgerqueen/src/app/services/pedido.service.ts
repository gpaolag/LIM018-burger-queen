import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection } from '@firebase/firestore';
import { Orden } from '../components/pedidos/orden';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private firestore : Firestore) { }

  addOrden(orden : Orden) {
    const ordenRef = collection(this.firestore, 'ordens')
    return addDoc(ordenRef, orden);
  }

  getOrders():Observable<Orden[]>{
    const ordenRef = collection(this.firestore, 'ordens');
    return collectionData(ordenRef, {idField: 'id'}) as Observable<Orden[]>;
  }
}
