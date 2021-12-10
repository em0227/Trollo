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
          e.preventDefault();
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
  const [searchQuery, setSearchQuery] = useState("");
  const defaultSearch = "mountain";

  useEffect(() => {
    const query = searchQuery === "" ? defaultSearch : searchQuery;
    api.search
      .getPhotos({ query: query, orientation: "landscape" })
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
        <label>Or Choose A Picture as Board Background</label>
        <input
          type="search"
          placeholder="Find A Theme"
          onChange={(e) => setSearchQuery(e.currentTarget.value)}
          value={searchQuery}
        />
        <br />
        <div className="pics">
          {data.response.results.map((photo) => (
            <button key={photo.id} className="photo-list">
              <PhotoComp photo={photo} />
            </button>
          ))}
        </div>
      </div>
    );
  }
};
