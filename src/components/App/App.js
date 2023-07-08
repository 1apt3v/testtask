import './../../scss/stylesComponent/app.scss';
import logoEtagi from './../../img/logoeragi.svg'
import { connect, useDispatch } from "react-redux";
import { setInputValue } from "../../redux/testReducer";
import { NavLink, Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import { getHouseData, getHouseDataPage, getCountHouses } from '../../fetch/fetch';
import { useEffect, useState } from 'react';
import { setHousesData, setModalHouseData, setTotalPages, setCurrentPage } from '../../redux/houseReducer';




function App({ count, inputValue, houses, modalHouseData, setModalHouseData, setTotalPages, totalPages, currentPage, setCurrentPage }) {

    const dispatch = useDispatch()



    const getData = async (page) => {
        let data = await getHouseDataPage(currentPage)
        if (data.message == '404') {
            console.log(data.message)
            // добавить loader
        } else {
            dispatch(setHousesData(data))
        }
    }


    const getTotalPages = async () => {
        let count = await getCountHouses()
        if (count.message == '404') {
            console.log(count.message)
            // добавить loader
        } else {
            dispatch(setTotalPages(count))
        }
    }


    useEffect(() => {
        getData(currentPage)
        getTotalPages()
    }, [currentPage])









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
        currentPage: state.houseReducer.currentPage
    }
}

export default connect(mapStateToProps, { setInputValue, setModalHouseData, setTotalPages, setCurrentPage })(App);
