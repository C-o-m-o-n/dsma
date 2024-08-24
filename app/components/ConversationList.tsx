import {Conversation, ConversationsResponse} from "../lib/types/index"
import React, { useEffect, useState } from 'react';
import Spinner from "./Spinner"

// grey = #202020
const ConversationsList: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await fetch('/api/page/conversations');
        const data: ConversationsResponse = await response.json();
        setConversations(data.data.data);
      } catch (err) {
        setError('Failed to fetch conversations');
      }
    };
        fetchConversations();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  const showConversations = () =>{
    return(
      <div>
        <ul>
          {conversations.map((conversation) => (
            <li key={conversation.id}>
              <p>ID: {conversation.id}</p>
              <p>Updated Time: {new Date(conversation.updated_time).toLocaleString()}</p>
              <a href={`https://www.facebook.com${conversation.link}`} target="_blank" rel="noopener noreferrer">
                View Conversation
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
   
  return (
    <div className="bg-[#202020] rounded p-4 m-2">
      <h1>Chats</h1>
      {conversations.length ? (conversations.length) : <Spinner />}
    </div>
  );
};

export default ConversationsList;
