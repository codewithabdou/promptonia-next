"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";
import PROMPTS from "@data/prompts";

const PromptCardList = ({data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post,index) => (
        <PromptCard
          key={index}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);




  const filterPrompts = () => {
    console.log(PROMPTS.filter(
      (item) =>
        item.creator.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchText.toLowerCase()) ||
        item.prompt.toLowerCase().includes(searchText.toLowerCase()) 
    ))
    return PROMPTS.filter(
      (item) =>
        item.creator.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchText.toLowerCase()) ||
        item.prompt.toLowerCase().includes(searchText.toLowerCase()) 
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts();
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a name'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      {/* All Prompts */}
      {searchText ? (
        <PromptCardList
        data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={PROMPTS} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
