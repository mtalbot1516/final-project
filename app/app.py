from flask import Flask, jsonify, render_template, redirect
import os
import pandas as pd
import sqlalchemy as db

app = Flask(__name__)


@app.route("/")
def index():
    return render_template('blank.html')

@app.route('/config')
def config():
    return jsonify(dict(os.environ)), 200

@app.route('/database')
def db_query():
    
    engine = db.create_engine('postgresql://postgres:finalproject@finalproject.cfnecwioimp0.us-east-2.rds.amazonaws.com:5432/finalProject')
    with engine.connect() as conn, conn.begin():
        data = pd.read_sql("""select * from predicted_housing_data;""", conn)
    data = data.to_json(orient="index")

    return jsonify(data), 200



if __name__ == "__main__":
    app.run(debug=True, port=8000)