import React from 'react';
import css from './board.module.scss';
import Card from '../card/Card';
import Boardaddbtn from '../boardaddbtn/Boardaddbtn';

const BoardList = () => {
  
   const currentBoardId:boolean = false;

   return (
     currentBoardId?<div className={ css.boardFrame }>
      <ul>
        {<li><Card/></li>}
      </ul>
      <Boardaddbtn/> 
     </div>
     :<></>
   );

 };

export default BoardList;
