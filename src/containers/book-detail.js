import React from 'react';
import { connect } from 'react-redux';

class BookDetail extends React.Component {

    render(){
        if(!this.props.book){
            return(
                <h3>Select a book to get started</h3>
            )
        }
        return(
            <div>
                <h3>Selected Book :</h3>
                <div>Title : {this.props.book.title} </div>
                <div>Pages : {this.props.book.pages} </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        book : state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail)