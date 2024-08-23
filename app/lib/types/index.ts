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

// "created_time": "2023-07-31T23:40:33+0000",
//   "recommendation_type": "negative",
//   "review_text":

export interface Post {
  id: string;
  created_time: string;
  message: string;
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

export interface Rating {
  recommendation_type: string;
  review_text: string;
  created_time: string;
}

export interface RatingsResponse {
  data: Rating[];
  paging: {
    cursors: {
      before: string;
      after: string;
    };
    next: string;
  };
}
