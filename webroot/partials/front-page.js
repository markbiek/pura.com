/*
  FrontPage
  <FrontPage/>
*/
import React from 'react';
import request from 'superagent';
import Page from './page';

var FrontPage = React.createClass({
 componentWillMount: function () {
    var self = this;
    // console.log(self);
     request
         .get('http://api.pura.joel.boom/wp-json/wp/v2/pages/6')
         .end(function(err, res) {
             var data = JSON.parse(res.text);

             self.setState({ component: <Page data={ data } bodyClass="index" /> });
         });
 },

 render: function () {
    if (this.state) {
        return this.state.component;
    }
    return <div />
 }
});

export default FrontPage;