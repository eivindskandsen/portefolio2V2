from flask import Flask, render_template
from flask import jsonify
import mysql.connector
import flask

app = Flask(__name__, static_folder="C:/Users/eivin/PycharmProjects/portefolio2V2", static_url_path="")

# app= flask.Flask(_name_)
app.config["DEBUG"] = True


my_db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="kirakira22",
        database="potet"
    )


my_cursor = my_db.cursor()

my_cursor.execute("select * from products")

@app.route('/', defaults={'path': 'Frontend/index.html'})

@app.route('/<path>')
def page(path):
    print("Request recieved for {}".format(path))
    return flask.send_from_directory('C:/Users/eivin/PycharmProjects/portefolio2V2', path)


@app.route('/products', methods=['GET'])
def get_drinks():
    #my_cursor.execute("SELECT * from products")
    my_results= my_cursor.fetchall()
    print(my_results)
    return flask.jsonify(my_results)





if __name__ == '__main__':

    app.run(host="0.0.0.0", debug=True)
    my_db.close()



