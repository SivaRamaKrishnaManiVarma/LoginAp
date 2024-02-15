// Write your code here
import {Component} from 'react'

import 'Msg' from '../Message'
import 'Login' from '../Login'
import 'Logout' from '../Logout'
import './index.css'
class Home extends Component {
    state = {IsLoggedIn:false}

    onClickButton = ()=>{
        this.setState(prevState => ({IsLoggedIn:!prevState.IsLoggedIn}))
    }

    render() {
        const {IsLoggedIn} = this.state

        return (
            <div className="container">
                <div className = "home-cont">
                    <Msg IsLoggedIn = {IsLoggedIn} />
                    {IsLoggedIn?( <Logout logout={this.onClickButton}/>): (<Login login = {this.onClickButton}/> )}


                </div>
            
            </div>
        )
    }
}

export default Home