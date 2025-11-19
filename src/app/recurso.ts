export class Recurso {
    constructor(
        public idRecurso: number,
        public nombre: string,
        public tipo: string,
        public unidades: number,
        public descripcion: string,
        public precio: number,
    ) {}
}
