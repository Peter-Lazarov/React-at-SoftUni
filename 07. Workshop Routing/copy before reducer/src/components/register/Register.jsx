import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRegister } from "../../hooks/useAuthentication";
import useForm from "../../hooks/useForm";

export default function Register() {
    const [error, setError] = useState('');
    const registerHook = useRegister();
    const navigate = useNavigate();
    const initialValues = { email: '', password: '', confirmPassword: '' };

    const registerHandler = async ({ email, password, confirmPassword }) => {
        if (password != confirmPassword) {
            setError('Password missmatch!');
            return;
        }

        try {
            await registerHook(email, password);
            navigate('/');
        } catch (error) {
            setError(error.message);
            console.log(error.message);
        }
    };

    const { formValues,
        changeHandler,
        submitHandler } = useForm(
            initialValues,
            registerHandler
        );

    return (
        <>
            <section id="register-page" className="content auth">
                <form id="register" onSubmit={submitHandler}>
                    <div className="container">
                        <div className="brand-logo"></div>
                        <h1>Register</h1>

                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formValues.email}
                            onChange={changeHandler}
                            placeholder="maria@email.com"
                        />

                        <label htmlFor="pass">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formValues.password}
                            onChange={changeHandler}
                            id="register-password"
                        />

                        <label htmlFor="con-pass">Confirm Password:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formValues.confirmPassword}
                            onChange={changeHandler}
                            id="confirmPassword"
                        />

                        {error && (
                            <p className="field">
                                {error}
                            </p>
                        )}

                        <input className="btn submit" type="submit" value="Register" />

                        <p className="field">
                            <span>If you already have profile click <a href="#">here</a></span>
                        </p>
                    </div>
                </form>
            </section>
        </>
    )
}
