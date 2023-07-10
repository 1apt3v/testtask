import React from 'react';
import { useForm, SubmitHandler, useFormState } from "react-hook-form"
import Button from 'react-bootstrap/Button';




const FiltersForms = ({ setFiltersValue, totalHouses }) => {
    const { register, handleSubmit, watch, formState: { errors }, control } = useForm()
    const { dirtyFields } = useFormState({ control });

    const [fullFilters, setFullFilters] = React.useState(false)

    const onSubmit = (data) => {
        const arrDirtyFields = Object.keys(dirtyFields)
        let newObj = {}
        for(let i = 0; i < arrDirtyFields.length; i++) {
            newObj[arrDirtyFields[i]] = data[arrDirtyFields[i]]
        }

        setFiltersValue(newObj)
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='form__filters' >
                <div className='main__filters'>
                    <span>Цена</span>
                    <div className='filters__from__to'>
                        <input className='inputComponent' defaultValue="" placeholder='От' {...register("priceFrom")} />
                        <input className='inputComponent' defaultValue="" placeholder='До' {...register("priceTo")} />
                    </div>

                    <span>Количество комнат</span>
                    <div className='filters__from__to'>
                        <input className='inputComponent' defaultValue="" placeholder='От' {...register("numberOfRoomsFrom")} />
                        <input className='inputComponent' defaultValue="" placeholder='До' {...register("numberOfRoomsTo")} />
                    </div>

                    <span>Общая площадь</span>
                    <div className='filters__from__to'>
                        <input className='inputComponent' defaultValue="" placeholder='От' {...register("totalAreaFrom")} />
                        <input className='inputComponent' defaultValue="" placeholder='До' {...register("totalAreaTo")} />
                    </div>

                </div>

                <div className='secondary__filters' style={fullFilters ? { display: 'flex' } : { display: 'none' }}>

                    <span>Этаж</span>
                    <div className='filters__from__to'>
                        <input className='inputComponent' defaultValue="" placeholder='От' {...register("floorFrom")} />
                        <input className='inputComponent' defaultValue="" placeholder='До' {...register("floorTo")} />
                    </div>


                    <span>Площадь кухни</span>
                    <div className='filters__from__to'>
                        <input className='inputComponent' defaultValue="" placeholder='От' {...register("kitchenAreaFrom")} />
                        <input className='inputComponent' defaultValue="" placeholder='До' {...register("kitchenAreaTo")} />
                    </div>

                    <span>Жилая площадь</span>
                    <div className='filters__from__to'>
                        <input className='inputComponent' defaultValue="" placeholder='От' {...register("livingAreaFrom")} />
                        <input className='inputComponent' defaultValue="" placeholder='До' {...register("livingAreaTo")} />
                    </div>

                </div>


                <button className='' onClick={() => setFullFilters(!fullFilters)}>{!fullFilters ? '\\/' : '/\\'} Расширенный поиск</button>

                {/* <input className='inputComponent' {...register("exampleRequired", { required: true })} /> */}

                {/* {errors.exampleRequired && <span>This field is required</span>} */}

                <div className='found__objects'>
                    <span>Всего найдено: {totalHouses} объекта</span>
                </div>

                <input type="submit" className='send__button__filters' />



            </form>




            {/* <div className='input__wrapper'>
                <span>Цена</span>
                <div className='input__wrapper__price'>
                    <InputComponent placeholder='От' />
                    <InputComponent placeholder='До' />
                </div>
            </div>
            <div className='input__wrapper'>
                <span>Количество комнат</span>
                <InputComponent placeholder='Количество комнат' />
            </div>
            <div className='input__wrapper'>
                <span>Общая площадь</span>
                <InputComponent placeholder='Общая площадь' />
            </div>


            <div className='secondary__filters' style={fullFilters ? { display: 'block' } : { display: 'none' }}>
                <div className='input__wrapper'>
                    <span>Этаж</span>
                    <InputComponent placeholder='Этаж' />
                </div>
                <div className='input__wrapper'>
                    <span>Площадь кухни</span>
                    <InputComponent placeholder='Площадь кухни' />
                </div>
                <div className='input__wrapper'>
                    <span>Жилая площадь</span>
                    <InputComponent placeholder='Жилая площадь' />
                </div>
            </div> */}
        </>
    );
};

export default FiltersForms;