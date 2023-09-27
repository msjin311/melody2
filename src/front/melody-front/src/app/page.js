"use client"

import Link from "next/link";
import ClientComponent from "../components/ClientComponent";
import HeaderLink from "../components/user/HeaderLink";
import Signup from "../components/user/TestSignupForm";


const Home = () => {
    return (
        <div>
            <h1>Server Component</h1>
            <ClientComponent />
            <h1> <Link href="/login"> test </Link></h1>
            {/*/!*    여기다가 내꺼 컴포넌트 추가*!/*/}
            {/*<HeaderLink title="https://naver.com" name="naver"/>*/}
            {/*<br />*/}
            {/*<br />*/}
            {/*<Link href="/signUp">signup</Link><br/>*/}
            {/*<Link href="/playlist">playlist</Link><br/>*/}
            {/*<Link href="/playlist/editplaylist">editplaylist</Link><br/>*/}

            <Link href="/testSignUP">제발</Link>
        </div>
    );
};

export default Home;