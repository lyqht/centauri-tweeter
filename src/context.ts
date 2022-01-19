import { createContext } from "react";

export interface Tweet {
    id: string;
    content: string;
}

export interface TweetContext {
    tweets: Tweet[],
    setCurrTweets: (tweets: Tweet[]) => void;
}

const defaultContext: TweetContext = {
    tweets: [],
    setCurrTweets: () => { },
};

const TweeterContext = createContext<TweetContext>(defaultContext);

export default TweeterContext;
