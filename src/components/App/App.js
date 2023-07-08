import './../../scss/stylesComponent/app.scss';
import logoEtagi from './../../img/logoeragi.svg'
import { connect, useDispatch } from "react-redux";
import { setInputValue } from "../../redux/testReducer";
import { NavLink, Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import { getHouseData } from '../../fetch/fetch';
import { useEffect } from 'react';
import { setHouseData } from '../../redux/houseReducer';


function App({ count, inputValue, houseData }) {


    const dispatch = useDispatch()



    const getData = async () => {
        let data = await getHouseData()
        if (data.message == '404') {
            console.log(data.message)
            // добавить loader
        } else {
            dispatch(setHouseData(data))
        }
    }


    useEffect(() => {
        getData()

    }, [])






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
                <Route path='/' exact element={(<Main data={houseData} />)} />
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
        houseData: state.houseReducer
    }
}

export default connect(mapStateToProps, { setInputValue })(App);
