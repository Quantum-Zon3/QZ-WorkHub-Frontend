import { Usuario } from './usuario';
import { Sala } from './sala';
//import { Notificacion } from './notificacion';
//import { Reporte } from './reporte';
import { RecursoReservado } from './recurso-reservado';
//import { Pago } from './pago';
export class Reserva {
    constructor(
    public idReserva: number,
    public fechaInicio: Date,
    public fechaFin: Date,
    public montoTotal: number,
    public cantidadVisitantes: number,
    public usuario: Usuario,
    public sala: Sala,
   // public notificaciones: Notificacion[] = [],
    //public reportes: Reporte[] = [],
    public recursosReservados: RecursoReservado[] = [],
  //  public pagos: Pago
){}
    
}
