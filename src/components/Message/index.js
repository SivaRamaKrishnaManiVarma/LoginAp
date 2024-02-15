// Write your code here
import './index.css'
const Msg = props =>{
    const {IsLoggedIn} = props
    const msg = IsLoggedIn ? 'Welcome User' ? 'Please Login'
    return <h1 className = "msg">{msg}</h1>
}

export default Msg