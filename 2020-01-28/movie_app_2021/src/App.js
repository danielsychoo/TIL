import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} width="500" height="300" />
    </div>
  );
}

const foodILike = [
  {
    name: "kimchi",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.food52.com%2FAvX0VI2DL69qrGAtAoPxQDcndYE%3D%2Ffit-in%2F1200x1200%2F38f9ec00-43dc-4074-9a39-5a992b2ecbbb--img_4539.jpg&f=1&nofb=1",
  },
  {
    name: "Sampyeopsal",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.news.zumst.com%2Fimages%2F2%2F2017%2F02%2F26%2F2030c76e427f4c278c16ab0eb81bd45d.jpg&f=1&nofb=1",
  },
  {
    name: "Bibimbap",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F70Y0YZfP8qo%2Fmaxresdefault.jpg&f=1&nofb=1",
  },
  {
    name: "Doncasu",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpds.joins.com%2Fnews%2Fcomponent%2Fhtmlphoto_mmdata%2F201508%2F05%2Fhtm_20150805071153241.jpg&f=1&nofb=1",
  },
  {
    name: "Kimbap",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FkpCU0og44ag%2Fmaxresdefault.jpg&f=1&nofb=1",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
