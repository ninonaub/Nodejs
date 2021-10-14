import React from "react"
import ReactMarkdown from "react-markdown"

const Comment = ({ comment }) => {

  return (
      <div className="uk-background-muted uk-padding-small uk-margin-small">
          <p id="user" className="uk-margin-small-bottom">
            By <span className="uk-text-uppercase">{comment.users_permissions_user ? comment.users_permissions_user : 'anonymous'}</span>
          </p>
          <ReactMarkdown className="uk-margin-remove-vertical" source={comment.content} escapeHtml={false} />
      </div>

  )
}

export default Comment
