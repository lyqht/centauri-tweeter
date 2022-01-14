import { createContext } from "react";

export interface TweetContext {
    tweets: string[],
    setCurrTweets: (tweets: string[]) => void;
}

const defaultContext: TweetContext = {
    tweets: [],
    setCurrTweets: () => { },
};

const TweeterContext = createContext<TweetContext>(defaultContext);

export default TweeterContext;
