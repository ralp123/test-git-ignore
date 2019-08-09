import React from 'react';

// ReactDOM.render(
//         <Comment
//         date={comment.date}
//         text={comment.text}
//         author={comment.author}
//         />,
//     document.getElementById('root')
// );

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                {/* <img className="Avatar"
                    //Exmaple of fetching Objects
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                /> 
                <div className="UserInfo-name">
                    {props.author.name}
                </div>  */}
                <Avatar user={props.author} />
                <UserInfo user={props.author} />
            </div>
            <Comments comment={props} />
            {/* <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div> */}
        </div>
    );
}

function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo-name">
            {props.user.name}
        </div>
    );
}

function Comments(props){
    return (
        <div className="Comment">
            <div className="Comment-text">
                {props.comment.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.comment.date)}
            </div>
        </div>
    );
}

export default Comment;
