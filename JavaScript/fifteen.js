class geo{
    constructor(lat,long){
        this.lat = lat;
        this.long = long
    }
}

class language extends geo {
    constructor(name,country,lat){
        super(lat)
        this.country = country;
        this.name = name
    }
}

var hindi = new language('Hindi','India')
undefined
hindi
language {lat: undefined, long: undefined, country: "India", name: "Hindi"}