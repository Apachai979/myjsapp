'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' pattern='[A-Za-zА-Яа-яЁё]{3,}'>
            </input>
            <input type="submit" />
        </form>
    )
}