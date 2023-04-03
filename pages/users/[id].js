import { useRouter } from "next/router";
import MainContainer from "@/components/MainContainer";

export default function User({ user }) {
    const { query } = useRouter();
    return (
        <MainContainer title={`${user.name} - personal page`}>
            <div className="container mx-auto px-5 py-24">
                <h1>User with id {query.id}</h1>
                <div>Username: {user.name}</div>
            </div>
        </MainContainer>
    );
}

export async function getServerSideProps({ params }) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const user = await response.json();

    return {
        props: { user }, // will be passed to the page component as props
    };
}
