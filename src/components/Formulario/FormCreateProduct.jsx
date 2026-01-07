import React from 'react';
import {Formik, Form, Field, ErrorMessage, validateYupSchema}from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import FormBs from 'react-bootstrap/Form';
import './Formulario.css';
import { axiosInstance } from '../../services/axios.config';
import { Description } from '@mui/icons-material';

const FormCreateProduct = () => {
    /*Valores iniciales*/
    const initialValues = {
        name: '', /*Comillas simples son para variales tipo string*/
        description: '',
        image: '',
        stock: 0,
        price: 0,
    }

    /*Validación de esquema*/
    const validationSchema = Yup.object().shape({
        name: Yup.string()
                 .min(4, 'nombre demasiado corto')
                 .max(40, 'nombre demasiado largo')
                 .required('Campo obligatorio'),
        
        description: Yup.string()
                        .min(10, 'nombre demasiado corto')
                        .max(150, 'nombre demasiado largo')
                        .required('Campo obligatorio'),
        
        image: Yup.string().required('El campo es obligatorio'),

        stock: Yup.number().required('Campo obligatorio'),

        price: Yup.number().required('Campo obligatorio'),
    })
    
    return (
        <div className='container'>
        <>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, {isSubmitting})=>{
                console.log(values);
                axiosInstance.post('/',values)
                .then(r => {
                    if (r.status == 201){
                        console.log(r)
                        setSubmitting(false)
                    }else{
                        throw new Error(`[${r.status}]Error en la solicitud`)
                    }
                    
                })
                .catch(err => console.log(err))
                
            }}
        >
                {
                    ({ values, isSubmitting, errors, touched }) => (
                        <Form>
                            <FormBs.Group className='mb-3'>
                                <label htmlFor='name'>Nombre del Producto</label>
                                <Field id='name' type='text' placeholder='Buzo' name='name' className='form-control field-input'/>
                                {
                                    errors.name && touched.name &&(
                                        <ErrorMessage name='name' component='div'></ErrorMessage>

                                    )
                                }
                            </FormBs.Group>
                            <FormBs.Group className='mb-3'>
                                <label htmlFor='description'> Descripcion </label>
                                <Field id='description' type='text' placeholder='Descrpción del producto' name='description'className='form-control field-input'/>
                                {
                                    errors.description && touched.description && ( <ErrorMessage name='description' component='div'></ErrorMessage>)
                                }
                            </FormBs.Group>
                            <FormBs.Group className='mb-3'>
                                <label htmlFor='image'> Imagen </label>
                                <Field id='image' type='text' placeholder='imagen' name='image' className='form-control field-input'/>
                                {
                                    errors.description && touched.description && ( <ErrorMessage name='image' component='div'></ErrorMessage>)
                                }
                            </FormBs.Group>
                            <FormBs.Group className='mb-3'>
                                <label htmlFor='stock'> Stock </label>
                                <Field id='stock' type='number' placeholder='stock' name='stock' className='form-control field-input'/>
                                {
                                    errors.description && touched.description && ( <ErrorMessage name='stock' component='div'></ErrorMessage>)   
                                }
                            </FormBs.Group>
                            <FormBs.Group className='mb-3'>
                                <label htmlFor='price'> Precio </label>
                                <Field id='price' type='number' placeholder='price' name='price' className='form-control field-input'/>
                                {
                                    errors.description && touched.description && ( <ErrorMessage name='price' component='div'></ErrorMessage>)   
                                }
                            </FormBs.Group>

                            <Button className='btn btn-primary' type="submit"> Cargar Producto </Button>
                            {
                                isSubmitting ? (<p> Enviando producto </p>) : null
                            }
                        </Form>
                    )
                }





        </Formik>
        
        
        
        
        
        </>
        </div>
    );
}

export default FormCreateProduct;