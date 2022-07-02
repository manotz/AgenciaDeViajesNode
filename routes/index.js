import express from "express";
import { paginaInicio,
         paginaNosotros,
         paginaTestimoniales,
         paginaViajes,
         paginaDetalleViaje } from "../ controllers/paginasController.js";

import { guardarTestimonial } from "../ controllers/testimonialController.js";


const router= express.Router();



router.get('/', paginaInicio );

router.get('/nosotros',paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales );
router.post('/testimoniales', guardarTestimonial);



export default router;


//pasar datos a una vista 

// router.get('/nosotros', (req, res) => {  //req - peticion que estamos enviando : res - lo que express nos responde
    
//     const viajes= 'viaje a Alemania';
    
//     res.render('nosotros',{
//         viajes
//     });
// });

