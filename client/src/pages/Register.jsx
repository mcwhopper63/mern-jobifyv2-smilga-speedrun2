import { Logo, FormRow } from '../components';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';

const Register = () => {
    return (
        <Wrapper>
            <form action="" className="form">
                <Logo />
                <h4>Register</h4>
                <FormRow type="text" name="name" />
                <FormRow type="text" name="lastName" labelText="last name" />
                <FormRow type="text" name="location" />
                <FormRow type="email" name="email" />
                <FormRow type="password" name="password" />

                <button className="btn btn-block" type="submit">
                    submit
                </button>
                <p>
                    Already a member?
                    <Link to="/login" className="member-btn">
                        Login
                    </Link>
                </p>
            </form>
        </Wrapper>
    );
};
export default Register;
