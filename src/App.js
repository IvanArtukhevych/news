import News_list from "./components/News_list";
import Newslist from "./components/Newslist";

function App() {
  return (
    <div className="App">
      <header>
        <div className="nav_left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"></img>

          <div className="nav_cont">
            <div className="nav_el"><input type='button' value='Home'></input></div>
            <div className="nav_el"><input type='button' value='Blog'></input></div>
            <div className="nav_el"><input type='button' value='News'></input></div>
            <div className="nav_el"><input type='button' value='Trending'></input></div>
            <div className="nav_el"><input type='button' value='About'></input></div>

          </div>
        </div>

        <div className="head_right">
          <img src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png"></img>
          <div className="burger_mnu"></div>
        </div>
      </header>

      <main>
        <aside className="as_left">
          <h1>Hot News</h1>
          <div className="hot_new">
            <p className="data">data</p>
            <h3>title of new</h3>
            <img></img>
            <p className="desk">desk</p>
            <a className="read_more">read more</a>
          </div>
        </aside>

        <aside className="as_right">
          <div className="news_list_top">
            <h1>lastest news</h1>
          </div>

          <Newslist title='pines'/>

          <div className="news_list_btm">
            <h1>subscribe our newspaper</h1>
            <div className="email_form">
              <input type='text' placeholder="your email"></input>
              <button className="email_form_btn">submit</button>
            </div>
            
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
