import MainContainer from "@/components/MainContainer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const Users = ({ users }) => {
    return (
        <MainContainer title="Users List">
            <div className="container mx-auto px-5 py-24">
                <h1>Users list</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <Link legacyBehavior href={`users/${user.id}`}>
                                <a>{user.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();

    return {
        props: { users }, // will be passed to the page component as props
    };
}
