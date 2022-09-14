import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from '@firebase/firestore';
import { Orden } from '../components/pedidos/orden';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private firestore : Firestore) { }

  addOrden(orden : Orden) {
    const ordenRef = collection(this.firestore, 'ordens')
    return addDoc(ordenRef, orden);
  }
}
