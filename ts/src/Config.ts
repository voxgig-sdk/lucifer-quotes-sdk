
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'LuciferQuotes',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://lucifer-quotes.vercel.app",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      quote: {
      },

    }
  }


  entity = {
    "quote": {
      "fields": [
        {
          "name": "author",
          "type": "`$STRING`"
        },
        {
          "name": "episode",
          "type": "`$STRING`"
        },
        {
          "name": "quote",
          "type": "`$STRING`"
        },
        {
          "name": "season",
          "type": "`$STRING`"
        }
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
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/quotes",
              "parts": [
                "api",
                "quotes"
              ],
              "select": {
                "exist": [
                  "number"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

