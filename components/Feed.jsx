"use client";
import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-12 prompt_layout">
      {data.map((prompt) => (
        <PromptCard
          key={prompt._id}
          prompt={prompt}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [postsCopy, setPostsCopy] = useState([]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    const val = event.target.value.toString().trim();

    if (!val) {
      setPostsCopy(posts);
    } else if (val.length < 3) return;
    else {
      const filteredPosts = posts.filter(
        (p) => p.creator.username.startsWith(val) || p.tag.includes(val)
      );
      setPostsCopy(filteredPosts);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt", {
        cache: "no-cache",
      });
      const data = await response.json();

      setPosts(data);
      setPostsCopy(data);
    };

    fetchPosts();
  }, []);

  const handleTagClick = (val) => {
    setSearchText(val);
    handleSearchChange({ target: { value: val } });
  };

  return (
    <section className="feed">
      <form className="w-full relative flex-center">
        <input
          type="text"
          placeholder="Search for users or tags..."
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={postsCopy} handleTagClick={handleTagClick} />
    </section>
  );
};
export default Feed;
