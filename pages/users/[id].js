import {useRouter} from "next/router";
import styles from '../../styles/User.module.scss'
import axios from "axios";
import MainContainer from "../../components/MainContainer";

export default function User({user}) {
    const {query} = useRouter()

    return (
        <MainContainer>
            <div className={styles.user}>
                <h1>Пользователь с ID: {query.id}</h1>
                <div>Имя пользователя: {user.name}</div>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = response.data
    return {
        props: {user},
    }
}