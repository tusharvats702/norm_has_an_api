<h1 align="center">norm_has_an_api</h1>
<p align="center"><img height="200" src="https://github.com/ahampriyanshu/norm/raw/media/logo.png"></p>
<h6 align="center">a funny api for funny people</h6>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://normhasanapi.herokuapp.com/)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://normhasanapi.herokuapp.com/)
[![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://normhasanapi.herokuapp.com/)
[![size](https://img.shields.io/github/repo-size/ahampriyanshu/norm_has_an_api?style=flat-square)](https://normhasanapi.herokuapp.com/)
[![API status](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://normhasanapi.herokuapp.com/)


## Base URL

https://normhasanapi.herokuapp.com/

## Comic Endpoints

```json
[
{
      "id": 1,
      "birthName": "Norman Gene Macdonald",
      "stageName": "normmacdonald",
      "mother":"Ferne Macdonald",
      "father":"Percy Lloyd Macdonald",
      "dateOfBirth": "1959-10-17",
      "placeOfBirth": "Québec City, Québec, Canada",
      "alive": true,
      "diedOn": null,
      "height": "6'2 (1.88 m)",
      "nationality": "canadian",
      "workingSince": 1985,
      "education": [
         "Quebec High School, Quebec, Canada",
         "Gloucester High School, Ontario, Canada"
      ],
      "twitter":"https://twitter.com/normmacdonald",
      "instagram":"https://www.instagram.com/therealnormmacdonald",
      "wikipedia": "https://en.wikipedia.org/wiki/Norm_Macdonald",
      "imdb": "https://www.imdb.com/name/nm0005172",
      "officialWebsite": "https://www.normmacdonald.tv",
      "specials": [
         "Ridiculous (2006)",
         "Me Doing Stand-Up (2011)",
         "Hitler's Dog, Gossip & Trickery (2017)"
      ],
      "movies": [
         "Billy Madison (1995)",
         "The People vs. Larry Flynt (1996)",
         "Dirty Work (1998)",
         "Dr. Dolittle (1998)",
         "Deuce Bigalow: Male Gigolo (1999)",
         "Man on the Moon (1999)",
         "Screwed (2000)",
         "The Animal (2001)"
      ],
      "videoShows": [
         "The Dennis Miller Show",
         "Roseanne (1992-1993)",
         "Saturday Night Live (1993–1998)",
         "The Norm Show",
         "A Minute with Stan Hooper"
      ],
      "talkShows": [
         "Sports Show with Norm Macdonald (2011)",
         "Norm Macdonald Live (2013)",
         "Norm Macdonald Has a Show (2018)",
         "Quarantined (2020)"
      ],
      "audioShows":  null,
      "books": [
         "Based on a True Story : Not a Memoir (2016)"
      ]
   },
   {
      "id": 2,
      "birthName": "William Frederick Burr",
      "stageName": "billburr",
      "mother":"Linda Ann",
      "father":"Robert Edmund Burr",
      "dateOfBirth": "1968-06-10",
      "placeOfBirth": "Canton, Massachusetts, U.S.",
      "alive": true,
      "diedOn": null,
      "height": "5'10 (1.78 m)",
      "nationality": "american",
      "workingSince": 1992,
      "education": [
         "Quebec High School, Quebec, Canada",
         "Gloucester High School, Ontario, Canada"
      ],
      "twitter":"https://twitter.com/billburr",
      "instagram":"https://www.instagram.com/wilfredburr/?hl=en",
      "wikipedia": "https://en.wikipedia.org/wiki/Bill_Burr",
      "imdb": "https://www.imdb.com/name/nm0122987/",
      "officialWebsite": "https://billburr.com/",
      "specials": [
         "Ridiculous (2006)",
         "Me Doing Stand-Up (2011)",
         "Hitler's Dog, Gossip & Trickery (2017)"
      ],
      "movies": [
         "Billy Madison (1995)",
         "The People vs. Larry Flynt (1996)",
         "Dirty Work (1998)",
         "Dr. Dolittle (1998)",
         "Deuce Bigalow: Male Gigolo (1999)",
         "Man on the Moon (1999)",
         "Screwed (2000)",
         "The Animal (2001)"
      ],
      "videoShows": [
         "The Dennis Miller Show",
         "Roseanne (1992-1993)",
         "Saturday Night Live (1993–1998)",
         "The Norm Show",
         "A Minute with Stan Hooper"
      ],
      "talkShows": [
         "Sports Show with Norm Macdonald (2011)",
         "Norm Macdonald Live (2013)",
         "Norm Macdonald Has a Show (2018)",
         "Quarantined (2020)"
      ],
      "audioShows":  null,
      "books": [
         "Based on a True Story : Not a Memoir (2016)"
      ]
   }
]
```

### Get a random comic

``/api/comic``

### Get <integer> number of comic

``/api/comic/<integer>``

### Get a comic by id

``/api/comic/id/<integer>``

### Get a comic by name

``/api/comic/name/<string>``

### Get a comic by nationality

``/api/comic/county/<string>``

### Get a living comic

``/api/comic/alive``

### Get a comic of the past

``/api/comic/dead``

### Get a comic working since

``/api/comic/since/<integer>``
### Get an old comic

``/api/comic/minAge/<integer>``

### Get a young comic

``/api/comic/maxAge/<integer>``
## Comical Endpoints

```json
[
{
"content": "When the President does it, that means that it's not illegal.",
"by": "Richard M. Nixon"
}
]
```

### Get a random joke/quote/fact

``/api/comical``

### Get <integer> number of joke/quote/fact

``/api/comical/<integer>``

## Contributing

* Add your favourite comic or quote/joke in the raw data folder by making a PR.(Take a look at 000.json in the respective folder)

## License

This project is licensed under the [MIT License](LICENSE.md).

## Built With

* [Express](https://expressjs.com/)
* [Lodash](https://lodash.com/)
* [Heroku](https://devcenter.heroku.com/articles/getting-started-with-go)