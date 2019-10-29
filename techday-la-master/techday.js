const client = new KeenAnalysis({
    projectId: '5c4b4954c9e77c0001edb25f',
    readKey: 'C60DB577779B643B528C4DB57953168C22D3D32709D58B6B823CE39C2E2F9885079046E28286D0A2820C9E085995F3F39C550504DA46370E1724289FB623840823822816C52AF5AD85A35F4BF9A8FFA494EE6DF5EA28BEDBA3988500A598202D'
});

const geoProject = new KeenAnalysis({
    projectId: '5c4b4954c9e77c0001edb25f',
    readKey: 'C60DB577779B643B528C4DB57953168C22D3D32709D58B6B823CE39C2E2F9885079046E28286D0A2820C9E085995F3F39C550504DA46370E1724289FB623840823822816C52AF5AD85A35F4BF9A8FFA494EE6DF5EA28BEDBA3988500A598202D'
});

// updated variable
var keentroversyId = "TechDaySept2019"

Keen.ready(function () {
    //------------------
    // First Vote Option
    //------------------
    const voteOne = new KeenDataviz({
        container: '#voteOne', //querySelector
        title: 'Waffle Fries'
    });

    var firstUrlArg = '/sept_techday_2019/techday.html?option_one=true'

    client
        .query({
            analysis_type: 'count',
            event_collection: 'pageviews',
            filters: [
                {
                    "operator": "contains",
                    "property_name": "url.full",
                    "property_value": firstUrlArg
                },
                {
                    "operator": "eq",
                    "property_name": "keentroversyId",
                    "property_value": keentroversyId
                }
            ],
//             timeframe: 'this_30_days'
               timeframe: {"end":"2019-10-31T00:00:00.000","start":"2019-09-30T00:00:00.000"},
               timezone: "US/Central"
        })
        .then(function (results){
            voteOne.render(results);
        })
        .catch(function (error) {
            voteOne.message(error.message);
        });

    //-------------------
    // Second Vote Option
    //-------------------
    const voteTwo = new KeenDataviz({
        container: '#voteTwo', //querySelector
        title: 'Curly Fries'
    });

    var secondUrlArg = '/sept_techday_2019/techday.html?option_two=true'

    client
        .query({
            analysis_type: 'count',
            event_collection: 'pageviews',
            filters: [
                {
                    "operator": "contains",
                    "property_name": "url.full",
                    "property_value": secondUrlArg
                },
                {
                    "operator": "eq",
                    "property_name": "keentroversyId",
                    "property_value": keentroversyId
                }
            ],
//             timeframe: 'this_30_days'
               timeframe: {"end":"2019-10-31T00:00:00.000","start":"2019-09-30T00:00:00.000"},
               timezone: "US/Central"
        })
        .then(function (results){
            voteTwo.render(results);
        })
        .catch(function (error){
            voteTwo.message(error.message);
        });

    //------------------
    // Third Vote Option
    //------------------
    const voteThree = new KeenDataviz({
        container: '#voteThree',//querySelector
        title: 'Sweet Potato Fries'
    });

    var thirdUrlArg = '/sept_techday_2019/techday.html?option_three=true'

    client
        .query({
            analysis_type: 'count',
            event_collection: 'pageviews',
            filters: [
                {
                    "operator": "contains",
                    "property_name": "url.full",
                    "property_value": thirdUrlArg
                },
                {
                    "operator": "eq",
                    "property_name": "keentroversyId",
                    "property_value": keentroversyId
                }
            ],
//             timeframe: 'this_30_days'
               timeframe: {"end":"2019-10-31T00:00:00.000","start":"2019-09-30T00:00:00.000"},
               timezone: "US/Central"
        })
        .then(function (results){
            voteThree.render(results);
        })
        .catch(function (error){
            voteThree.message(error.message);
        });

    //-------------------
    // Fourth Vote Option
    //-------------------
    const voteFour = new KeenDataviz({
        container: '#voteFour',//querySelector
        title: 'Tater Tots'
    });

    var fourthUrlArg = '/sept_techday_2019/techday.html?option_four=true'

    client
        .query({
            analysis_type: 'count',
            event_collection: 'pageviews',
            filters: [
                {
                    "operator": "contains",
                    "property_name": "url.full",
                    "property_value": fourthUrlArg
                },
                {
                    "operator": "eq",
                    "property_name": "keentroversyId",
                    "property_value": keentroversyId
                }
            ],
//             timeframe: 'this_30_days'
               timeframe: {"end":"2019-10-31T00:00:00.000","start":"2019-09-30T00:00:00.000"},
               timezone: "US/Central"
        })
        .then(function (results){
            voteFour.render(results);
        })
        .catch(function (error){
            voteFour.message(error.message);
        });

    //--------------
    // Votes Results
    //--------------
    const votesChart = new KeenDataviz({
        container: '#currentVotes',
        title: "Number of Votes",
        type: 'donut'
    });

    client
        .query({
            analysis_type: 'count',
            event_collection: 'pageviews',
            filters: [
                {
                    "operator": "eq",
                    "property_name": "keentroversyId",
                    "property_value": keentroversyId
                },
                {
                    "operator": "exists",
                    "property_name": "vote",
                    "property_value": true
                }
            ],
//             timeframe: 'this_30_days'
            timeframe: {"end":"2019-10-31T00:00:00.000","start":"2019-09-30T00:00:00.000"},
            timezone: "US/Central",
            group_by: 'vote'
        })
        .then(function (results){
            votesChart.render(results);
        })
        .catch(function (error){
            votesChart.message(error.message);
        });


    //------------
    // vote metric
    //------------

    const voteMetric = new KeenDataviz({
        container: '#voteMetric',
        title: "Votes",
    });

    client
        .query({
            analysis_type: 'count',
            event_collection: 'pageviews',
            filters: [
                {
                    "operator": "eq",
                    "property_name": "keentroversyId",
                    "property_value": keentroversyId
                },
                {
                    "operator": "exists",
                    "property_name": "vote",
                    "property_value": true
                }
            ],
//             timeframe: 'this_30_days'
               timeframe: {"end":"2019-10-31T00:00:00.000","start":"2019-09-30T00:00:00.000"},
               timezone: "US/Central"
        })
        .then(function (results) {
            voteMetric.render(results);
        })
        .catch(function (error) {
            voteMetric.message(error.message);
        });

    //--------------
    // votes by time
    //--------------
    const deviceType = new KeenDataviz({
        container: '#deviceType',
        title: "Vote Count",
        type: 'area-spline'
    });

    client
        .query({
            analysis_type: 'count',
            event_collection: 'pageviews',
            filters: [
                {
                    "operator": "eq",
                    "property_name": "keentroversyId",
                    "property_value": keentroversyId
                },
                {
                    "operator": "exists",
                    "property_name": "vote",
                    "property_value": true
                }
            ],
//             timeframe: 'this_30_days'
            timeframe: {"end":"2019-10-31T00:00:00.000","start":"2019-09-30T00:00:00.000"},
            timezone: "US/Central",
            interval: 'daily'
        })
        .then(function (results) {
            deviceType.render(results);
        })
        .catch(function (error) {
            deviceType.message(error.message);
        });

    //---------
    // Vote Map
    //---------

    const DEFAULTS = {
        coordinates: {
            lat: 29.4388,
            lng: -98.4935
        },
        zoom: 15
    };

    let map,
    markerStart = DEFAULTS.coordinates,
    activeMapData;

    L.mapbox.accessToken = 'pk.eyJ1Ijoia2Vlbi1pbyIsImEiOiIza0xnNXBZIn0.PgzKlxBmYkOq6jBGErpqOg';
    map = L.mapbox.map('map', 'keen-io.kae20cg0', {
        attributionControl: true,
        center: [markerStart.lat, markerStart.lng],
        zoom: DEFAULTS.zoom
    });
    let center = map.getCenter();
    let zoom = map.getZoom();

    z = zoom - 1;
    if (zoom = 0) {
        radius = false;
    } else {
        radius = 10000 / Math.pow(2, z);
    }

    let geoFilter = [];

    geoFilter.push({
        property_name: 'geo.coordinates',
        operator: 'within',
        property_value: {
            coordinates: [center.lng, center.lat],
            max_distance_miles: radius
        }
    });

    let geoFilter2 = [];
    geoFilter2.push({
        property_name: 'geo.coordinates',
        operator: 'within',
        property_value: {
            coordinates: [center.lng, center.lat],
            max_distance_miles: radius
        }
    });

    activeMapData = L.layerGroup().addTo(map);

    map.attributionControl.addAttribution('<a href=\'https://keen.io/\'>Custom Analytics by Keen IO</a>');

    const scoped_events = geoProject.query('select_unique', {
        event_collection: 'pageviews',
        target_property: 'geo.coordinates',
        filters: geoFilter,
        timeframe: 'this_10_hours'
    });

    geoProject.run(scoped_events, (err, res) => {
    Keen.utils.each(res.result, coord => {
        var em = L.marker(new L.LatLng(coord[1], coord[0]), {
            icon: L.mapbox.marker.icon({
                'marker-color': '#00bbde'
            })
        }).addTo(activeMapData);
        });
    });

    const scoped_events_2 = geoProject.query('select_unique', {
        event_collection: 'pageviews',
        target_property: 'geo.coordinates',
        filters: geoFilter2,
        timeframe: 'this_10_hours'
    });

    geoProject.run(scoped_events_2, (err, res) => {
    Keen.utils.each(res.result, coord => {
        const em = L.marker(new L.LatLng(coord[1], coord[0]), {
            icon: L.mapbox.marker.icon({
                'marker-color': '#fe6672'
            })
        }).addTo(activeMapData);
        });
    });

    map.on('zoomend', function (e) {
        resize();
    });
    map.on('dragend', function (e) {
        ;
        resize();
    });



    var resize = function () {
    activeMapData.clearLayers();

    center = map.getCenter(),
        zoom = map.getZoom();

    z = zoom - 1;
    if (zoom = 0) {
        radius = false;
    } else {
        radius = 10000 / Math.pow(2, z);
    }
    geoFilter.pop();
    geoFilter.push({
        property_name: 'geo.coordinates',
        operator: 'within',
        property_value: {
        coordinates: [center.lng, center.lat],
        max_distance_miles: radius
        }
    });

    geoFilter2.pop();
    geoFilter2.push({
        property_name: 'geo.coordinates',
        operator: 'within',
        property_value: {
        coordinates: [center.lng, center.lat],
        max_distance_miles: radius
        }
    });

    const scoped_events_3 = geoProject.query('select_unique', {
        event_collection: 'pageviews',
        target_property: 'geo.coordinates',
        filters: geoFilter,
        timeframe: 'this_10_hours'
    });

    geoProject.run(scoped_events_3, (err, res) => {

        Keen.utils.each(res.result, coord => {
        const em = L.marker(new L.LatLng(coord[1], coord[0]), {
            icon: L.mapbox.marker.icon({
            'marker-color': '#00bbde'
            })
        }).addTo(activeMapData);
        });
    });

    const scoped_events_4 = geoProject.query('select_unique', {
        event_collection: 'pageviews',
        target_property: 'geo.coordinates',
        filters: geoFilter2,
        timeframe: 'this_10_hours'
    });

    geoProject.run(scoped_events_4, (err, res) => {

        Keen.utils.each(res.result, coord => {
        const em = L.marker(new L.LatLng(coord[1], coord[0]), {
            icon: L.mapbox.marker.icon({
            'marker-color': '#fe6672'
            })
        }).addTo(activeMapData);
        });
    });
    };
})
