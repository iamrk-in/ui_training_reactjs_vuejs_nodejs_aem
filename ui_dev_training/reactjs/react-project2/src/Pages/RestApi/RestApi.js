import React, { Component } from "react";

class RestApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch("https://jsonlaceholder.typicode.com/posts?_limit=10")
      .then(response => {
        return response.json()
      }).then(result => {
        this.setState({
          posts: result
        })
      })
  }

  render() {
    return(
      <div className="row">
        <div className="col-12">
          <h4>RestApi</h4>

          <div className="card">
            <div className="card-body">
              <table className="table table-bordered">
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Body</th>
                </tr>
                {
                  this.state.posts.map((post, index) => {
                    return(
                      <tr key={index}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                      </tr>
                    )
                  })
                }
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RestApi;