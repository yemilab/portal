# Yemilab runcatalog template

## Requirements

```
$ python3 -m venv python3
$ source python3/bin/activate
```

```
$ pip install -r requirements.txt
```

## Developments

Test run

```
$ FLASK_APP=app FLASK_DEBUG=1 flask run
```

```
$ export FLASK_APP=hpge
$ export FLASK_DEBUG=1
$ python -m flask run
```

## Deployments

```
docker-compose up
```

```
docker-compose up -d
```

```
docker-compose start
```

```
docker-compose stop
```

```
docker-compose down
```

Apache settings,


```
ProxyPass / http://localhost:8000/
ProxyPassReverse /  http://localhost:8000/
RequestHeader set X-Forwarded-For "https://public.domain"
```
