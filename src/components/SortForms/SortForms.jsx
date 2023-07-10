import React from 'react';
import { useForm, SubmitHandler, useFormState } from "react-hook-form"

const SortForms = ({ sortValue, setSortValue }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    console.log(sortValue)

    return (
        <div className='sorts'>
            {/* <label>По цене</label> */}
            <select {...register('sort')} onChange={(e) => setSortValue(e.target.value)} value={sortValue}>
                <option value="" disabled hidden>Выбрать</option>
                <option value={"price_up"}>Сначала дорогие</option>
                <option value={"price_down"}>Сначала недорогие</option>
                <option value={"area_total_up"}>Сначала просторные</option>
                <option value={"floor_up"}>Сначала высокие этажи</option>
            </select>
        </div>
    );
};

export default SortForms;