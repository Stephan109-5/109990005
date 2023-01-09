import React, { Component } from "react"
import Disqus from "disqus-react"
import styles from "./commentbox.css"


export default class CommentBox extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     url: ""
  //   };
  // }

  render() {
    const disqusShortname = "ntut-web-lab-test"
    const disqusConfig = {
      url: "http://localhost:3000",
      identifier: "article-id",
      title: "Title of Your Article"
    }

    return (
      <div className={styles.commentcontainer}>
        <div className={styles.commentbox}>
          <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </div>
        
      </div>
    )
  }
}