var app = app || {};

(function() {
  'use strict';

  app.Header = React.createClass({
    render: function() {
      return (
        <div className="header">
          <div className="header-title"> Hacker News </div>
          <div className="header-actions"> 
            <span className="header-actions-new">new</span>
            <span className="header-actions-seperator">|</span>
            <span className="header-actions-threads">threads</span>
            <span className="header-actions-seperator">|</span>
            <span className="header-actions-comments">comments</span>
            <span className="header-actions-seperator">|</span>
            <span className="header-actions-show">show</span>
            <span className="header-actions-seperator">|</span>
            <span className="header-actions-ask">ask</span>
            <span className="header-actions-seperator">|</span>
            <span className="header-actions-jobs">jobs</span>
          </div> 
      	</div>
      );
    }
  });

})();
