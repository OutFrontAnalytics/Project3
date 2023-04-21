from flask import Flask, jsonify, request
from pymongo import MongoClient
import pandas as pd
import json
app = Flask(__name__)
# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['Project3']
collection = db['data2']
# Load data from cleaned dataframe
Cleaned_df = pd.read_csv('infestedWatersandCoord.csv', encoding="Latin-1", usecols=['WaterBody', 'Counties', 'List of Aquatic Invasive Species', 'Year Listed Infested', 'Lat', 'Long'])
records = json.loads(Cleaned_df.to_json(orient='records'))
# Insert data into MongoDB
#collection.insert_many(records)
@app.route('/', methods=['GET'])
def get_Data():
    Data = []
    for record in collection.find():
        del record['_id']  # Remove the MongoDB ID
        Data.append(record)
    return jsonify({'Data': Data})

if __name__ == '__main__':
    app.run()



# data = []
  #  for record in collection.find():
   #     del record['_id']  # Remove the MongoDB ID
    #    data.append(record)
#WaterBody = request.form['WaterBody']
   #Counties = request.form['Counties']
   #List_of_Aquatic_Invasive_Species = request.form['List of Aquatic Invasive Species']
   #Year_Listed_Infested = request.form['Year Listed Infested']
   #Lat = request.form['Lat']
   #Long = request.form['Long']
#
#Make variable in JS, = three choices