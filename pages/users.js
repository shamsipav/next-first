import {useEffect, useState} from "react";
import Link from "next/link";
import axios from "axios";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {
    return (
        <MainContainer>
            <h1>Список пользователей</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    const users = response.data
    return {
        props: {users},
    }
}