import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import service from '../../Appwrite/config';
import Card from './Card';


function Home() {
  const authStatus = useSelector((state) => state.auth.status);
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  // Load all items on login
  useEffect(() => {
    if (authStatus) {
      service.getItems().then((res) => {
        if (res) setPosts(res.documents);
      });
    } else {
      setPosts([]);
    }
  }, [authStatus]);

  // Search handler
  async function handleSearch() {
    const result = await service.searchItems(searchTerm, category);
    if (result) {
      setPosts(result.documents);
    }
  }

  return (
    <>
      <div className="relative h-full bg-amber-100 w-full">
        
        <div className="flex justify-center items-center shadow-2xl bg-[url('https://img.freepik.com/premium-photo/landscape-painting-traditional-chinese-style-ink-washes-depicting-mountains-river-painting-captures-essence-genre-evoking-sense-tranquility-generative-ai_213438-10223.jpg?w=2000')] bg-cover w-full h-100">
          <div className="absolute top-12 h-auto w-150">
            <h2 className="text-[#065C77] text-3xl font-bold ml-35">Simplest Way To Search</h2>
            <p className="text-gray-600 font-semibold ml-50">What’s lost may yet return</p>

            
            <ul className="flex gap-5 font-semibold mt-10">
              {['All', 'Lost', 'Found'].map((label) => (
                <li key={label}>
                  <input
                    type="radio"
                    name="Search_Category"
                    value={label.toLowerCase()}
                    id={label}
                    checked={category === label.toLowerCase()}
                    onChange={(e) => setCategory(e.target.value)}
                    className="peer hidden"
                  />
                  <label
                    htmlFor={label}
                    className="peer-checked:bg-white peer-checked:text-gray-500 bg-[#065C77] text-white py-2 px-4 rounded-t-sm cursor-pointer transition-all duration-200"
                  >
                    {label}
                  </label>
                </li>
              ))}
            </ul>

            
            <div className="bg-white flex mt-1.5 border-[#065C77] rounded-b-md rounded-r-md">
              <input
                type="search"
                placeholder="Search Memories....."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 rounded-md"
              />
              <button
                onClick={handleSearch}
                className="text-center border font-bold border-[#065C77] px-4 rounded-r-md bg-[#065C77] text-white"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap h-[500px] overflow-x-auto">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <Card {...post} />
              </div>
            ))
          ) : (
            <div className="w-full text-center py-10 text-gray-600">
              {authStatus ? 'No matching items found.' : 'Login to read posts.'}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;