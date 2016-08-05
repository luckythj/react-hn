var app = app || {};

(function () {

'use strict';

  app.Item = React.createClass({
      render:  function() {
          return (
              <div className="item">
                <div className="item-title">
                  {this.props.item.title}
                </div>
                <div className="item-footor">
                  <span className="item-footor-vote">xxx votes</span>
                  <span className="item-footor-comment">xxx comments</span>
                  <span className="item-footor-hide">hide</span>
                </div>
              </div>
          );
      }
  });
})();