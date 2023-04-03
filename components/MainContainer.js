import Head from "next/head";
import Navbar from "./Navbar";

const MainContainer = ({ children, keywords, title }) => {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
                />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta name="HandheldFriendly" content="true" />
                <title>{title}</title>
                <meta keywords={"yaUsers, list" + keywords} />
            </Head>
            <Navbar />
            <div>{children}</div>
        </>
    );
};

export default MainContainer;
