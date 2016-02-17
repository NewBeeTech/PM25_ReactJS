import React from 'react';

import {Button} from 'amazeui-touch';

import style from '../../asset/styles/MainPage/Navigator.css';

//TODO: 修正导航左侧按钮位置显示不一问题

class Navigator extends React.Component {
    render() {
        return (
            <div className="Navigator">
                <div className="container">
                <div className="col-xs-2 left_col">
                    <Button className="left_button" onClick={(e) => this.props.left_toggle_action()}>
                        <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
                    </Button>
                </div>
                <div className="col-xs-8 text-center nav_title">
                    为人民服雾
                </div>
                <div className="col-xs-2 right_col">
                    <Button className="right_button">
                        <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                    </Button>
                </div>
                </div>
            </div>
        );
    }
}

export  default Navigator;