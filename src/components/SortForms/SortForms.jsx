import React from 'react';
import { useForm, SubmitHandler, useFormState } from "react-hook-form"

export function Select({ register, options, name, ...rest }) {
    return (
        <select {...register(name)} {...rest}>
            {options.map((value) => (
                <option value={value}>{value}</option>
            ))}
        </select>
    );
}

const SortForms = ({ options }) => {
    const { register, handleSubmit, watch, formState: { errors }, control } = useForm()
    return (
        <div className='sorts'>
            {/* <label>По цене</label> */}
            <select {...register('sort')}>
                <option value="" selected disabled hidden>Выбрать</option>
                <option value={"price_up"}>Сначала дорогие</option>
                <option value={"price_down"}>Сначала недорогие</option>
                <option value={"area_total_up"}>Сначала просторные</option>
                <option value={"floor_up"}>Сначала высокие этажи</option>
            </select>
        </div>
    );
};

export default SortForms;