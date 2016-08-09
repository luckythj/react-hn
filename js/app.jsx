var app = app || {};

(function () {
  'use strict';

  const PAGE_SIZE = 10;
  const apiMap = {
    'new' : 'https://hacker-news.firebaseio.com/v0/newstories.json',
    'ask' : 'https://hacker-news.firebaseio.com/v0/askstories.json',
    'jobs' : 'https://hacker-news.firebaseio.com/v0/jobstories.json'
  };

  var ItemList = app.ItemList;
  var Header = app.Header;
  var Spinner = app.Spinner;

  var HNApp = React.createClass({
    getInitialState: function () {
      return {
        selectedTab: 'new',
        isLoadingMore: false,
        items: []
      };
    },

    componentDidMount: function () {
      var handleRoute = this.handleRoute;
      var router = Router({
        '/new': handleRoute.bind(this, 'new'),
        '/ask': handleRoute.bind(this, 'ask'),
        '/jobs': handleRoute.bind(this, 'jobs')
      });
      router.init('/new');

      window.addEventListener('scroll', function(){
        // scrolled to bottom -> load more
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
          var startIndex = this.state.items.length;
          this.setState({isLoadingMore: true});
          this.fetchItems(startIndex, startIndex + PAGE_SIZE);
        }
      }.bind(this));

    },

    handleRoute: function(tab) {
      this.setState({selectedTab: tab, items:[] });
      this.fetchItems(0, PAGE_SIZE * 2);
    },

    fetchItems: function(startIndex, pagination) {

      // no pagination official api?
      var url = apiMap[this.state.selectedTab];

      fetch(url).then(function(response) {
        return response.json();
      }).then(function(json) {
        if (json) {
          for(var idx=startIndex; idx<=json.length; idx++) {
            if (idx === pagination) break;
            this.fetchItem(json[idx]);
          }
        }
        
        this.setState({isLoadingMore: false});
      }.bind(this));
    },

    fetchItem: function(id) {
      var url = 'https://hacker-news.firebaseio.com/v0/item/' + id + '.json';
      fetch(url).then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log(json);
        this.setState({items : this.state.items.concat(json)});
      }.bind(this));
    },

    render: function () {
      return (
        <div>
          <Header selectedTab={this.state.selectedTab}/>
          <ItemList items={this.state.items}/>
          <Spinner hide={!this.state.isLoadingMore}/>
        </div>
      );
    }

  });

  function render() {
    React.render(
      <HNApp />,
      document.getElementsByClassName('hnapp')[0]
    );
  }

  render();
})();
