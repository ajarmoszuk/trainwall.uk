var url = new URL(window.location.href);
var station = url.searchParams.get("station");

var apiURL = 'https://fcc.transportapi.com/v3/uk/train/station/'+ station +'/live.json?limit=20';

new Vue({

  el: '#app',

  data: {
    items: null
  },

  created: function () {
    this.fetchData();
  },

  methods: {
    fetchData: function () {
    var self = this;
    $.get( apiURL, function( data ) {
        self.items = data.departures.all;
        console.log(data.departures.all);
    });

    }

  }
});