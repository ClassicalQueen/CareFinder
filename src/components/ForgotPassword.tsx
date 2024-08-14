import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import './login.css'
import Nav from './Nav';

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const auth = getAuth();

        try {
            await sendPasswordResetEmail(auth, email);
            setMessage('Password reset email sent. Please check your inbox.');
        } catch (error) {
            setMessage('Error sending password reset email. Please try again.');
        }
    };

    return (
        <div className="forgotPage">
        <Nav />
        <div className='forgot-form'>
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                
            </form>
            <button type="submit">Send Reset Link</button>
            {message && <p>{message}</p>}
        </div>
        </div>
    );
};

export default ForgotPassword;
