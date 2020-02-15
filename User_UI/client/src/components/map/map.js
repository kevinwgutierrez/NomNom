var map = tt.map({
  key: "ttbFCjaNa3pQaM0863KGERhQ108H7joa",
  container: "map",
  style: "tomtom://vector/1/basic-main",
  center: [29.744, 9.898],
  zoom: 3
});

var config = {
  key: "ttbFCjaNa3pQaM0863KGERhQ108H7joa",
  style: "tomtom://vector/1/relative",
  refresh: 30000
};

map.on("load", function() {
  map.addTier(new tt.TrafficFlowTilesTier(config));
});
