import React from 'react';
import css from './board.module.scss';
import Card from '../card/Card';

const Board = () => {
   
   return (

     <div className={ css.boardFrame }>
       <table className={ css.boardTable }>
        <thead>
          <tr>
            <th className={ css.boardTableLinesHead }><p>ToDo</p></th>      
            <th className={ css.boardTableLinesHead }><p>Doing...</p></th>
            <th className={ css.boardTableLinesHead }><p>Done!</p></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={ css.boardTableLines }>1
               <Card/>
            </td>
            <td className={ css.boardTableLines }>2</td>
            <td>3</td>
          </tr>
        </tbody>
       </table>
     </div>

   );

 };

export default Board;
