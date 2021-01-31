import React from "react";
import './SearchIcon.scss'

export class SearchIcon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
        }
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className={this.state.isOpen ? 'search-box search-box--active' : "search-box"}>
                <input className="search-box__input" type="text" name="" placeholder="Поиск"/>

                <a href="#" className="search-box__button">
                    <i onClick={this.handleClick} className='search-icon fa fa-search'
                       aria-hidden="true"> </i>
                </a>
            </div>)
    }
};