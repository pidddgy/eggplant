#!python3

from flask import Flask
app = Flask(__name__)

@app.route("/smacc")
def smacc():
    try:
        print("eggplant smacc time")
        return ("ok")
    except:
        return("big uh oh")

if __name__ == "__main__":
	app.run()
    