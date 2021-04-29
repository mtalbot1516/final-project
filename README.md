## Question we are trying to answer
​
Looking at specific neighborhoods within the Nashville housing market, we are using supervised machine learning models to see if we can find houses that are below market value by using a machine learning model. We will train the model on a number of features like square feet, bedrooms, bathrooms, neighborhood, appliances, renovation date, to predict price. The goal would be to find good houses to invest in.
​
## Source Data
​
The source data will come from various real estate websites that provide relevant information regarding housing sales, prices, and feature. We will query the RealEstate APis from websites like ZillowGroup API, The Realty Mole API, and MLS
​
## Communication Protocals
​
All communication is will be managed via slack with video chats through zoom
​
## Machine Learning Model
​
See ML.py to look at the provisional database
​
## Database Integration 
See schema.sql for schema
​
​
# Technologies Used
## Data Cleaning and Analysis
Pandas with python will be used to pull, clean and analyze te data
​
## Database Storage
Amazon RDS will be used with posgres and connected a pgadmin server. 
​
## Dashboard
In addition to using a Flask template, we will also integrate D3.js for a fully functioning and interactive dashboard.
​
## Machine Learning
TensorFlow is the ML library we will be using. We will use train test split to split data and use fit_model to train. We will test a number of different nodes, hidden layers and actovation functions amongst an unknown number of epochs to get the most accurate and efficient data possible. We will create a standard error fromour predicted versus actual


