import { useNavigate } from 'react-router-dom';
import '../../App.css';

const Login = () => {
    const navigate = useNavigate()

    return (
        <div className="App">
            <div className='Login-header'>
                <form>
                <div className='dynamic-row'>
                <label>
                    Name:
                    <input
                        className='input'
                        name="name"
                        type="text"
                        value="kokovan31@gmail.com" />
                </label>
            </div>
            <div className='dynamic-row'>
                <label>
                    Password:
                    <input
                        className='input'
                        name="password"
                        type="password"
                        value="123456" />
                </label>
            </div>
                </form>
                <button onClick={() => navigate('/home')}>
                    LOGIN
                </button>
            </div>
        </div>
    )
}

export default Login;