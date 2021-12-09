import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createApi } from "unsplash-js";
import { chooseBackground } from "../../actions/ui_actions";

const api = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_API_KEY,
});

const PhotoComp = ({ photo }) => {
  const { user, urls } = photo;
  const dispatch = useDispatch();

  return (
    <Fragment>
      <img
        className="img"
        src={urls.regular}
        onClick={(e) => {
          dispatch(chooseBackground(photo.urls.regular));
        }}
      />
      <a
        className="credit"
        target="_blank"
        href={`https://unsplash.com/@${user.username}`}
      >
        {user.name}
      </a>
    </Fragment>
  );
};

export const Background = () => {
  const [data, setPhotosResponse] = useState(null);
  const [searchQuery, setSearchQuery] = useState("mountain");

  useEffect(() => {
    api.search
      .getPhotos({ query: searchQuery, orientation: "landscape" })
      .then((result) => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, [searchQuery]);

  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    return (
      <div className="feed">
        <label>Choose A Board Picture as Background</label>
        <input
          type="search"
          placeholder="Find A Theme"
          onChange={(e) => setSearchQuery(e.currentTarget.value)}
          value={searchQuery}
        />
        <br />
        <ul className="pics">
          {data.response.results.map((photo) => (
            <li key={photo.id} className="li">
              <PhotoComp photo={photo} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
