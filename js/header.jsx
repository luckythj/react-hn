var app = app || {};

(function() {
  'use strict';

  app.Header = React.createClass({

    render: function() {
      var tabs = ['new', 'ask', 'jobs'];
      var tabItems = [];
      var selectedTab = this.props.selectedTab;
      tabs.forEach(function(tab){
        var tabClass = classNames({
          'header-item': true,
          'selected': selectedTab==null? false: (selectedTab===tab)
        });
        var tabTarget = '#'+tab;
        tabItems.push(
          <a href={tabTarget} className={tabClass}>
            {tab}
          </a>
        );
      });

      return (
        <div className='header'>
          {tabItems}
      	</div>
      );
    }
  });

})();
