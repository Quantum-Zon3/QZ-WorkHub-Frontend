

export class RecursoReservado {
    constructor(public idRecursoReservado: number,
        public cantidad: number,
        public fechaInicio: Date,
        public fechaFin: Date,
        public montoTotal: number,
        public idRecurso: number,
        public idReserva: number,
    ){}
}
