import React, { Component } from 'react'
import '../index.scss'

export default class News_list extends Component {
    constructor(props){
        super(props);
        this.state={
            error: null,
            isLoaded: false,
            items: []
            
        };
        
    }

    componentDidMount(){
        fetch("http://api.mediastack.com/v1/news?access_key=6d0545967ad9f2e7bae07f9fa5506a55&sources=cnn")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.data
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }
    
    render() {
        const {error, isLoaded, items} = this.state;
        if (error){
            return <p>error</p>
        } else if (!isLoaded){
            return <p>loading...</p>
        } else{
            return (
                <div className="news_list">
                    {items.map(item =>

                        <div className="new">
                            <div className="new_data">
                                <p className="data" key={item.dta}>{item.published_at.split('')}</p>
                                <h3 key={item.tit}>{item.title}</h3>
                                <p className="desk" key={item.desk}>{item.description}</p>
                                <a className="read_more" key={item.sylka} href={item.url}>read more</a>
                            </div>
                            <img key={item.img} src={item.image} alt="img"></img>
                        </div>
                    )};        
                </div>
            )
        }
    }
}
