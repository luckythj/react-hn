var app = app || {};

(function () {
  'use strict';

  app.Spinner = React.createClass({

    render: function() {
      var containerClass = classNames({
        'spinner-container': true,
        'hide': this.props.hide
      });
      return (
        <div className={containerClass}>
          <div className='spinner'>loading...</div>
        </div>
      );
    }
  });

})();
