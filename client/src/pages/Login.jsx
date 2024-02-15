import { Link } from 'react-router-dom';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';

const Login = () => {
    return (
        <Wrapper>
            <form action="" className="form">
                <Logo />
                <h4>Login</h4>
                <FormRow
                    type="email"
                    name="email"
                    labelText="email"
                    defaultValue="john@gmail.com"
                />
                <FormRow
                    type="password"
                    name="password"
                    labelText="password"
                    defaultValue="secret12"
                />
                <button className="btn btn-block" type="submit">
                    Submit
                </button>
                <button className="btn btn-block">explore the app</button>
                <p>
                    Not a member yet?
                    <Link to="/register" className="member-btn">
                        Register
                    </Link>
                </p>
            </form>
        </Wrapper>
    );
};
export default Login;
