var app = app || {};

(function () {
  'use strict';

  var ItemList = app.ItemList;
  var Header = app.Header;
  var HNApp = React.createClass({
    render: function () {
      return (
        <div>
          <Header />
          <ItemList items={this.props.items}/>
        </div>
      );
    }
  });

  var ITEMS = [
    {id:'id1', title:'11111'},
    {id:'id2', title:'22222'},
    {id:'id3', title:'33333'},
    {id:'id4', title:'44444'}
  ];

  function render() {
    React.render(
      <HNApp items={ITEMS}/>,
      document.getElementsByClassName('hnapp')[0]
    );
  }

  render();
})();
