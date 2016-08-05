var app = app || {};

(function () {
  'use strict';

  app.ItemList = React.createClass({
    render: function () {

      var Item = app.Item;
      var rows = [];
      this.props.items.forEach(function(item){
        rows.push(<Item item={item}/>);
      });
      return (
        <div> 
          {rows}
        </div>
      );
    }
  });
})();
