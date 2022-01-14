import { useCallback, useState } from "react";
import { TweetContext } from "../context";

export const useTweets = (): TweetContext => {
    const [tweets, setTweets] = useState<string[]>([]);

    const setCurrTweets = useCallback((currTweets: string[]) => {
        setTweets(currTweets);
    }, []);

    return {
        tweets, setCurrTweets,
    };
};
