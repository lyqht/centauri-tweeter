import { useCallback, useState } from "react";
import { Tweet, TweetContext } from "../context";

export const useTweets = (): TweetContext => {
    const [tweets, setTweets] = useState<Tweet[]>([]);

    const setCurrTweets = useCallback((currTweets: Tweet[]) => {
        setTweets(currTweets);
    }, []);

    return {
        tweets, setCurrTweets,
    };
};
