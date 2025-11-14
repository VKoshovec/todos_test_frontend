import React from 'react';
import css from './card.module.scss';
import { ReactComponent as Editsvg } from '../../icons/edit-3-svgrepo-com.svg';
import { ReactComponent as Delsvg } from '../../icons/folder-del-svgrepo-com.svg';

const Card = () => {
   
   return (

     <div className={ css.cardFrame }>

        <h2 className={ css.cardTitle }>Card123</h2>
        <p>knciniowncinw</p>
        <div className={ css.cardControls }>
          <button type='button'className={ css.cardBtn }><Editsvg className={ css.cardEdit }/></button>
          <button type='button'className={ css.cardBtn }><Delsvg className={ css.cardEdit }/></button>
        </div>
     </div>

   );

 };

export default Card;