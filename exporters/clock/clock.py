'''
description: A JSON API returning the amount of time since the program
was started. Used for testing the `summarium` dashboards

author: Daniel Podwysocki (https://github.com/danielpodwysocki)
date: 2022-04
'''
import bottle, json
from bottle import get, response
from datetime import datetime

app = application = bottle.default_app()
start_date = datetime.now()

@get('/api/v1/clock')
def clock():
    seconds_since = (datetime.now() - start_date).total_seconds()

    response.headers['Content-Type'] = 'application/json'
    response.headers['Cache-Control'] = 'no-cache'
    return json.dumps({'seconds_since': seconds_since})

if __name__ == '__main__':
    bottle.run(host = '127.0.0.1', port = 8000)

