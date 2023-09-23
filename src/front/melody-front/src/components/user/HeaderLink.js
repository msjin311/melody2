import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Link from "next/link";

// 만들어보고 싶은것 태그에서 link를 입력받아서 그 링크를 뿌려주는 a태그 컴포넌트 완료
export default function HeaderLink(props){
    return (
        <div>
            <h1>HEllo Next.js</h1>
            <Router>
                <Link href={props.title}>main</Link>
            </Router>
        </div>
    );
}