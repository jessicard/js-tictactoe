js-tictactoe
======================

This is a basic Tic Tac Toe app using HTML5, JavaScript, and CSS3.

This app is built using my [static-heroku-rack-app](https://github.com/jessicard/static-heroku-rack-app) skeleton.

See live example [here](http://js-tictactoe.herokuapp.com/).

## To Do
1. Make it so a player can't put a tile where a tile has already been placed
1. Make it restart when a stale mate occurs
1. Make a winning tally
1. Pull out winning if statement into 3 separate for loops


## Setup

Install the required gems:

1. `gem install bundler`
1. `bundle install`
1. `bundle exec rackup`
1. Visit <http://localhost:9292>

Push it to your [Heroku](http://heroku.com) account:

1. `gem install heroku`
1. `heroku login`
1. `heroku create --stack=cedar mynewapp`
1. `git push heroku master`


## Authors

  * Jessica Dillon / [@jessicard](//www.github.com/jessicard)


## Contributing

1. Fork it
1. Get it running
1. Create your feature branch (git checkout -b my-new-feature)
1. Write your code and specs
1. Commit your changes (git commit -am 'Add some feature')
1. Push to the branch (git push origin my-new-feature)
1. Create new Pull Request
1. If you find bugs, have feature requests or questions, please file an issue.


## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
