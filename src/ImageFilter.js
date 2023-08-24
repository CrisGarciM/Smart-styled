import React from "react";
import alimentacion from "./assets/images/alimentacion.svg";
import salud from "./assets/images/salud.svg";
import otros from "./assets/images/otros.svg";
import transporte from "./assets/images/transporte.svg";
import utilidades from "./assets/images/utilidades.svg";
import { Icon, IconTema } from "./Components/UI";


export default (type) => {
    const Images  = {
        Restaurante: <IconTema src={alimentacion} alt="Restaurante" />,
        Salud: <IconTema src={salud} alt="salud" />,
        Otros: <IconTema src={otros} alt="otros" />,
        Transporte: <IconTema src={transporte} alt="Transporte" />,
        Utilidades: <IconTema src={utilidades} alt="Utilidades" />,
        default: <IconTema src={otros} alt="otros" />,
    }
    return Images[type];
};

