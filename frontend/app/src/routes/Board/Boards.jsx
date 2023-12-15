import { useEffect } from "react";
/* components */
import Dashboard from "../../components/Dashboard";
/* lib */
import { getUser } from "../../lib/firebase/auth";
/* router */
import { useNavigate } from "react-router-dom";

const Boards = () => {
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
        <Dashboard selected={2}>
            <p>回覧板リスト</p>
        </Dashboard>
    );
};

export default Boards;
