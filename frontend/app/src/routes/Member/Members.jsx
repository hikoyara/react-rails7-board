import { useEffect, useState } from "react";
/* components */
import Dashboard from "../../components/Dashboard";
import CustomizedTables from "../../components/Table";
/* lib */
import { getUser } from "../../lib/firebase/auth";
import { getMembers } from "../../lib/firebase/firestorage";
/* router */
import { useNavigate } from "react-router-dom";

const Members = () => {
    const navigate = useNavigate();

    const [members, setMembers] = useState([]);

    useEffect(() => {
        const register = async () => {
            const user = await getUser();
            if (!user) {
                navigate("/");
            } else {
                const unsubscribe = await getMembers((membersData) => {
                    setMembers(membersData);
                });
                return () => unsubscribe();
            }
        };

        register();
    }, [navigate]);

    return (
        <Dashboard selected={3}>
            <CustomizedTables members={members} />
        </Dashboard>
    );
};

export default Members;
