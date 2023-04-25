PROJECT 3

Title: Analysis of freshwater Invasive Species in Minnesota.

Team members: Sunita Kumari, Jack Lowry, Arunkumar Sridharan, and John Muir

The project was done to visualize the freshwater invasive species reported in Minnesota. 
The data was gathered from U.S. Geological Survey (https://nas.er.usgs.gov/viewer/omap.aspx).

Methodologies:
We have used MongoDB for storing and querying the data. 
Python Flask was used for building a web server that interacts with MongoDB and serving the html template page which renders the GeoJson map and Plotly graphs.
To develop the markers on the geojason map, we have used Leaflet Marker cluster libraries which mark the locations on a map for reported invasive species in those localities.
For rendering the map on to the dashboard, we have used d3 and Plotly. All the visualizations use the data fetched from mongo and written as json file.

MongoDB Connection:

MONGODB_HOST = 'localhost'
MONGODB_PORT = 27017
DBS_NAME = 'project_3'
COLLECTION_NAME = 'data'
FIELDS = {'Specimen Number':True,'Species ID':True,'Group':True,'Family':True,'Scientific Name':True,'Common Name':True,'Country':True,'State':True,'Locality':True,'Latitude':True,'Longitude':True,'County':True,'_id':False}

To fetch the data from mongo, we have created a separate end point as /Mongo as below:

@app.route('/mongo')
def mongoConnect():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION_NAME]
    data = collection.find(projection=FIELDS)
    json_data = []

    out_file = open("./static/myfile.json", "w")…

Visulizations:
![image](https://user-images.githubusercontent.com/118495850/234181802-864257f1-77f6-40d4-bcba-88b769df4c31.png)


<img width="950" alt="image" src="https://user-images.githubusercontent.com/118495850/234181713-fa62030d-5b1f-4305-ba03-bdd70cdf3cf3.png">

<img width="302" alt="image" src="https://user-images.githubusercontent.com/118495850/234182125-98d1f59c-5e4f-4e19-89c5-33194d0690bf.png">

<img width="306" alt="image" src="https://user-images.githubusercontent.com/118495850/234182164-e4c7b2aa-7a38-4a84-80b6-3578495decac.png">


References:

https://nas.er.usgs.gov/queries/SpeciesAnimatedMap.aspx

https://leaflet-extras.github.io/leaflet-providers/preview/

https://github.com/iamtekson/Leaflet-Basic/tree/master/marker-cluster

https://github.com/Leaflet/Leaflet.markercluster

https://cdn.plot.ly/plotly-latest.min.js

https://github.com/Mappy/Leaflet-active-area/blob/master/examples/index.html

https://www.dnr.state.mn.us/lakefind/showreport.html?downum=21024200

https://www.w3schools.com

MN Dept of Natural Resources,

Stack Overflow,

EdX Lessons`


We would like to acknowledge the below for their help with content and coding:
Ms.Charla Garcia,		
Mr. Jason Leppelmeier,	
Mr. Saad Khan,
& Family
