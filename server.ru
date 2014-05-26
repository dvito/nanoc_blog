require 'rack-livereload'
require 'adsf'
use Adsf::Rack::IndexFileFinder, :root => "output"
use Rack::LiveReload
run Rack::File.new("output/")