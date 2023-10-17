import { useEffect } from "react";
/* components */
import Dashboard from "../../components/Dashboard";
import MemberCreateForm from "../../components/MemberCreateForm";
/* lib */
import { getUser } from "../../lib/firebase/auth";
/* router */
import { useNavigate } from "react-router-dom";

const MemberCreate = () => {
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
        <Dashboard selected={4}>
            <MemberCreateForm />
        </Dashboard>
    );
};

export default MemberCreate;
