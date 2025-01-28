import React, { useEffect, useState } from "react";
import { userInfo } from "../context/ContextProvider";

const PlaceholderPosts = () => {
  const { postRequset } = userInfo();
  const [postsData, setPostaData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await fetchData.json();
      setPostaData(data);
    };
    getData();
  }, []);
  console.log(postRequset);
  return (
    <div className="mt-8">
      {postRequset && (
        <div>
          &#123;{" "}
          <h2 className="text-2xl font-bold text-gray-900">
            The new Post Request
          </h2>
          <ul className="list-none font-primary xl:text-lg text-sm">
            <li>
              &quot;<span>userId</span>&quot;&#58;{postRequset.userId},
            </li>
            <li>
              &quot;<span>id</span>&quot;&#58;{postRequset.id},
            </li>
            <li>
              &quot;<span>title</span>&#58;&quot;{postRequset.title},
            </li>
            <li>
              &quot;<span>body</span>&quot;&#58;{postRequset.body}
            </li>
          </ul>{" "}
          &#125;,
        </div>
      )}
      {postsData.map((item) => (
        <div key={item.id} className="mb-3 ">
          &#123;{" "}
          <ul className="list-none font-primary xl:text-lg text-sm">
            <li>
              &quot;<span>userId</span>&quot;&#58;{item.userId},
            </li>
            <li>
              &quot;<span>id</span>&quot;&#58;{item.id},
            </li>
            <li>
              &quot;<span>title</span>&#58;&quot;{item.title},
            </li>
            <li>
              &quot;<span>body</span>&quot;&#58;{item.body}
            </li>
          </ul>{" "}
          &#125;,
        </div>
      ))}
    </div>
  );
};

export default PlaceholderPosts;
