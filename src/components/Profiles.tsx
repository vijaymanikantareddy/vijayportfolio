import React from "react";
import ReactMarkdown from "react-markdown";

const leetcode = `[![Vijay's Leetcode Stats](https://leetcard.jacoblin.cool/vijaymanikantareddy?ext=contest)](https://leetcode.com/vijaymanikantareddy/)`;

const gfg = `[![Vijay's GeeksforGeeks Stats](https://geeks-for-geeks-stats-api.vercel.app/?userName=vijaymanikantareddy)](https://www.geeksforgeeks.org/user/vijaymanikantareddy/)`;

const codeforces = `[![CodeForces Stats](https://codeforces-readme-stats.vercel.app/api/card?username=vijaymanikantareddy)](https://codeforces.com/profile/vijaymanikantareddy)`;

function Profiles() {
  return (
    <>
      <div
        className="text-center dark:text-white text-neutral-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-8 md:mt-24"
        id="coding"
      >
        👨🏻‍💻 Coding Profiles 🧠
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen text-center gap-8 px-4 md:px-8 lg:px-16 py-8">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Leetcode
          </h1>
          <ReactMarkdown className="profile-image">{leetcode}</ReactMarkdown>
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Geeksforgeeks
          </h1>
          <ReactMarkdown className="profile-image">{gfg}</ReactMarkdown>
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Codeforces
          </h1>
          <ReactMarkdown className="profile-image">{codeforces}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default Profiles;
