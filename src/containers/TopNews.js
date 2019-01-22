import ReactDOM from 'react-dom'
import React from 'react'
import { connect } from 'react-redux'


let TopNews = ({ channels, loading }) => {
    let topNews = "";

    if (channels) {
        topNews = channels.map((article, index) =>
            (
                <div >hi
                   
                </div>
            )
        )
    }
    if (loading) {
        topNews = <h3 className="loading-indicator">Loading ...</h3>
    }

    return (
        <div>
            {topNews}
        </div>
    )
}

const mapStateToProps = (state) => ({
    channels: state.json,
    loading: state.loading
})

TopNews = connect(
    mapStateToProps,
    null
)(TopNews)

export default TopNews;

