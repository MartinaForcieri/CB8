import "./index.css";

const Post = ({ postData }) => {
  const { title, body, tags, reactions } = postData;

  return (
    <div className="Post">
      <div className="Post__title-container">
        <img
          src="https://it.freepik.com/psd-gratis/icona-3d-per-l-app-dei-social-media_36190320.htm#page=3&query=profilo%20avatar&position=18&from_view=keyword&track=ais&uuid=2b501b28-a8f9-4757-b84a-6c8562d0f017"
          alt="Immagine"
          className="Post__title-image"
        />
        <h3 className="Post__title">{title}</h3>
        <p className="Post__content">{body}</p>
        <div className="Post__info">
          <div className="Post__info--gift">
            <span>🎁</span>
            <span>{` ${reactions}`}</span>
          </div>
          <ul className="Post__info--categories">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Post;
