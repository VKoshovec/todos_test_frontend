import React from 'react';
import css from './boardaddbtn.module.scss';
import { ReactComponent as Addsvg } from '../../icons/add-folder-svgrepo-com.svg';

const Boardaddbtn = () => {
   
   return (

     <div className={ css.cardFrame }>
          <button type='button'className={ css.cardBtn }><Addsvg className={ css.cardEdit }/></button>
     </div>

   );

 };

 export default Boardaddbtn;