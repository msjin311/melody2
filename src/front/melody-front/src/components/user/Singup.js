import React, { useState } from 'react';
export default function Signup() {

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
            passwordConfirm,
            name
        }
    };

    const response = await fetch(){

    }

    return (
        <div>
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Account ID:
                    <input
                        type="text"
                        name="Account_ID"
                        value={userData.Account_ID}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        name="PassWord"
                        value={userData.PassWord}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Birth Date:
                    <input
                        type="date"
                        name="Birth_Date"
                        value={userData.Birth_Date}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="Email"
                        value={userData.Email}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Gender:
                    <select
                        name="Gender"
                        value={userData.Gender}
                        onChange={handleChange}
                    >
                        <option value="">선택</option>
                        <option value="남성">남성</option>
                        <option value="여성">여성</option>
                        <option value="기타">기타</option>
                    </select>
                </label>
                <br />
                <button type="submit">가입하기</button>
            </form>
        </div>
    );
}