import { Injectable } from '@angular/core';
import { Firestore, collectionData, doc, updateDoc} from '@angular/fire/firestore';
import { addDoc, collection } from '@firebase/firestore';
import { Orden } from '../components/pedidos/orden';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private firestore : Firestore) { }

  async addOrden(orden : Orden) {
    const ordenRef = collection(this.firestore, 'ordens')
    const idOrder = await addDoc(ordenRef, orden);
    orden.id = idOrder.id;
    
  }

  getOrders():Observable<Orden[]>{
    const ordenRef = collection(this.firestore, 'ordens');
    return collectionData(ordenRef, {idField: 'id'}) as Observable<Orden[]>;
  }
  // Inicio de preparacion
  updateStatusOrder(order: Orden, statusValue: string, begin:string):Promise<any>{
    const docRef = doc(this.firestore, "ordens", String(order.id));    
    return updateDoc(docRef,{status: statusValue, beginPreparation:begin})
  }

  // Fin de preparacion
  updateStatusEnd(order: Orden, statusValue: string, end:string):Promise<any>{
    const docRef = doc(this.firestore, "ordens", String(order.id));    
    return updateDoc(docRef,{status: statusValue, endPreparation:end})
  }

  // Entrega de orden
  updateStatusDeliver(order: Orden, statusValue: string, deliver:string):Promise<any>{
    const docRef = doc(this.firestore, "ordens", String(order.id));    
    return updateDoc(docRef,{status: statusValue, dateDeliver:deliver})
  }

  // Cancelacion de un pedido
  updateStatusCancel(order: Orden, statusValue: string, cancel:string):Promise<any>{
    const docRef = doc(this.firestore, "ordens", String(order.id));    
    return updateDoc(docRef,{status: statusValue, dateCancel:cancel})
  }
}
