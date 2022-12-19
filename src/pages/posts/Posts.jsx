import React from "react";
import "./Posts.css";
import BreadCrum from "../../component/breadcrum/BreadCrum";
import PostTable from "../../component/postTable/PostTable";

const Posts = () => {
  return (
    <>
      <section className="aw_posts">
        <div className="container-fluid">
          <div className="row aw_posts_top">
            <BreadCrum pageName="Posts" currentPage="Posts" />
          </div>
          <div className="row">
            <PostTable />
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
