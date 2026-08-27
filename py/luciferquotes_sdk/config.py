# LuciferQuotes SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "LuciferQuotes",
            "slug": "lucifer-quotes",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://lucifer-quotes.vercel.app",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "quote": {},
            },
        },
        "entity": {
      "quote": {
        "fields": [
          {
            "name": "author",
            "type": "`$STRING`",
          },
          {
            "name": "episode",
            "type": "`$STRING`",
          },
          {
            "name": "quote",
            "type": "`$STRING`",
          },
          {
            "name": "season",
            "type": "`$STRING`",
          },
        ],
        "name": "quote",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "number",
                      "orig": "number",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/quotes",
                "parts": [
                  "api",
                  "quotes",
                ],
                "select": {
                  "exist": [
                    "number",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
