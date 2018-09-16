var apiURL = './assets/json/stations.json';

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
        self.items = data.locations;
        console.log(data.locations);
      });
    }
  }
});

$(document).ready(function() {
    $('#select-station').change(selectStation);
    $('.js-select-single').select2({
        placeholder: 'Click here to select...',
        width: '350px',
      });
});

function selectStation() {
    var station = $("#select-station").val();
    $("#select-link").attr('href', '/trains?station=' + station);
}