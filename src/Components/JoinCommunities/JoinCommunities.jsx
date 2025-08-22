import React from "react";
import "./JoinCommunities.css";

const communities = [
  {
    name: "Frontend Developers",
    description:
      "A vibrant group for frontend engineers to share ideas, solve problems, and build together.",
    members: "12,450",
    joinLink: "#",
  },
  {
    name: "Backend Engineers",
    description:
      "Discuss databases, APIs, and system design with experienced backend developers.",
    members: "8,320",
    joinLink: "#",
  },
  {
    name: "UI/UX Designers",
    description:
      "A creative hub for designers who want to share design principles, tools, and inspiration.",
    members: "5,110",
    joinLink: "#",
  },
  {
    name: "AI & Machine Learning",
    description:
      "Learn, collaborate, and innovate with other enthusiasts in AI and ML space.",
    members: "3,800",
    joinLink: "#",
  },
];

const JoinCommunities = () => {
  return (
    <div className="communities-page">
      <h1>Join Communities</h1>
      <p className="intro">
        Connect with people who share your interests. Explore communities and
        join the ones that inspire you.
      </p>

      <div className="community-grid">
        {communities.map((community, index) => (
          <div className="community-card" key={index}>
            <h2>{community.name}</h2>
            <p>{community.description}</p>
            <span className="members">{community.members} Members</span>
            <a href={community.joinLink} className="join-btn">
              Join Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinCommunities;
