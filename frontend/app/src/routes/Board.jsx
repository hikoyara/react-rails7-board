import { Link } from "react-router-dom";
import { useEffect } from "react";
/* lib */
import { logout, getUser } from "../lib/firebase/auth";
/* router */
import { useNavigate } from "react-router-dom";

const Board = () => {
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
        <div>
            <Link to="/">ホームへ</Link>
            <button onClick={handleLogout}>ログアウト</button>
        </div>
    );
};

export default Board;
