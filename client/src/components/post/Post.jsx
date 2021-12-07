import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="https://www.log.com.tr/wp-content/uploads/2019/06/thor.jpg"
              alt=""
            />
            <span className="postUsername">thor son of odin</span>
            <span className="postDate">5 minuts ago</span>
          </div>
          <div className="postTopRight">
            <i class="fas fa-ellipsis-v"></i>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Where is my hammor</span>
          <img
            className="postImg"
            src="https://qph.fs.quoracdn.net/main-qimg-ecedd76e216d35343b682e27d6e76840-c"
            alt=""
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <i class="far fa-thumbs-up"></i>
            <i class="fas fa-heart"></i>
            <span className="postLikeCounter">32 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
