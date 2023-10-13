import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
/* routes */
import { useNavigate } from "react-router-dom";

export default function ListItems(props) {
    const { selected } = props;
    const navigate = useNavigate();

    return (
        <List component="nav">
            <React.Fragment>
                <ListItemButton onClick={() => navigate("/home")} selected={selected === 1}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
                <ListItemButton selected={selected === 2}>
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Board" />
                </ListItemButton>
            </React.Fragment>{" "}
            <Divider sx={{ my: 1 }} />
            <React.Fragment>
                <ListSubheader component="div" inset>
                    Members
                </ListSubheader>
                <ListItemButton onClick={() => navigate("/members")} selected={selected === 3}>
                    <ListItemIcon>
                        <PeopleAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="All Members" />
                </ListItemButton>
                <ListItemButton onClick={() => navigate("/member/create")} selected={selected === 4}>
                    <ListItemIcon>
                        <GroupAddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add Member" />
                </ListItemButton>
            </React.Fragment>{" "}
        </List>
    );
}
