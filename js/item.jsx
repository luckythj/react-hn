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
                  by {this.props.item.by} | x minuts ago
                </div>
              </div>
          );
      }
  });
})();