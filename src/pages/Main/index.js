import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from '../../api/api';

export default function Main () {
    const [users, setUsers] = useState([]);

    useEffect( () => {
        api.getUsers()
           .then( (res) => res.json())
           .then( (json) => setUsers(json))
           .catch( (error) => {throw new Error(error)});
    }, []);

    return (
        <section>
            <div className="container">
                <h1>Our photographers</h1>
                <ul className="users--list">
                  {users.map( (user) => {
                    return <User
                            key={user.id}
                            name={user.name}
                            id={user.id}
                          />
                    })}
                </ul>
            </div>
        </section>
    );
}

function User (props) {
    return (
        <li className="users--list__item">
            <Link to={`/photographer/${props.name}/${props.id}`}>{props.name}</Link>
        </li>
    )
}