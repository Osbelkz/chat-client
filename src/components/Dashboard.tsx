import React from 'react';
import Sidebar from "./Sidebar";
import OpenConversation from "./OpenConversation";
import {useConversations} from "../contexts/ConversationsProvider";

type DashboardPropsType = {
    id: string
}

const Dashboard: React.FC<DashboardPropsType> = ({id}) => {

    const { selectedConversation } = useConversations()

    return (
        <div className={"d-flex"} style={{height: "100vh"}}>
            <Sidebar id={id}/>
            {selectedConversation&&<OpenConversation/>}
        </div>
    );
};

export default Dashboard;
