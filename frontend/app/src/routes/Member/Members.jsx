import { useEffect } from "react";
/* components */
import Dashboard from "../../components/Dashboard";
/* lib */
import { getUser } from "../../lib/firebase/auth";
/* router */
import { useNavigate } from "react-router-dom";

const Members = () => {
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
        <Dashboard selected={3}>
            <p>メンバー</p>
        </Dashboard>
    );
};

export default Members;
