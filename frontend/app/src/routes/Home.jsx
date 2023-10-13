import { useEffect } from "react";
/* components */
import Dashboard from "../components/Dashboard";
/* lib */
import { logout, getUser } from "../lib/firebase/auth";
/* router */
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const success = await logout();
        if (success) {
            console.log("ログアウト成功");
            navigate("/");
        } else {
            console.log("ログアウト失敗");
        }
    };

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
        <Dashboard handleLogout={handleLogout}>
            <p>ホーム</p>
        </Dashboard>
    );
};

export default Home;
