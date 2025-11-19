import { Rol } from "./rol";
import { Usuario } from "./usuario";

export class RolAsignado {
    constructor(
        public id: number,
        public fechaAsignada: Date,
        public rol: Rol,
        public usuario: Usuario
    ) {}
}
