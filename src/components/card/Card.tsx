import React from 'react';
import css from './card.module.scss';
import PropTypes from 'prop-types';
import { ReactComponent as Editsvg } from '../../icons/edit-3-svgrepo-com.svg';
import { ReactComponent as Delsvg } from '../../icons/folder-del-svgrepo-com.svg';



function Card({ nameb, desc }:Props){

  return (
    <div className={css.cardFrame}>

      <h2 className={css.cardTitle}>{nameb}</h2>
      {!desc && <p>{desc}</p>}
      <div className={css.cardControls}>
        <button type='button' className={css.cardBtn}><Editsvg className={css.cardEdit} /></button>
        <button type='button' className={css.cardBtn}><Delsvg className={css.cardEdit} /></button>
      </div>
    </div>
  );

};

type Props = {
  nameb: string;
  desc: string;
};

export default Card;