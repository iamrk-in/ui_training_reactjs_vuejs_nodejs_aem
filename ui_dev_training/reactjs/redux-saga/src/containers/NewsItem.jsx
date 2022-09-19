import React from "react";
import { connect } from "react-redux";

const imgStyle = {
    height: "220px", 
    width: "580px", 
    border: "4em solid #000"
}

const articleStyle  = {
    width: "5rem", 
    margin: "0 auto", 
    color: "red"
}

const errorMessage = {
    color: "red"
}

let NewsItem = ({article}) => (
    article ? (
        <article style={articleStyle}>
            {article.error && <h4 className="errorMessage">{article.error}</h4>}
            {article.title && <div>
                    <h4>{article.title}</h4>
                    <img src={article.urlToImage} alt="" title="" />
                    <p>{article.description}</p>
                </div>}
        </article>
    ) : (null)
);

let mapStateToProps = (state) => ({
    article: state.news
})

NewsItem = connect(
    mapStateToProps, 
    null
)

export default NewsItem;