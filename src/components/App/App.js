import './../../scss/stylesComponent/app.scss';
import logoEtagi from './../../img/logoeragi.svg'
import { connect, useDispatch } from "react-redux";
import { setInputValue } from "../../redux/testReducer";
import { NavLink, Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import { getHouseData, getHouseDataPage, getCountHouses, getFilteredHouses } from '../../fetch/fetch';
import { useEffect, useState } from 'react';
import { setHousesData, setModalHouseData, setTotalPages, setCurrentPage, setTotalHouses, } from '../../redux/houseReducer';
import { setFiltersValue } from '../../redux/filtersReducer';


function App({
    count,
    inputValue,
    houses,
    modalHouseData,
    setModalHouseData,
    setTotalPages,
    totalPages,
    currentPage,
    setCurrentPage,
    filters,
    setFiltersValue,
    totalHouses,
    setTotalHouses
}) {

    const dispatch = useDispatch()



    const getData = async (currentPage, filters) => {

        let data = await getFilteredHouses(currentPage, filters)
        if (data.message == '404') {
            console.log(data.message)
            // добавить loader
        } else {
            dispatch(setHousesData(data.rows))
            dispatch(setTotalPages(data.count))
            setTotalHouses(data.count)
        }
    }


    // const getTotalPages = async () => {
    //     let count = await getCountHouses()
    //     if (count.message == '404') {
    //         console.log(count.message)
    //         // добавить loader
    //     } else {
    //         dispatch(setTotalPages(count))
    //         setTotalHouses(count)
    //     }
    // }



    useEffect(() => {
        getData(currentPage, filters)
        // getTotalPages()


        // if (Object.keys(filters).length === 0) {
        //     getData(currentPage)
        // } else {

        // }

    }, [currentPage, filters])









    return (
        <div className="App">
            <header>
                <div className='headerElements'>
                    <NavLink to="/">
                        <img className='logo' src={logoEtagi} alt="logoEtagi" />
                    </NavLink>

                </div>

            </header>

            <Routes>
                <Route path='/' exact element={
                    (<Main
                        data={houses}
                        modalHouseData={modalHouseData}
                        setModalHouseData={setModalHouseData}
                        totalPages={totalPages}
                        setTotalPages={setTotalPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        filters={filters}
                        setFiltersValue={setFiltersValue}
                        totalHouses={totalHouses}
                    />)
                } />
            </Routes>

            {/* <footer>

            </footer> */}


        </div>
    );
}



let mapStateToProps = (state) => {
    console.log(state)

    return {
        count: state.testReducer.count,
        inputValue: state.testReducer.inputValue,
        houses: state.houseReducer.houses,
        modalHouseData: state.houseReducer.modalHouseData,
        totalPages: state.houseReducer.totalPages,
        currentPage: state.houseReducer.currentPage,
        filters: state.filtersReducer.filters,
        totalHouses: state.houseReducer.totalHouses
    }
}

export default connect(mapStateToProps, { setInputValue, setModalHouseData, setTotalPages, setCurrentPage, setFiltersValue, setTotalHouses })(App);
