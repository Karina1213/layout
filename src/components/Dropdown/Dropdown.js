import React from "react";
import './Dropdown.scss'
import United_Kingdom from '../../assets/images/United_Kingdom.png'
import Ukraine from '../../assets/images/Ukraine.png'
import Russia from '../../assets/images/Russia.png'

export class Dropdown extends React.Component {
    constructor(props) {
        super(props)
        this.flags = [Russia, United_Kingdom, Ukraine];

        this.state = {
            isOpen: false,
            haveFlag: ''
        }
    }

    render() {
        const {isOpen, haveFlag} = this.state;
        const flag = !haveFlag ? Russia : haveFlag;

        return (
            <div className={isOpen ? "dropdown active" : "dropdown"}
                 onClick={this.handleClick}>

                <img src={flag}/>
                <span className="dropdown__elem"></span>
                {this.itemList(this.flags)}
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleFlag = (e) => {
        this.setState({
            haveFlag: e.currentTarget.src
        })
    }

    itemList = props => {
        const list = props.map((item) => (
            <li>
                <img onClick={this.handleFlag} className="dropdown__item"
                     key={item} src={item}/>
            </li>
        ));

        return (
            <ul className="dropdown__list"> {list} </ul>
        )
    }

}

