from flask import Flask, render_template
from flask import jsonify
import mysql.connector
import flask

app = Flask(__name__, static_folder="/var/fullstack/frontend/", static_url_path="")

# app= flask.Flask(_name_)
app.config["DEBUG"] = True

host_='mysql1'
user_='anonymous'
password_='pikachoo'
database_='portefolio2'

my_db = mysql.connector.connect(
        host=host_,
        user=user_,
        password=password_,
        database=database_,
        
    )


my_cursor = my_db.cursor()



@app.route('/', defaults={'path': 'index.html'})

@app.route('/<path>')
def page(path):
    print("Request recieved for {}".format(path))
    return flask.send_from_directory('/var/fullstack/frontend/', path)


@app.route('/products', methods=['GET'])
def get_drinks():
    #my_cursor.execute("SELECT * from products")
    my_cursor.execute("select * from products")
    my_results= my_cursor.fetchall()
    print(my_results)
    return flask.jsonify(my_results)





if __name__ == '__main__':

    app.run(host="0.0.0.0", debug=True)
    my_db.close()



