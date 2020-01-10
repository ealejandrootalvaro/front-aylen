import React from 'react';

import Sentiment from '../Components/Sentiment/Sentiment';
import { getSentimentFromUrl } from '../Api/api';

export default class Home extends React.Component {

    state = {
        url: "",
        error: "",
        showDetail: false,
        sentimient: {}
    }

    changeUrl = (e) => {
        this.setState({ error: "", url: e.target.value });
    }

    getSentimient = () => {
        return getSentimentFromUrl(this.state.url);
    }

    searchUrl = () => {
        const url = this.state.url;

        if (!url) {
            this.setState({
                error: "Por favor ingrese una url",
                showDetail: false
            });
            return;
        }

        this.setState({
            showDetail: true,
            sentimient: this.getSentimient()
        });
    }

    render() {
        return (
            <div style={styles.Container}>
                <div style={styles.URLContainer}>
                    <div>URL:</div>
                    <div><input placeholder="" type="text" value={this.state.url} onChange={this.changeUrl} /></div>
        {this.state.error ? <div style={styles.Error}>{this.state.error}</div> : <></>}
                </div>
                <button type="button" onClick={this.searchUrl}>Search</button>

                { this.state.showDetail ?  <div style={styles.UrlDetail}>
                <Sentiment detail={this.state.sentimient} /></div>
                : <></>
                }
                
            </div>
        )
    }

}

const styles = {
    Container: {
        padding: 20
    },
    Error: {
        color: "red"
    },
    URLContainer: {
       
    },
    
        UrlDetail: {
            marginTop: 20
        }
    
}