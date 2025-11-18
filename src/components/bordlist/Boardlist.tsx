import React from 'react';
import css from './boardlist.module.scss';
import Card from '../card/Card';
import Board from '../bord/Board';
import Boardaddbtn from '../boardaddbtn/Boardaddbtn';
import Loader from '../loader/Loader';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from '../../redux/operations'; 
import { AppDispatch } from '../../redux/store';
import { selectAllBoards, selectCurrentBoard, selectTasksIsLoading } from '../../redux/selectors';

const BoardList = () => {
   
  const dispatch:AppDispatch = useDispatch();
  
  useEffect (()=>{
    dispatch(fetchTasks());
  },[dispatch]);
 
  const currentBoardId = useSelector(selectCurrentBoard);
  const boards = useSelector(selectAllBoards);
  const isloading = useSelector(selectTasksIsLoading);

   return (
    <>
      <Loader visible={ isloading }/>
      {Object.keys(currentBoardId).length === 0?
      <div className={ css.boardFrame }>
      <ul>
        {boards.map((el:any)=>{
           return <li key={ el._id }>
            <Card nameb={el.name} desc={''} />
            </li> 
        })}
      </ul>
      <Boardaddbtn/> 
     </div>
     :<Board/>}
    </> 
  );

 };

export default BoardList;
