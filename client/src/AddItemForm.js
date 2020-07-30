import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { createItem } from './API';

const AddItemForm = ({onClose}) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { register, handleSubmit } = useForm();

    const onSubmit =  async (data) => {
        try{
            setLoading(true);
            await createItem(data);
            onClose();
        } catch (error) {
            console.error(error);
            setError(error.message);
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
            { error ? <h3 className="error">{error}</h3> : null }
            <label htmlFor="title">Title: </label>
            <input name="title" required ref={register}/>
            <label htmlFor="description">Description </label>
            <textarea name="description" rows={3} ref={register}></textarea>
            <label htmlFor="dueDate">Visit Date:</label>
            <input name="dueDate" type="date" required ref={register}/>
            <label htmlFor="priority">Priority:</label>
            <input name="priority" ref={register}/>
            <button disabled={loading}>{loading ? 'Loading.. ' : 'Create entry!'}</button>
        </form>
    );
};

export default AddItemForm;