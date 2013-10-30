set :application, 'bargainburg.ui'
set :repo_url, 'git@github.com:startuphokie/bargainburg.ui.git'

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

  desc 'Restart nginx'
  task :restart do
    on roles(:web) do
       #execute "kill -HUP $( cat /usr/local/nginx/logs/nginx.pid )"
    end
  end

  desc 'clone submodules'
  task :clone_submodules do
    on roles(:web) do
      #TODO currently does not work. Capistrano does not keep .git directory
      #execute "cd #{deploy_to}/current; git submodule init && git submodule update"
    end
  end

  after :finishing, 'deploy:cleanup'
  after :finished, 'deploy:clone_submodules'
end
