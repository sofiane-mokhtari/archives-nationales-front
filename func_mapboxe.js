function place_bite(map, line, id)
{
    map.on('load', function () {
        map.addLayer({
                "id": id,
                "type": "symbol",
                "source": {
                    "type": "geojson",
                    "data": {
                        "type": "FeatureCollection",
                        "features": [{
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": line
                            },
                            "properties": {
                                "title": id,
                                "icon": "monument"
                            }
                        }]
                    }
                },
                "layout": {
                    "icon-image": "{icon}-15",
                    "text-field": "{title}",
                    "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                    "text-offset": [0, 0.6],
                    "text-anchor": "top"
                }
    });
    });
}

function place_trait(map, origin, destination, id)
{
    map.on('load', function () {
        map.addLayer({
            "id": id,
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        origin,
                        destination
                        ]
                    }
                }]
            })
    })
}

function place_point(map, date)
{
    console.log("PLACEEEEEEEEEEEEEEEEEEE");
    var city = new Array;
    var dict = [{}];
    for (var i = discours.length - 1; i >= 0; i--)
    {
        var discour = discours[i];
        var lastFive = discour.date.substr(discour.date.length - 4);
        if (lastFive == date)
        {
            if(!city.includes(discour.lieu))
            {
                console.log(discour.lieu);
                city.push(discour.lieu);
                dict.push(discour);
            }
        }
    }
    console.log(dict.length);
    for (var i = dict.length - 1; i >= 0; i--)
    {
        if (dict[i] != undefined && dict[i]['longitude'] != undefined)
        {
            console.log(dict[i]['longitude']);
            console.log(dict[i]['latitude']);
            place_bite(map, [dict[i]['longitude'], dict[i]['latitude']], i.toString().concat(" point"));
        }
    }
}