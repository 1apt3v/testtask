import React from 'react';


const SortForms = ({ sortValue, setSortValue }) => {
    return (
        <div className='sorts'>
            {/* <label>По цене</label> */}
            <select onChange={(e) => setSortValue(e.target.value)} value={sortValue}>
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