import React from 'react';
import css from './board.module.scss';
import Card from '../card/Card';
import Boardaddbtn from '../boardaddbtn/Boardaddbtn';

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
            <td className={ css.boardTableLines }>
              <Boardaddbtn/>
            </td>
            <td className={ css.boardTableLines }>
            </td>
            <td className={ css.boardTableLines }>
            </td>
          </tr>
        </tbody>
       </table>
     </div>

   );

 };

export default Board;
