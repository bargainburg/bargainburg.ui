require 'capistrano/ext/multistage'

set :application, 'bargainburg.ui'
set :repository , 'git@github.com:startuphokie/bargainburg.ui.git'

set :stages, ["staging", "production"]
set :default_stage, "staging"

set :normalize_asset_timestamps, false
set :use_sudo, false

# ask :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }

# set :deploy_to, '/var/www/my_app'
set :scm, :git

set :git_enable_submodules, 1

# set :format, :pretty
# set :log_level, :debug
# set :pty, true

# set :linked_files, %w{config/database.yml}
# set :linked_dirs, %w{bin log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system}

# set :default_env, { path: "/opt/ruby/bin:$PATH" }
# set :keep_releases, 5
namespace :deploy do
  task :migrate do
    puts "    not doing migrate because not a Rails application."
  end
  task :finalize_update do
    puts "    not doing finalize_update because not a Rails application."
  end
  task :start do
    puts "    not doing start because not a Rails application."
  end
  task :stop do 
    puts "    not doing stop because not a Rails application."
  end
  task :restart do
    puts "    not doing restart because not a Rails application."
  end
end
