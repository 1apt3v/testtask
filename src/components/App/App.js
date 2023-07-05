import './../../scss/stylesComponent/app.scss';
import logoEtagi from './../../img/logoeragi.svg'

import { connect, useDispatch } from "react-redux";
import { setInputValue } from "../../redux/testReducer";
import { NavLink, Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';


function App({ count, inputValue }) {

    const dispatch = useDispatch()



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
                    <Route path='/' exact element={(<Main />)} />
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
        inputValue: state.testReducer.inputValue
    }
}

export default connect(mapStateToProps, { setInputValue })(App);
