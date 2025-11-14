import React from 'react';
import css from './card.module.scss';

const Card = () => {
   
   return (

     <div className={ css.cardFrame }>

         <h2 className={ css.cardTitle }>Card123</h2>
        <p>knciniowncinw</p>
        <button type='button'>Change</button>
        <button type='button'>Del</button>
     </div>

   );

 };

export default Card;