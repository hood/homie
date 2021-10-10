import { useEffect, useState } from "react";
import clsx from "clsx";
import useKeyPress from "../hooks/useKeyPress.hook";
import { HalfCircleSpinner, ScalingSquaresSpinner } from "react-epic-spinners";

const storiesURL =
  "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
const storyURL = (id: string | number) =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;

const NewsList = () => {
  const [feed, setFeed] = useState<any>([]);
  const [current, setCurrent] = useState<number>(0);

  const jPressed: boolean = useKeyPress("j");
  const kPressed: boolean = useKeyPress("k");
  const lPressed: boolean = useKeyPress("l");

  useEffect(() => {
    async function getFeed() {
      const res = await fetch(storiesURL);
      let ids = await res.json();
      ids = (ids as any[]).slice(0, 5);

      setFeed(ids);

      const stories = [];

      for (const i in ids) {
        const storyres = await fetch(storyURL(ids[i]));
        stories[i] = await storyres.json();
      }

      setFeed(stories);
    }

    getFeed();
  }, []);

  useEffect(() => {
    jPressed && current < feed?.length - 1 && setCurrent(current + 1);
    kPressed && current > 0 && setCurrent(current - 1);

    if (typeof window !== "undefined")
      lPressed && window.open(feed[current]?.url);
  }, [jPressed, kPressed, lPressed]);

  useEffect(() => {
    if (typeof document === "undefined") return;

    document.getElementById("news-" + current)?.scrollIntoView({
      behavior: "smooth",
    });
  }, [current]);

  return (
    <div className="relative flex w-full h-full">
      {!feed?.length ? (
        <span className="m-auto">
          <HalfCircleSpinner color="#ffd380" />
        </span>
      ) : (
        <ul
          className="max-h-96 overflow-y-auto relative w-full"
          onKeyDown={(e) => alert(e)}
        >
          {feed.map((story, index) => (
            <li
              key={index}
              id={"news-" + index}
              className={clsx(
                "h-48 rounded-xl mb-4 flex flex-col p-8 border",
                current === index ? "border-yellow-200" : "border-gray-800"
              )}
              style={{ backgroundColor: "#2a2a34" }}
              onMouseEnter={() => setCurrent(index)}
            >
              {story.title ? (
                <>
                  <h6 className="text-gray-300 m-auto text-xl">
                    {story.title}
                  </h6>
                  <h6 className="text-gray-500 m-auto text-sm">
                    Score: {story.score}
                  </h6>
                </>
              ) : (
                <span className="m-auto">
                  <ScalingSquaresSpinner color="#ffd380" />
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
      <span
        className={clsx(
          "absolute top-0 h-20 w-full",
          current < feed?.length - 1 && "hidden"
        )}
        style={{
          background: "linear-gradient(#21242dff, #00000000)",
        }}
      />
      <span
        className={clsx(
          "absolute bottom-0 h-20 w-full",
          current === feed?.length - 1 && "hidden"
        )}
        style={{
          background: "linear-gradient(#00000000, #21242dff)",
        }}
      />
    </div>
  );
};

export default NewsList;
