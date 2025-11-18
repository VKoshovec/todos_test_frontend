import React from 'react';
import css from './loader.module.scss';
import { Oval } from 'react-loader-spinner';


const Loader = ({visible}:Props) => {

   return (
    visible?<div className={ css.loaderFrame}>
     <Oval
      height={80}
      width={80}
      color="#fff1a4ff"
      visible={true}
      ariaLabel="loading..."
      secondaryColor="#ff6016ff"
      strokeWidth={2}
      strokeWidthSecondary={2}
     />
    </div>:<></>
   );

 };

 type Props = {
   visible:boolean,
};
export default Loader;