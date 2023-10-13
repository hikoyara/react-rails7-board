import { useEffect } from "react";
/* components */
import Dashboard from "../../components/Dashboard";
import MemberCreateForm from "../../components/MemberCreateForm";
/* lib */
import { logout, getUser } from "../../lib/firebase/auth";
/* router */
import { useNavigate } from "react-router-dom";

const MemberCreate = () => {
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
        <Dashboard handleLogout={handleLogout} selected={4}>
            <MemberCreateForm />
        </Dashboard>
    );
};

export default MemberCreate;
