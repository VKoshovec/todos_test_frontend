import React from 'react';
import css from './cardform.module.scss';

 import {
   Formik,
   Form,
   Field
 } from 'formik';

 interface MyFormValues {
   cardName: string;
   cardDesk: string;
   cardStatus: string;
 }

const Cardform = () => {

   const visible:boolean = false;
   const initialValues: MyFormValues = { cardName: '', cardDesk: '', cardStatus: '' };

   return (
     visible?
     <div className={ css.boardFrame }>
       <Formik

         initialValues={initialValues}

         onSubmit={(values, actions) => {

           console.log({ values, actions });
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);

         }}

       >

         <Form className={ css.boardForm }>
           
           <h1 className={ css.cardH }> Card form </h1>

           <label htmlFor="cardName" className={ css.formLabel } >Card name</label>
           <Field id="cardName" name="cardName" placeholder="Card name" className={ css.formInput }/>

           <label htmlFor="cardDesk" className={ css.formLabel }>Deskription</label>
           <Field id="cardDesk" name="cardDesk" placeholder="Deskription" type="text" className={ css.formInputDFesk }/>

           <label htmlFor="cardStatus" className={ css.formLabel }>Status</label>
           <Field component="select" id="cardStatus" name="cardStatus" className={ css.formInput }>
            <option value="1">To do</option>
            <option value="2">Doing</option>
            <option value="3">Done</option>
           </Field> 

           <button type="button" className={ css.formButton }>Ok</button>

         </Form>

       </Formik>

     </div>
     :<></>
   );

 };

export default Cardform;
