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
    console.log(orden.id);
    
  }

  getOrders():Observable<Orden[]>{
    const ordenRef = collection(this.firestore, 'ordens');
    return collectionData(ordenRef, {idField: 'id'}) as Observable<Orden[]>;
  }
  
  updateStatusOrder(order: Orden, statusValue: string, begin:string):Promise<any>{
    const docRef = doc(this.firestore, "ordens", String(order.id));    
    return updateDoc(docRef,{status: statusValue, beginPreparation:begin})
  }
}
