import React from 'react';
import css from './boardform.module.scss';

 import {
   Formik,
   Form,
   Field
 } from 'formik';

 interface MyFormValues {
   firstName: string;
 }

const Boardform = () => {
   const initialValues: MyFormValues = { firstName: '' };

   return (

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

           <label htmlFor="firstName"></label>

           <Field id="firstName" name="firstName" placeholder="Board Name" className={ css.formInput }/>

           <button type="button" className={ css.formButton }>Find</button>

         </Form>

       </Formik>

     </div>

   );

 };

export default Boardform;
