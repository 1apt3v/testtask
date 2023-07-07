import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import Button from 'react-bootstrap/Button';




const FiltersForms = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const [fullFilters, setFullFilters] = React.useState(false)

    const onSubmit = (data) => console.log(data)

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='form__filters' >
                <div className='main__filters'>
                    <span>Цена</span>
                    <div className='filters__price'>
                        <input className='inputComponent' defaultValue="" placeholder='От' {...register("priceFrom")} />
                        <input className='inputComponent' defaultValue="" placeholder='До' {...register("priceTo")} />
                    </div>

                    <span>Количество комнат</span>
                    <input className='inputComponent' defaultValue="" {...register("numberOfRooms")} />
                    <span>Общая площадь</span>
                    <input className='inputComponent' defaultValue="" {...register("totalArea")} />
                </div>

                <div className='secondary__filters' style={fullFilters ? { display: 'flex' } : { display: 'none' }}>
                    <span>Этаж</span>
                    <input className='inputComponent' defaultValue="" {...register("floor")} />
                    <span>Площадь кухни</span>
                    <input className='inputComponent' defaultValue="" {...register("kitchenArea")} />
                    <span>Жилая площадь</span>
                    <input className='inputComponent' defaultValue="" {...register("livingArea")} />
                </div>


                <button className='' onClick={() => setFullFilters(!fullFilters)}>{!fullFilters ? '\\/' : '/\\'} Расширенный поиск</button>

                {/* <input className='inputComponent' {...register("exampleRequired", { required: true })} /> */}

                {errors.exampleRequired && <span>This field is required</span>}

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