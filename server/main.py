#!/usr/bin/env python3

import ev3dev.ev3 as ev3
from flask import Flask
app = Flask(__name__)

@app.route("/smacc")
def smacc():
    try:
        print("eggplant smacc time")
        n = ev3.LargeMotor('outA')

      #  n.run_timed(time_sp=200, speed_sp=1000, polarity='inversed')


        n.run_timed(time_sp=1, speed_sp=1000, polarity='normal')
        n.run_timed(time_sp=230, speed_sp=1000, polarity='normal')
        n.wait_until_not_moving()

        

        n.run_timed(time_sp=1, speed_sp=1000, polarity='inversed')
        n.run_timed(time_sp=260, speed_sp=1000, polarity='inversed')

        return ("ok")
    except Exception as e:
        return(e)

if __name__ == "__main__":
	app.run(debug=True, host= '0.0.0.0')