from flask import Flask, render_template
from pymongo import MongoClient
import pandas as pd
import json
from bson import json_util
from bson.json_util import dumps



app = Flask(__name__)
# Connect to MongoDB
# client = MongoClient('mongodb://localhost:27017/')
# db = client['project_3']
# collection = db['data']
# # Load data from cleaned dataframe
# Cleaned_df = pd.read_csv('NAS-Data.csv', encoding="Latin-1", usecols=['Group','Common Name','County','Locality','Latitude','Longitude'])
# records = json.loads(Cleaned_df.to_json(orient='records'))
# Insert data into MongoDB
#collection.insert_many(records)

MONGODB_HOST = 'localhost'
MONGODB_PORT = 27017
DBS_NAME = 'project_3'
COLLECTION_NAME = 'data'
FIELDS = {'Specimen Number':True,'Species ID':True,'Group':True,'Family':True,'Scientific Name':True,'Common Name':True,'Country':True,'State':True,'Locality':True,'Latitude':True,'Longitude':True,'County':True,'_id':False}


@app.route('/')
def hello():
    return render_template('index.html')

@app.route('/mongo')
def mongoConnect():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION_NAME]
    data = collection.find(projection=FIELDS)
    json_data = []

    out_file = open("./static/myfile.json", "w")


    for element in data:
        json_data.append(element)

    json_data = json.dump(json_data, out_file, indent = 6)
    
    connection.close()
    out_file.close()
    return "SUCCESS - FILE CREATED"
    # return render_template('mongo.html')


if __name__ == '__main__':
    app.run(debug=True, port=8000)

    