// url & querystring modules
//                              url.parse(string).query
//                                             |
//                url.parse(string).pathname   |
//                             |               |
//                             |               |
//                           ----- -------------------
//     http://localhost:8888/start?foo=bar&hello=world
//                                     ---       -----
//                                      |          |
//                                      |          |
//        querystring.parse(string)["foo"]         |
//                                                 |
//                   querystring.parse(string)["hello"]

function route(pathname) {
  console.log("About to route a request for " + pathname)
}

exports.route = route;