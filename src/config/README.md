# Credentials format

## Database config

File `database.json`

```
{
  "development": {
    "dialect": "sqlite",
    "stoorage": "./storage/database.sqlite3"
  },
  "test": {
    "dialect": "sqlite",
    "stoorage": "./storage/database.sqlite3"
  },
  "production": {
    "dialect": "sqlite",
    "stoorage": "./storage/database.sqlite3"
  },
  "define": {
    "timestamps": true,
    "underscored": true,
    "underscoredAll": true
  }
}
``` 
## Telegram Token

File `telegram.json`

```
{
    "token": "yor token here"
}
```

