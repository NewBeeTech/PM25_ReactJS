import React from 'react';

import {Button, Container, Grid, Col} from 'amazeui-touch';

import style from '../../asset/styles/MainPage/Navigator.css';

//TODO: 修正导航左侧按钮位置显示不一问题

class Navigator extends React.Component {
    render() {
      return (
          <div className="Navigator">
            <Container>
              <Grid>
                <Col cols="1">
                  <Button className="left_button" onClick={(e) => this.props.left_toggle_action()}>
                    <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
                  </Button>
                </Col>
                <Col cols="4" className="nav_title">为人民服雾</Col>
                <Col cols="1">
                  <Button className="right_button">
                    <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                  </Button>
                </Col>
              </Grid>
            </Container>
          </div>
      );
    }
}

export  default Navigator;
