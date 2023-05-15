// import React from 'react';
// // import propTypes from 'prop-types';
// import { useForm } from 'react-hook-form';
// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import { FormBlock, FormHook } from './ContactForm.styled';

// export default function ContactForm(props) {
//   console.log(props);
//   const { register, handleSubmit } = useForm();
//   const [data, setData] = useState();
//   const [contact, setContact] = useState();

//   const onSubmit = data => {
//     const { name, number } = data;
//     const contact = { id: nanoid(), name, number };
//     // console.log(typeof contact);
//     setContact(contact);
//   };
//   //   const handleSubmit = data => {
//   //     const { name, number } = data;
//   //     const contact = { id: nanoid(), name, number };
//   //     setContact(contact);
//   //   };

//   return (
//     <FormBlock>
//       <FormHook onSubmit={handleSubmit(onSubmit)}>
//         <label htmlFor="name">Name:</label>
//         <input {...register('name')} />
//         <label htmlFor="number">Number:</label>
//         <input {...register('number')} />
//         <input type="submit" />
//       </FormHook>
//     </FormBlock>
//   );
// }
