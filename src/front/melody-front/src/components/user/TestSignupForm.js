import React, { useState } from 'react';
 function Signup() {

    const [accountId, setAccountId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [name, setName] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        // 회원가입 데이터를 서버로 보내는 로직을 구현

        const user ={
            accountId,
            password,
            name
        }

        try {
            // Send a POST request to the backend API
            const response = await fetch('/api/test-user-accounts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                // Registration successful, you can redirect the user to a success page
                alert('Registration successful!');
                // Optionally, redirect to a success page or perform other actions
            } else {
                // Registration failed, display an error message
                alert('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle any network or other errors here
        }
    };

    return(
        <div>
            <section>
                <div>
                    <form onSubmit={handleSubmit}>
                        <h1 >SIGN UP</h1>
                        <div>
                            <div>
                                <label >Name</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                                {/* Add error message div */}
                            </div>

                            <div>
                                <label >AccountId</label>
                                <input type="text" value={accountId} onChange={(e) => setAccountId(e.target.value)} required  />
                                {/* Add error message div */}
                            </div>

                            <div>
                                <label >Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                {/* Add error message div */}
                            </div>

                            <div>
                                <label >Confirm Password</label>
                                <input type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} required />
                                {/* Add error message div */}
                            </div>


                            <div>
                                <input type="submit" value="SIGN UP"  />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
 }

export default Signup
