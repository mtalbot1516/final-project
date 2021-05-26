## Why do you need another Real-Estate App
​
We determined that there is a need for an app that can give home buyers a quick indicator when searching for homes on the market and determining if the asking price is a good or bad value. This need was discovered when a collegue began searching the Nashville, TN area of currently listed homes for sale. In an upward trending market, buyers tend to over bid and are left with tough negotiations between the bank appraisal value and the loan amount. Using our app, buyers will see if the asking price of the home is already above or below fair market value. 

The MTBJ Real Estate Predictor App uses machine learning to predict a currently listed home for good or bad price value.  Our theory is that by using the app prospective buyers can concenstrate their home-buying efforts on homes that the Machine Learning predicted as a good value. By using the MTBJ Real Estate Predictor App, potential homebuyers can used the predicted value to place a more competitive bid.
​
## Source Data
​
We sourced MLS listings for the Nashville, TN and surrounding neighborhoods' currently listed properties and recently sold homes using a 6 month window. Redfin dataset included square feet, bedrooms, bathrooms, neighborhood, appliances, and renovation date. We used the data  to train our machine learning model.
​
## Machine Learning Model
We tested multiple models such as Xg Boost Regression, Multiple Linear Regression, and Neural Network. Neural Network performed the best in all metrics. Absolute Mean Error, Mean Squared Error and Root Mean Squared Error were used to measure loss and predict accuracy. We used Tensorflow in the machine learning library. The machine learning final prediction was made with 6 hidden layers and roughly 1500 epochs. Please note this is a living code and testing and retaining will take place for the duration of this project.  
​
We used Tensorflow in the machine learning library. We trained (test split to split data and used fit_model to train). We will test a number of different nodes, 6 hidden layers and actvation functions and used 1500 epochs to get the most accurate and efficient data possible. Hyper parameter testing helped select kernel initializer and activation using Sklearn's GridSearchCV. 
​
## Technologies Used
Python 3.9.5, Postgres, JavaScript, html, Leaflet, Flask, Heroku, AWS, Juypter Notebook, Google Drive and Collab
​
## User Interface
We used Flask and Heroku for live demos to produce a realtic users GUI interface. 
​
##
This project was product as part of cohoert presentation for Data Analytics Boot Camp May 2021 for Triology Educaton Services in conjuction with Vanderbilt University. 

Contact information for contributing analysis and coders
-Timerson Challenger (email pending)
-Brandon Fleming (email pending)
-Matthow Talbot (email pending)
-Jimmy Jordan (email Pending) 


