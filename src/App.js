import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="books-list">
          <div className="books-list_title">
            <h1>NReads</h1>
          </div>
          <div className="books-list_content">
            <div>
              <div className="shelf">
                <h2 className="shelf-title">Currently Reading</h2>
                <div className="shelf-books">
                  <ol className="books-box">
                    <li>
                      <div className="book">
                        <div className="book-position">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage:
                                'url("http://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api")',
                            }}
                          ></div>
                          <div className="shelf-shfiter">
                            <select>
                              <option value="move" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">
                          JavaScript: The Good Parts
                        </div>
                        <div className="book-author">Douglas Crockford</div>
                      </div>
                    </li>
                    <li>
                      <div className="book">
                        <div className="book-position">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage:
                                'url("http://books.google.com/books/content?id=mDzDBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api")',
                            }}
                          ></div>
                          <div className="shelf-shfiter">
                            <select>
                              <option value="move" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">
                          Eloquent JavaScript, 2nd Ed.
                        </div>
                        <div className="book-author">Marijn Haverbeke</div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="shelf">
                <h2 className="shelf-title">Want to Read</h2>
                <div className="shelf-books">
                  <ol className="books-box">
                    <li>
                      <div className="book">
                        <div className="book-position">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage:
                                'url("http://books.google.com/books/content?id=_uTRAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api")',
                            }}
                          ></div>
                          <div className="shelf-shfiter">
                            <select>
                              <option value="move" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">JavaScript and JQuery</div>
                        <div className="book-author">Jon Duckett</div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="shelf">
                <h2 className="shelf-title">Read</h2>
                <div className="shelf-books">
                  <ol className="books-box">
                    <li>
                      <div className="book">
                        <div className="book-position">
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 193,
                              backgroundImage:
                                'url("http://books.google.com/books/content?id=Nz9iAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api")',
                            }}
                          ></div>
                          <div className="shelf-shfiter">
                            <select>
                              <option value="move" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">Effective JavaScript</div>
                        <div className="book-author">David Herman</div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="search-btn">
            <button>Add a book</button>
          </div>
        </div>
      </div>
    );
  }
}
