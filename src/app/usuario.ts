export class Usuario {
    constructor(public id: number,
        public nombre: string,
        public apellido: string,
        public email: string,
        public contraseña: string,
        public fechaRegistro: Date,
        public telefono: string
    ){}
}
