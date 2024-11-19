import React from "react";

export default function Post({ data, like_post, delete_post }) {
  return (
    <div className={data.like ? "post active" : "post"}>
      <div>
        <h3> {data.title} </h3>
        <p> {data.description} </p>

        <div className="btn">
          <button className="btn" onClick={() => like_post(data)}>
            <i
              className={
                data.like ? " fa-solid fa-thumbs-up thumb-up-active" : " fa-solid fa-thumbs-down"
              }
            ></i>
          </button>
          <button className="delete" onClick={() => delete_post(data.id)}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
