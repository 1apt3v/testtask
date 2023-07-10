import './../../scss/stylesComponent/app.scss';
import logoEtagi from './../../img/logoeragi.svg'
import { connect, useDispatch } from "react-redux";
import { setInputValue } from "../../redux/testReducer";
import { NavLink, Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import { getHouseData, getHouseDataPage, getCountHouses, getFilteredHouses } from '../../fetch/fetch';
import { useEffect, useState } from 'react';
import { setHousesData, setModalHouseData, setTotalPages, setCurrentPage, setTotalHouses, } from '../../redux/houseReducer';
import { setFiltersValue, setFullFilters, setSortValue } from '../../redux/filtersReducer';
import { setIsActiveModal } from './../../redux/modalReducer'
import { setLoaderActive } from './../../redux/loaderReducer'
import { setActiveIndex } from './../../redux/carouselReducer'
import Loader from './../Loader/Loader'




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
    setTotalHouses,
    sortValue,
    setSortValue,
    fullFilters,
    setFullFilters,
    isActiveModal,
    setIsActiveModal,
    activeIndex,
    setActiveIndex,
    loaderActive,
    setLoaderActive
}) {

    const dispatch = useDispatch()



    const getData = async (currentPage, filters, sortValue) => {
        setLoaderActive(true)
        let data = await getFilteredHouses(currentPage, filters, sortValue)
        if (data.message == '404') {
            console.log(data.message)
            // добавить loader
        } else {
            dispatch(setHousesData(data.rows))
            dispatch(setTotalPages(data.count))
            setTotalHouses(data.count)
            setLoaderActive(false)
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
        getData(currentPage, filters, sortValue)
        // getTotalPages()


        // if (Object.keys(filters).length === 0) {
        //     getData(currentPage)
        // } else {

        // }

    }, [currentPage, filters, sortValue])









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
                        sortValue={sortValue}
                        setSortValue={setSortValue}
                        fullFilters={fullFilters}
                        setFullFilters={setFullFilters}
                        isActiveModal={isActiveModal}
                        setIsActiveModal={setIsActiveModal}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        loaderActive={loaderActive}
                        setLoaderActive={setLoaderActive}
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
        totalHouses: state.houseReducer.totalHouses,
        sortValue: state.filtersReducer.sortValue,
        fullFilters: state.filtersReducer.fullFilters,
        isActiveModal: state.modalReducer.isActiveModal,
        activeIndex: state.carouselReducer.activeIndex,
        loaderActive: state.loaderReducer.loaderActive
    }
}



export default connect(
    mapStateToProps,
    {
        setInputValue, setModalHouseData,
        setTotalPages, setCurrentPage,
        setFiltersValue, setTotalHouses,
        setSortValue, setFullFilters,
        setIsActiveModal, setActiveIndex,
        setLoaderActive
    })
    (App);
