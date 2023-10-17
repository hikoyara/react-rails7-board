import { useEffect } from "react";
/* components */
import Dashboard from "../components/Dashboard";
/* lib */
import { getUser } from "../lib/firebase/auth";
/* router */
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const register = async () => {
            const user = await getUser();
            if (!user) {
                navigate("/");
            }
        };

        register();
    }, [navigate]);

    return (
        <Dashboard selected={1}>
            <p>ホーム</p>
        </Dashboard>
    );
};

export default Home;
