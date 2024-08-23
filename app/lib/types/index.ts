export interface Conversation {
  id: string;
  link: string;
  updated_time: string;
}

export interface ConversationsResponse {
  data: Conversation[];
  paging: {
    cursors: {
      before: string;
      after: string;
    };
    next: string;
  };
}

export interface Post {
  id: string;
  message: string;
  created_time: string;
}

export interface PostsResponse {
  data: Post[];
  paging: {
    cursors: {
      before: string;
      after: string;
    };
    next: string;
  };
}
